import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Local Expertise",
			desc: "Our team lives and works in the region, with the networks, market knowledge, and regulatory fluency only the ground can teach.",
			icon: "tji-innovative",
		},
		{
			title: "End-to-End Advisory",
			desc: "From feasibility and licensing to partner sourcing and first contracts, we manage every step of your market entry.",
			icon: "tji-award",
		},
		{
			title: "Reliable Export",
			desc: "Graded East African commodities — coffee, tea, macadamia, avocado — sourced, certified, and shipped on schedule.",
			icon: "tji-support",
		},
	];

	return (
		<section id="choose" className="tj-choose-section section-gap">
			<div className="container">
				<div className="row">
					<div className="col-12">
						{type == 2 ? (
							<div className="sec-heading-wrap">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
								<div className="heading-wrap-content">
									<div className="sec-heading">
										<h2 className="sec-title title-anim">
											Why Global Businesses Choose <span>Elalou.</span>
										</h2>
									</div>
									<div className="btn-wrap wow fadeInUp" data-wow-delay=".6s">
										<ButtonPrimary text="Request a Call" url="/contact" />
									</div>
								</div>
							</div>
						) : (
							<div className="sec-heading text-center">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									<i className="tji-box"></i>Choose the Best
								</span>
								<h2 className="sec-title title-anim">
									Why Global Businesses Choose <span>Elalou.</span>
								</h2>
							</div>
						)}
					</div>
				</div>
				<div className="row row-gap-4 rightSwipeWrap">
					{features.map((feature, idx) => (
						<div key={idx} className="col-lg-4">
							<FeatureCard feature={feature} idx={idx} />
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
export default Features;
