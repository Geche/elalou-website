const products = [
	{ name: "Cashew nuts", descriptor: "Raw and processed, graded for export" },
	{ name: "Sesame seeds", descriptor: "Cleaned and sorted, bulk volumes" },
	{ name: "Coffee", descriptor: "Specialty and commercial grades" },
	{ name: "Chia seeds", descriptor: "Food-grade, traceable origin" },
	{ name: "Vanilla beans", descriptor: "Cured pods, premium grade" },
	{ name: "Dried herbs", descriptor: "Cleaned and packed to spec" },
	{ name: "Hass avocado", descriptor: "Fresh, export-grade, seasonal" },
	{ name: "Macadamia nuts", descriptor: "In-shell and kernel, export-grade" },
];

const WhatWeExport = () => {
	return (
		<section id="what-we-export" className="tj-choose-section section-gap">
			<div className="container">
				{/* CLIENT-CONFIRMED LIST: cashew, sesame, coffee, chia, vanilla, dried herbs, Hass avocado, macadamia. Macadamia added per client comment (2026-06-27). Tea from the old card remains excluded — confirm if it should return. */}
				{/* CONFIRM WITH CLIENT: product descriptors are draft trade framing, not verified specs (incl. the new Macadamia descriptor). */}
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
							<div className="choose-box">
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
