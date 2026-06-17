import BrandSlider1 from "@/components/shared/brands/BrandSlider1";
import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
import ProgressBar from "@/components/shared/progress/ProgressBar";
const About4 = () => {
	return (
		<section className="tj-funfact-section section-gap section-gap-x">
			<div className="container">
				<div className="row">
					<div className="col-lg-12">
						<div className="heading-wrap-content">
							<div className="sec-heading style-4">
								<span className="sub-title wow fadeInUp" data-wow-delay=".3s">
									OUR TRACK RECORD
								</span>
								<h2 className="sec-title title-anim">
									Numbers and facts that define performance.
								</h2>
							</div>
							<div className="progress-item">
								<div className="progress-circle">
									<ProgressBar />
								</div>
								<div className="progress-text">
									<span className="sub-title">
										Client retention across engagements.
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".7s"
						>
							<span className="count-icon">
								<i className="tji-growth"></i>
							</span>
							<span className="steps">01.</span>
							<div className="count-inner">
								<span className="count-text">Market Entries Advised</span>
								<FunfactSingle currentValue={40} symbol={"+"} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".5s"
						>
							<span className="count-icon">
								<i className="tji-worldwide"></i>
							</span>
							<span className="steps">02.</span>
							<div className="count-inner">
								<span className="count-text">Tonnes Shipped Annually</span>
								<FunfactSingle currentValue={4.2} symbol={"K"} />
							</div>
						</div>
					</div>
					<div className="col-lg-4 col-md-6">
						<div
							className="countup-item style-2 wow fadeInUp"
							data-wow-delay=".1s"
						>
							<span className="count-icon">
								<i className="tji-complete"></i>
							</span>
							<span className="steps">03.</span>
							<div className="count-inner">
								<span className="count-text">Years on the Ground.</span>
								<FunfactSingle currentValue={7} symbol={"+"} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid client-container-2 gap-top">
				<div className="row">
					<div className="col-12">
						<BrandSlider1 className="client-slider-3" />
					</div>
				</div>
			</div>
			<div className="bg-shape-1">
				<img src="/images/shape/pattern-2.svg" alt="" />
			</div>
			<div className="bg-shape-2">
				<img src="/images/shape/pattern-3.svg" alt="" />
			</div>
		</section>
	);
};

export default About4;
