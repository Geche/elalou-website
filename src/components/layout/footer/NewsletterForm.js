"use client";
import { useState } from "react";
import Link from "next/link";
import useSweetAlert from "@/hooks/useSweetAlert";
import { LIMITS, isValidEmail } from "@/libs/validation";

const NewsletterForm = () => {
	const createAlert = useSweetAlert();
	const [email, setEmail] = useState("");
	const [company, setCompany] = useState(""); // honeypot
	const [agreed, setAgreed] = useState(false);
	const [submitting, setSubmitting] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		if (submitting) return;

		if (!isValidEmail(email)) {
			createAlert("error", "Please enter a valid email address.");
			return;
		}
		if (!agreed) {
			createAlert("error", "Please agree to our Terms & Conditions.");
			return;
		}

		setSubmitting(true);
		try {
			const res = await fetch("/api/newsletter", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, company }),
			});
			const data = await res.json().catch(() => ({}));

			if (res.ok && data.ok) {
				createAlert("success", "Thanks for subscribing!");
				setEmail("");
				setAgreed(false);
			} else {
				createAlert("error", data.error || "Something went wrong. Please try again.");
			}
		} catch {
			createAlert("error", "Network error. Please try again.");
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				name="email"
				placeholder="Enter email"
				maxLength={LIMITS.email}
				value={email}
				onChange={e => setEmail(e.target.value)}
			/>
			<button type="submit" disabled={submitting}>
				<i className="tji-plane"></i>
			</button>
			{/* Honeypot — hidden from real users, catches bots */}
			<input
				type="text"
				name="company"
				tabIndex="-1"
				autoComplete="off"
				value={company}
				onChange={e => setCompany(e.target.value)}
				style={{
					position: "absolute",
					left: "-9999px",
					width: "1px",
					height: "1px",
					opacity: 0,
				}}
				aria-hidden="true"
			/>
			<label htmlFor="agree">
				<input
					id="agree"
					type="checkbox"
					checked={agreed}
					onChange={e => setAgreed(e.target.checked)}
				/>
				Agree to our{" "}
				<Link href="/terms-and-conditions">Terms & Condition?</Link>
			</label>
		</form>
	);
};

export default NewsletterForm;
