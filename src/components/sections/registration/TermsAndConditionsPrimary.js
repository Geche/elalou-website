import Link from "next/link";

const TermsAndConditionsPrimary = () => {
	return (
		<section className="terms-and-conditions section-gap">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-10">
						<div className="terms-and-conditions-wrapper">
							<div>
								<h2>
									Terms &amp; Conditions{" "}
									<span className="pill">Elalou East Africa Limited</span>
								</h2>
								<p className="muted">Last updated: January 1, 2026</p>
								<p>
									These Terms &amp; Conditions govern your use of the website of{" "}
									<strong>Elalou East Africa Limited</strong> (“Elalou”, “we”,
									“us”, or “our”). By accessing or using this website, you agree
									to be bound by these Terms. If you do not agree, please do not
									use the website.
								</p>
								<div className="note">
									<strong>Short version:</strong> This website provides general
									information about Elalou’s market-entry advisory and commodity
									export services. Nothing here is a binding offer or
									professional advice — engagements are governed by a separate
									written agreement.
								</div>
							</div>

							<nav className="toc" aria-label="Table of contents">
								<h2>Table of Contents</h2>
								<ol>
									<li>
										<button className="tj-scroll-btn" data-target="#use">
											Use of the Website
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#ip">
											Intellectual Property
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#services">
											Services &amp; Information
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#liability">
											Limitation of Liability
										</button>
									</li>
									<li>
										<button className="tj-scroll-btn" data-target="#law">
											Governing Law &amp; Contact
										</button>
									</li>
								</ol>
							</nav>

							<div id="use">
								<h3>1. Use of the Website</h3>
								<p>
									You may use this website for lawful, informational purposes
									only. You agree not to misuse the site, attempt to gain
									unauthorised access, disrupt its operation, or use it in any
									way that could damage Elalou or impair other users’ access.
								</p>
							</div>

							<div id="ip">
								<h3>2. Intellectual Property</h3>
								<p>
									All content on this website — including the Elalou name, logo,
									text, graphics, and layout — is the property of Elalou East
									Africa Limited or its licensors and is protected by applicable
									intellectual-property laws. You may not reproduce,
									redistribute, or use it for commercial purposes without our
									prior written consent.
								</p>
							</div>

							<div id="services">
								<h3>3. Services &amp; Information</h3>
								<p>
									Information about our market-entry advisory, representation,
									and commodity export services is provided for general guidance
									only. It does not constitute professional, legal, financial,
									or investment advice, and it is not a binding offer. Any
									engagement with Elalou is governed by a separate written
									agreement setting out the applicable scope, fees, and terms.
								</p>
								<p>
									While we work to keep the website accurate and up to date,
									figures, timelines, and examples shown may be illustrative and
									are subject to change without notice.
								</p>
							</div>

							<div id="liability">
								<h3>4. Limitation of Liability</h3>
								<p>
									To the fullest extent permitted by law, Elalou shall not be
									liable for any loss or damage arising from your use of, or
									reliance on, this website or its content. The website may
									contain links to third-party sites; we are not responsible for
									their content or practices.
								</p>
							</div>

							<div id="law">
								<h3>5. Governing Law &amp; Contact</h3>
								<p>
									These Terms are governed by the laws of the Republic of Kenya.
									Any disputes shall be subject to the exclusive jurisdiction of
									the courts of Kenya.
								</p>
								<p>
									Questions about these Terms? Contact us at{" "}
									<Link href="mailto:info@elalou.co.ke">info@elalou.co.ke</Link>{" "}
									or visit our{" "}
									<Link href="/contact">contact page</Link>.
								</p>
							</div>
							<p className="muted">
								<small>
									This Terms &amp; Conditions page is a placeholder provided for
									general guidance only and does not constitute legal advice.
									Please have it reviewed and adapted by a qualified legal
									advisor before launch.
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TermsAndConditionsPrimary;
