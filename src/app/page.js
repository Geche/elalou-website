import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/header/Header";
import About4 from "@/components/sections/about/About4";
import Features3 from "@/components/sections/features/Features3";
import Hero4 from "@/components/sections/hero/Hero4";
import Services4 from "@/components/sections/services/Services4";
import WhatWeExport from "@/components/sections/products/WhatWeExport";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export default function Home() {
	return (
		<div>
			<BackToTop />
			<Header headerType={4} />
			<Header headerType={4} isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<div className="space-for-header"></div>
						<Hero4 />
						<WhatWeExport />
						<Features3 />
						<About4 />
						<Services4 />
					</main>
					<Footer showOffice />
				</div>
			</div>

			<ClientWrapper />
		</div>
	);
}
