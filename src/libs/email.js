import { Resend } from "resend";

// Single source of truth for the email layer shared by the contact and
// newsletter API routes. Keep all Resend wiring here so the routes stay thin.

export const TO_EMAIL = process.env.CONTACT_TO_EMAIL;
export const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL;

export const isConfigured = () =>
	Boolean(process.env.RESEND_API_KEY && TO_EMAIL && FROM_EMAIL);

let client = null;
export const getResend = () => {
	if (!client) client = new Resend(process.env.RESEND_API_KEY);
	return client;
};

// Minimal escaping so user input can't inject markup into the HTML emails.
export const escapeHtml = (value = "") =>
	String(value)
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");

// Collapse newlines/whitespace — used for any user value placed in a subject
// line to avoid header-style injection and keep subjects single-line.
export const oneLine = (value = "") => String(value).replace(/\s+/g, " ").trim();
