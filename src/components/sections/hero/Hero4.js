import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import Image from "next/image";

const Hero4 = () => {
	return (
		<section className="h4-banner-section section-gap-x">
			<div className="h4-banner-area">
				<div className="h4-banner-content">
					<span className="sub-title wow fadeInUp" data-wow-delay=".2s">
						<i className="tji-box"></i> Your Gateway to East Africa
					</span>
					<h1 className="banner-title text-anim">
						Opening East African Markets to the World.
					</h1>
					<div className="banner-desc-area wow fadeInUp" data-wow-delay=".7s">
						<ButtonPrimary text={"Get Started"} url={"/contact"} />
						<div className="banner-desc">
							Market-entry advisory and commodity export from Nairobi — your
							partner across Kenya, Uganda, Tanzania, and Rwanda.
						</div>
					</div>
				</div>
				<div className="banner-img-area">
					<div className="banner-img">
						<Image
							data-speed="0.8"
							src="/images/hero/h4-hero-img.webp"
							alt=""
							width={1479}
							height={648}
						/>
					</div>
					<div className="h4-rating-box wow fadeInUp" data-wow-delay="1s">
						<h2 className="title">40+</h2>
						<p className="desc">Successful market entries across East Africa</p>
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

export default Hero4;
