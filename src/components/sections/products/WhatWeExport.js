const products = [
	{ name: "Cashew", descriptor: "Raw and processed, graded for export" },
	{ name: "Sesame", descriptor: "Cleaned and sorted, bulk volumes" },
	{ name: "Coffee", descriptor: "Specialty and commercial grades" },
	{ name: "Chia", descriptor: "Food-grade, traceable origin" },
	{ name: "Vanilla", descriptor: "Cured pods, premium grade" },
	{ name: "Dried herbs", descriptor: "Cleaned and packed to spec" },
	{ name: "Hass avocado", descriptor: "Fresh, export-grade, seasonal" },
];

const WhatWeExport = () => {
	return (
		<section id="what-we-export" className="tj-choose-section section-gap">
			<div className="container">
				{/* CONFIRM WITH CLIENT: product list reconciled to verified commodities (cashew, sesame, coffee, chia, vanilla, dried herbs, Hass avocado). Previous card mentioned tea + macadamia — confirm before publishing. */}
				{/* CONFIRM WITH CLIENT: product descriptors are draft trade framing, not verified specs. */}
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
