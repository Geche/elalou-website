"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import ReactNiceSelect from "@/components/shared/Inputs/ReactNiceSelect";

const Contact3 = () => {
	return (
		<section className="tj-contact-section-2 section-bottom-gap">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="contact-form wow fadeInUp" data-wow-delay=".1s">
							<h3 className="title">Feel Free to Get in Touch.</h3>
							<form id="contact-form">
								<div className="row">
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="text"
												name="cfName"
												placeholder="Full Name*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="email"
												name="cfEmail"
												placeholder="Email Address*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<input
												type="tel"
												name="cfPhone"
												placeholder="Phone number*"
											/>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="form-input">
											<div className="tj-nice-select-box">
												<div className="tj-select">
													<ReactNiceSelect
														selectedIndex={0}
														options={[
															{ value: "0", optionName: "Choose a service" },
															{
																value: "1",
																optionName: "Market-Entry Strategy",
															},
															{
																value: "2",
																optionName: "Regulatory & Licensing",
															},
															{
																value: "3",
																optionName: "Partner & Distributor Sourcing",
															},
															{
																value: "4",
																optionName: "Local Representation",
															},
															{
																value: "5",
																optionName: "Market Intelligence",
															},
															{
																value: "6",
																optionName: "Commodity Export",
															},
														]}
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
											></textarea>
										</div>
									</div>
									<div className="submit-btn">
										<ButtonPrimary type={"submit"} text={"Submit Now"} />
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
