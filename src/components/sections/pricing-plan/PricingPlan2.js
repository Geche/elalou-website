import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import BootstrapWrapper from "@/components/shared/wrappers/BootstrapWrapper";

const PricingPlan2 = () => {
	return (
		<section className="tj-pricing-section-2 section-gap section-separator slidebar-stickiy-container">
			<div className="container">
				<div className="row">
					<div className="col-lg-8 order-2 order-lg-1">
						<BootstrapWrapper>
							<div className="accordion tj-faq pricing-accordion" id="pricing">
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-1"
										aria-expanded="true"
									>
										Market Scan
									</button>
									<div
										id="pricing-1"
										className="collapse show"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="pricing-top">
													<div className="package-desc">
														<p>Feasibility & Market Intelligence</p>
													</div>
													<div className="package-price">
														<span className="package-currency">$</span>
														<span className="price-number">1,500</span>
														<span className="package-period">/per study</span>
													</div>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>Market sizing and demand
														assessment
													</li>
													<li>
														<i className="tji-list"></i>Competitor and pricing
														landscape
													</li>
													<li>
														<i className="tji-list"></i>Regulatory and licensing
														overview
													</li>
													<li>
														<i className="tji-list"></i>Route-to-market
														recommendation
													</li>
													<li>
														<i className="tji-list"></i>Primary research on the
														ground
													</li>
													<li>
														<i className="tji-list"></i>Findings presentation and
														Q&amp;A
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-2"
										aria-expanded="false"
									>
										Market Entry
									</button>
									<div
										id="pricing-2"
										className="collapse"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="package-desc">
													<p>End-to-End Entry Engagement</p>
												</div>
												<div className="package-price">
													<span className="package-currency">$</span>
													<span className="price-number">3,500</span>
													<span className="package-period">/per month</span>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>Everything in Market
														Scan
													</li>
													<li>
														<i className="tji-list"></i>Company formation and
														licensing
													</li>
													<li>
														<i className="tji-list"></i>Vetted partner and
														distributor introductions
													</li>
													<li>
														<i className="tji-list"></i>Contract negotiation
														support
													</li>
													<li>
														<i className="tji-list"></i>Monthly progress
														reporting
													</li>
													<li>
														<i className="tji-list"></i>In-country meeting
														facilitation
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
								<div
									className="accordion-item pricing-box wow fadeInUp"
									data-wow-delay=".3s"
								>
									<button
										className="faq-title collapsed"
										type="button"
										data-bs-toggle="collapse"
										data-bs-target="#pricing-3"
										aria-expanded="false"
									>
										Local Representation
									</button>
									<div
										id="pricing-3"
										className="collapse"
										data-bs-parent="#pricing"
									>
										<div className="accordion-body pricing-inner">
											<div className="pricing-header">
												<div className="package-desc">
													<p>Your Office on the Ground</p>
												</div>
												<div className="package-price">
													<span className="package-currency">$</span>
													<span className="price-number">6,000</span>
													<span className="package-period">/per month</span>
												</div>
												<div className="pricing-btn">
													<ButtonPrimary
														text={"Chose Plan"}
														url={"/contact"}
														isTextBtn={true}
													/>
												</div>
											</div>
											<div className="list-items">
												<ul>
													<li>
														<i className="tji-list"></i>Everything in Market
														Entry
													</li>
													<li>
														<i className="tji-list"></i>Dedicated in-country
														team
													</li>
													<li>
														<i className="tji-list"></i>Relationship and tender
														management
													</li>
													<li>
														<i className="tji-list"></i>Quarterly strategy
														reviews
													</li>
													<li>
														<i className="tji-list"></i>Priority support across
														EAC
													</li>
													<li>
														<i className="tji-list"></i>Transition plan to your
														own office
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</BootstrapWrapper>
					</div>
					<div className="col-lg-4 order-1 order-lg-2">
						<div className="content-wrap slidebar-stickiy">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Flexible pricing
								</span>
								<h2 className="sec-title title-anim">Our Pricing Plan.</h2>
							</div>
							<p className="desc">
								Transparent engagement models for every stage of your East
								African journey.
							</p>
							<div
								className="d-none d-lg-inline-flex wow fadeInUp"
								data-wow-delay=".6s"
							>
								<ButtonPrimary text={"More Pricing"} url={"/pricing-plan"} />
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12">
						<div className="d-lg-none d-flex mt-5">
							<ButtonPrimary text={"More Pricing"} url={"/pricing-plan"} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingPlan2;
