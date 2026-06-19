// Pure, dependency-free form validation shared by the client components and the
// API routes. MUST NOT import any server-only modules (e.g. "resend") so it can
// be safely bundled into client components.

export const LIMITS = {
	name: 100,
	email: 254, // RFC 5321 maximum
	phone: 30,
	service: 60,
	message: 5000,
};

// Service names must match the dropdown options in Contact3.js. Empty = none chosen.
export const ALLOWED_SERVICES = [
	"Market-Entry Strategy",
	"Regulatory & Licensing",
	"Partner & Distributor Sourcing",
	"Local Representation",
	"Market Intelligence",
	"Commodity Export",
];

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s().-]{4,}$/;

export const isValidEmail = email => {
	if (typeof email !== "string") return false;
	const v = email.trim();
	return v.length <= LIMITS.email && EMAIL_RE.test(v);
};

const str = v => (v == null ? "" : String(v)).trim();

// Returns one of:
//   { isBot: true }                       honeypot tripped — caller should no-op
//   { ok: false, error }                  invalid input
//   { ok: true, value: {...cleaned} }     valid; use the cleaned values
export function validateContact(data = {}) {
	if (str(data.company)) return { isBot: true };

	const name = str(data.name);
	const email = str(data.email);
	const phone = str(data.phone);
	const service = str(data.service);
	const message = str(data.message);

	if (!name) return { ok: false, error: "Please enter your name." };
	if (name.length > LIMITS.name)
		return { ok: false, error: `Name must be ${LIMITS.name} characters or fewer.` };

	if (!email) return { ok: false, error: "Please enter your email address." };
	if (!isValidEmail(email))
		return { ok: false, error: "Please enter a valid email address." };

	if (phone && (phone.length > LIMITS.phone || !PHONE_RE.test(phone)))
		return { ok: false, error: "Please enter a valid phone number." };

	if (service && !ALLOWED_SERVICES.includes(service))
		return { ok: false, error: "Please choose a valid service." };

	if (!message) return { ok: false, error: "Please enter a message." };
	if (message.length > LIMITS.message)
		return { ok: false, error: `Message must be ${LIMITS.message} characters or fewer.` };

	return { ok: true, value: { name, email, phone, service, message } };
}

export function validateNewsletter(data = {}) {
	if (str(data.company)) return { isBot: true };

	const email = str(data.email);
	if (!email) return { ok: false, error: "Please enter your email address." };
	if (!isValidEmail(email))
		return { ok: false, error: "Please enter a valid email address." };

	return { ok: true, value: { email } };
}
