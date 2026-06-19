import {
	FROM_EMAIL,
	TO_EMAIL,
	escapeHtml,
	getResend,
	isConfigured,
	oneLine,
} from "@/libs/email";
import { getClientIp, rateLimit } from "@/libs/rateLimit";
import { validateContact } from "@/libs/validation";

const MAX_BODY_BYTES = 50_000;

export async function POST(request) {
	// Cheap DoS guard: reject oversized payloads before parsing.
	const contentLength = Number(request.headers.get("content-length") || 0);
	if (contentLength > MAX_BODY_BYTES) {
		return Response.json({ ok: false, error: "Request too large." }, { status: 413 });
	}

	const limit = rateLimit(`contact:${getClientIp(request)}`);
	if (!limit.ok) {
		return Response.json(
			{ ok: false, error: "Too many requests. Please try again later." },
			{ status: 429, headers: { "Retry-After": String(limit.retryAfterSec) } }
		);
	}

	let body;
	try {
		body = await request.json();
	} catch {
		return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
	}

	const result = validateContact(body);
	// Honeypot tripped — silently succeed so the bot doesn't retry; send nothing.
	if (result.isBot) return Response.json({ ok: true });
	if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: 400 });

	const { name, email, phone, service, message } = result.value;

	if (!isConfigured()) {
		console.error("Contact form: email service is not configured (missing env vars).");
		return Response.json(
			{ ok: false, error: "Email service is not configured." },
			{ status: 500 }
		);
	}

	const resend = getResend();
	const safe = {
		name: escapeHtml(name),
		email: escapeHtml(email),
		phone: escapeHtml(phone) || "—",
		service: escapeHtml(service) || "—",
		message: escapeHtml(message).replace(/\n/g, "<br>"),
	};

	try {
		const { error } = await resend.emails.send({
			from: FROM_EMAIL,
			to: TO_EMAIL,
			replyTo: email,
			subject: oneLine(`New website inquiry — ${service || "General"} — ${name}`),
			html: `
				<h2>New contact form submission</h2>
				<p><strong>Name:</strong> ${safe.name}</p>
				<p><strong>Email:</strong> ${safe.email}</p>
				<p><strong>Phone:</strong> ${safe.phone}</p>
				<p><strong>Service:</strong> ${safe.service}</p>
				<p><strong>Message:</strong></p>
				<p>${safe.message}</p>
			`,
		});

		if (error) {
			console.error("Contact form: inquiry send failed:", error);
			return Response.json(
				{ ok: false, error: "Could not send your message. Please try again." },
				{ status: 502 }
			);
		}
	} catch (err) {
		console.error("Contact form: inquiry send threw:", err);
		return Response.json(
			{ ok: false, error: "Could not send your message. Please try again." },
			{ status: 502 }
		);
	}

	// Auto-acknowledgement to the customer. Best-effort: a failure here (e.g.
	// the sending domain isn't verified in Resend yet) must NOT fail the request,
	// because Elalou already received the inquiry above.
	try {
		await resend.emails.send({
			from: FROM_EMAIL,
			to: email,
			subject: "We've received your message — Elalou East Africa",
			html: `
				<p>Hi ${safe.name},</p>
				<p>Thank you for reaching out to Elalou East Africa. We've received your
				message and a member of our team will get back to you shortly.</p>
				<p>Warm regards,<br>The Elalou East Africa Team</p>
			`,
		});
	} catch (err) {
		console.error("Contact form: auto-acknowledgement failed (non-fatal):", err);
	}

	return Response.json({ ok: true });
}
