"use client";
import { useState } from "react";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";
import useSweetAlert from "@/hooks/useSweetAlert";
import { LIMITS, isValidEmail } from "@/libs/validation";

const SERVICE_OPTIONS = [
	{ value: "0", optionName: "Choose a service" },
	{ value: "1", optionName: "Market-Entry Strategy" },
	{ value: "2", optionName: "Regulatory & Licensing" },
	{ value: "3", optionName: "Partner & Distributor Sourcing" },
	{ value: "4", optionName: "Local Representation" },
	{ value: "5", optionName: "Market Intelligence" },
	{ value: "6", optionName: "Commodity Export" },
];

const Contact3 = () => {
	const createAlert = useSweetAlert();
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		message: "",
		company: "", // honeypot
	});
	const [submitting, setSubmitting] = useState(false);

	const update = key => e => setForm(prev => ({ ...prev, [key]: e.target.value }));

	const handleSubmit = async e => {
		e.preventDefault();
		if (submitting) return;

		if (!form.name.trim()) {
			createAlert("error", "Please enter your name.");
			return;
		}
		if (!isValidEmail(form.email)) {
			createAlert("error", "Please enter a valid email address.");
			return;
		}
		if (!form.message.trim()) {
			createAlert("error", "Please enter a message.");
			return;
		}

		setSubmitting(true);
		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});
			const data = await res.json().catch(() => ({}));

			if (res.ok && data.ok) {
				createAlert("success", "Thanks! Your message has been sent.");
				setForm({
					name: "",
					email: "",
					phone: "",
					service: "",
					message: "",
					company: "",
				});
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
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">Feel Free to Get in Touch.</h3>
							<form id="contact-form" onSubmit={handleSubmit}>
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
												maxLength={LIMITS.name}
												value={form.name}
												onChange={update("name")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder="Email Address*"
												maxLength={LIMITS.email}
												value={form.email}
												onChange={update("email")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder="Phone number"
												maxLength={LIMITS.phone}
												value={form.phone}
												onChange={update("phone")}
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={SERVICE_OPTIONS}
														getSelectedOption={option =>
															setForm(prev => ({
																...prev,
																service:
																	option?.value === "0"
																		? ""
																		: option?.optionName || "",
															}))
														}
													/>
												</div>
											</div>
										</div>
									</div>
									<div className="col-sm-12">
										<div className="form-input message-input">
											<textarea
												name="cfMessage"
												id="message"
												placeholder="Type message*"
												maxLength={LIMITS.message}
												value={form.message}
												onChange={update("message")}
											></textarea>
										</div>
									</div>
									{/* Honeypot — hidden from real users, catches bots */}
									<input
										type="text"
										name="company"
										tabIndex="-1"
										autoComplete="off"
										value={form.company}
										onChange={update("company")}
										style={{
											position: "absolute",
											left: "-9999px",
											width: "1px",
											height: "1px",
											opacity: 0,
										}}
										aria-hidden="true"
									/>
									<div className="submit-btn">
										<ButtonPrimary
											type={"submit"}
											text={submitting ? "Sending…" : "Submit Now"}
											disabled={submitting}
										/>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact3;
