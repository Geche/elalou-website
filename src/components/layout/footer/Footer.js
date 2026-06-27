import Link from "next/link";
import NewsletterForm from "@/components/layout/footer/NewsletterForm";

const Footer = ({ showOffice = false }) => {
	return (
		<footer className="tj-footer-section footer-1 section-gap-x">
			<div className="footer-main-area">
				<div className="container">
					<div className="row justify-content-between">
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div className="footer-widget wow fadeInUp" data-wow-delay=".1s">
								<div className="footer-logo">
									<Link href="/">
										<img src="/images/logos/elalou-h-dark.png" alt="Logos" />
									</Link>
								</div>
								<div className="footer-text">
									<p>
										Market-entry advisory and commodity export from Nairobi —
										opening East Africa for global businesses.
									</p>
								</div>
							</div>
						</div>
						<div className="col-xl-3 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".3s"
							>
								<h5 className="title">Services</h5>
								<ul>
									<li>
										<Link href="/services/6">Commodity Export</Link>
									</li>
									<li>
										<Link href="/services/1">Market-Entry Strategy</Link>
									</li>
									<li>
										<Link href="/services/2">Regulatory & Licensing</Link>
									</li>
									<li>
										<Link href="/services/3">Partner Sourcing</Link>
									</li>
									<li>
										<Link href="/services/4">Local Representation</Link>
									</li>
									<li>
										<Link href="/services/5">Market Intelligence</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-2 col-lg-4 col-md-6">
							<div
								className="footer-widget widget-nav-menu wow fadeInUp"
								data-wow-delay=".5s"
							>
								<h5 className="title">Resources</h5>
								<ul>
									<li>
										<Link href="/contact">Contact us</Link>
									</li>
									<li>
										<Link href="#">Recognitions</Link>
									</li>
									<li>
										<Link href="/blogs">News</Link>
									</li>
									<li>
										<Link href="#">Feedback</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-xl-4 col-lg-5 col-md-6">
							{showOffice ? (
								<div
									className="footer-widget widget-nav-menu wow fadeInUp"
									data-wow-delay=".7s"
								>
									<h5 className="title">Our Office</h5>
									<ul>
										<li>Westlands Business Park, Nairobi, Kenya</li>
										<li>
											<Link href="tel:+254725724124">+254 725 724124</Link>
										</li>
										<li>
											<Link href="mailto:info@elalouealgroup.com">
												info@elalouealgroup.com
											</Link>
										</li>
									</ul>
								</div>
							) : (
								<div
									className="footer-widget widget-subscribe wow fadeInUp"
									data-wow-delay=".7s"
								>
									<h3 className="title">Subscribe to Our Newsletter.</h3>
									<div className="subscribe-form">
										<NewsletterForm />
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			<div className="tj-copyright-area">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="copyright-content-area">
								<div className="footer-contact">
									<ul>
										<li>
											<Link href="tel:+254725724124">
												<span className="icon">
													<i className="tji-phone-2"></i>
												</span>
												<span className="text">+254 725 724124</span>
											</Link>
										</li>
										<li>
											<Link href="mailto:info@elalouealgroup.com">
												<span className="icon">
													<i className="tji-envelop-2"></i>
												</span>
												<span className="text">info@elalouealgroup.com</span>
											</Link>
										</li>
									</ul>
								</div>
								<div className="social-links">
									<ul>
										<li>
											<Link href="https://www.facebook.com/" target="_blank">
												<i className="fa-brands fa-facebook-f"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.instagram.com/" target="_blank">
												<i className="fa-brands fa-instagram"></i>
											</Link>
										</li>
										<li>
											<Link href="https://x.com/" target="_blank">
												<i className="fa-brands fa-x-twitter"></i>
											</Link>
										</li>
										<li>
											<Link href="https://www.linkedin.com/" target="_blank">
												<i className="fa-brands fa-linkedin-in"></i>
											</Link>
										</li>
									</ul>
								</div>
								<div className="copyright-text">
									<p>
										&copy; 2026 
										<Link href="/">Elalou East Africa Limited</Link>{" "}
										All rights reserved
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</footer>
	);
};

export default Footer;
