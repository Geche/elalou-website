const products = [
	{
		name: "Cashew nuts",
		descriptor: "Raw and processed, graded for export",
		img: "/images/products/cashew-nuts.svg",
	},
	{
		name: "Sesame seeds",
		descriptor: "Cleaned and sorted, bulk volumes",
		img: "/images/products/sesame-seeds.svg",
	},
	{
		name: "Coffee",
		descriptor: "Specialty and commercial grades",
		img: "/images/products/coffee.svg",
	},
	{
		name: "Chia seeds",
		descriptor: "Food-grade, traceable origin",
		img: "/images/products/chia-seeds.svg",
	},
	{
		name: "Vanilla beans",
		descriptor: "Cured pods, premium grade",
		img: "/images/products/vanilla-beans.svg",
	},
	{
		name: "Dried herbs",
		descriptor: "Cleaned and packed to spec",
		img: "/images/products/dried-herbs.svg",
	},
	{
		name: "Hass avocado",
		descriptor: "Fresh, export-grade, seasonal",
		img: "/images/products/hass-avocado.svg",
	},
	{
		name: "Macadamia nuts",
		descriptor: "In-shell and kernel, export-grade",
		img: "/images/products/macadamia-nuts.svg",
	},
];

const WhatWeExport = () => {
	return (
		<section id="what-we-export" className="tj-choose-section section-gap">
			<div className="container">
				{/* CLIENT-CONFIRMED LIST: cashew, sesame, coffee, chia, vanilla, dried herbs, Hass avocado, macadamia. Macadamia added per client comment (2026-06-27). Tea from the old card remains excluded — confirm if it should return. */}
				{/* CONFIRM WITH CLIENT: product descriptors are draft trade framing, not verified specs (incl. the new Macadamia descriptor). */}
				{/* PLACEHOLDER IMAGES: /images/products/*.svg are labeled placeholders. Swap each `img` path for real product photography (same ~3:2 ratio, web-optimized) before publishing. */}
				<div className="row">
					<div className="col-lg-12">
						<div className="sec-heading style-4 text-center">
							<h2 className="sec-title title-anim">What We Export</h2>
							<p className="desc wow fadeInUp" data-wow-delay=".3s">
								Graded commodities sourced from verified suppliers across the
								region, prepared for export to global buyers.
							</p>
						</div>
					</div>
				</div>
				<div className="row row-gap-4">
					{products.map((product, idx) => (
						<div
							key={idx}
							className="col-lg-4 col-md-6 wow fadeInUp"
							data-wow-delay={`.${(idx % 3) + 1}s`}
						>
							<div className="choose-box wwe-card">
								<div className="wwe-img">
									<img src={product.img} alt={product.name} loading="lazy" />
								</div>
								<div className="choose-content">
									<h4 className="title">{product.name}</h4>
									<p className="desc">{product.descriptor}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default WhatWeExport;
