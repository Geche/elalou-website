import FunfactSingle from "@/components/shared/funfact/FunfactSingle";
const Funfact1 = () => {
	return (
		<div className="tj-countup-section">
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="countup-wrap">
							<div className="countup-item">
								<FunfactSingle currentValue={40} symbol={"+"} />

								<span className="count-text">Market Entries Advised.</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={18} symbol={""} />
								<span className="count-text">Destination Markets</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={4.2} symbol={"K"} />
								<span className="count-text">Tonnes Shipped Annually</span>
								<span
									className="count-separator"
									style={{
										backgroundImage: "url('/images/shape/separator.svg')",
									}}
								></span>
							</div>
							<div className="countup-item">
								<FunfactSingle currentValue={7} symbol={"+"} />
								<span className="count-text">Years of Experience</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Funfact1;
