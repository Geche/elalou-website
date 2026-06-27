import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import FeatureCard from "@/components/shared/cards/FeatureCard";

const Features = ({ type }) => {
	const features = [
		{
			title: "Reliable Export",
			desc: "From farm-gate to port, we consolidate, grade, and document every shipment — so orders arrive on spec, on time, and fully traceable.",
			icon: "tji-support",
			highlight: true,
		},
		{
			title: "Local Expertise",
			desc: "Years embedded in East African markets let us read suppliers, grades, and regulations the way only an in-region team can.",
			icon: "tji-innovative",
		},
		{
			title: "End-to-End Advisory",
			desc: "Need a foothold, not just a shipment? We guide market entry, partner introductions, and representation on the ground.",
			icon: "tji-award",
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
									Choose the Best
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
									Choose the Best
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
