import {
	FROM_EMAIL,
	TO_EMAIL,
	escapeHtml,
	getResend,
	isConfigured,
} from "@/libs/email";
import { getClientIp, rateLimit } from "@/libs/rateLimit";
import { validateNewsletter } from "@/libs/validation";

const MAX_BODY_BYTES = 10_000;

export async function POST(request) {
	const contentLength = Number(request.headers.get("content-length") || 0);
	if (contentLength > MAX_BODY_BYTES) {
		return Response.json({ ok: false, error: "Request too large." }, { status: 413 });
	}

	const limit = rateLimit(`newsletter:${getClientIp(request)}`);
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

	const result = validateNewsletter(body);
	if (result.isBot) return Response.json({ ok: true });
	if (!result.ok) return Response.json({ ok: false, error: result.error }, { status: 400 });

	const { email } = result.value;

	if (!isConfigured()) {
		console.error("Newsletter: email service is not configured (missing env vars).");
		return Response.json(
			{ ok: false, error: "Email service is not configured." },
			{ status: 500 }
		);
	}

	// TODO: swap this notification for a real ESP list API (Mailchimp/Brevo)
	// when proper list management / campaigns are needed.
	try {
		const { error } = await getResend().emails.send({
			from: FROM_EMAIL,
			to: TO_EMAIL,
			subject: "New newsletter subscriber",
			html: `<p>New newsletter signup: <strong>${escapeHtml(email)}</strong></p>`,
		});

		if (error) {
			console.error("Newsletter: send failed:", error);
			return Response.json(
				{ ok: false, error: "Could not subscribe. Please try again." },
				{ status: 502 }
			);
		}
	} catch (err) {
		console.error("Newsletter: send threw:", err);
		return Response.json(
			{ ok: false, error: "Could not subscribe. Please try again." },
			{ status: 502 }
		);
	}

	return Response.json({ ok: true });
}
