import FeatureCard3 from "@/components/shared/cards/FeatureCard3";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";

const Features3 = () => {
	const features = [
		{
			id: 1,
			title: "Reliable Export",
			icon: "tji-innovative",
			desc: "Graded East African commodities sourced, quality-checked, and shipped on schedule. Traceable supply you can plan around.",
			highlight: true,
		},
		{
			id: 2,
			title: "Local Expertise",
			icon: "tji-award",
			desc: "Our team works on the ground, with the supplier networks, quality knowledge, and regulatory fluency that distance can't replicate.",
		},
		{
			id: 3,
			title: "End-to-End Advisory",
			icon: "tji-team",
			desc: "For buyers who want more than supply: market intelligence, partner sourcing, and commercial representation across the region.",
		},
	];
	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				{/* CLIENT-CONFIRMED LIST: cashew, sesame, coffee, chia, vanilla, dried herbs, Hass avocado, macadamia (macadamia added per client comment 2026-06-27). Tea from the old card remains excluded — confirm if it should return. */}
				<div className="row row-gap-4">
					{/* Card 1 — highlighted, export-first */}
					<div
						className="col-lg-4 col-md-6 order-lg-0 order-1 wow fadeInUp"
						data-wow-delay=".2s"
					>
						<FeatureCard3 feature={features[0]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-1 order-0">
						<div className="h4-content-wrap text-center">
							<div className="sec-heading style-4 text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									Choose the Best
								</span>
								<h2 className="sec-title title-anim">
									Why Businesses Choose Elalou.
								</h2>
							</div>
							<a
								className="tj-primary-btn wow fadeInUp"
								data-wow-delay=".5s"
								href="/about"
							>
								<span className="btn-text">
									<span>Learn More</span>
								</span>
								<span className="btn-icon">
									<i className="tji-arrow-right-long"></i>
								</span>
							</a>
						</div>
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-2 order-2  wow fadeInUp"
						data-wow-delay=".3s"
					>
						<FeatureCard3 feature={features[1]} />
					</div>
					<div
						className="col-lg-4 col-md-6 order-lg-3 order-3 wow fadeInUp"
						data-wow-delay=".5s"
					>
						<FeatureCard3 feature={features[2]} />
					</div>
					<div className="col-lg-4 col-md-6 order-lg-4 order-4">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".9s"
							style={{
								backgroundImage: "url('/images/choose/choose-img.webp')",
							}}
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<div className="count-inner">
								<span className="count-text">Destination Markets</span>
								<FunfactSingle currentValue={18} symbol={""} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features3;
