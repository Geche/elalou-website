"use client";
import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useIsSticky from "@/hooks/useIsSticky";
import Link from "next/link";
import { useState } from "react";
import HeaderTop from "./HeaderTop";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import Navbar from "./Navbar";

const Header = ({
	headerType = 1,
	isHeaderTop = false,
	topbarType = 1,
	isStickyHeader = false,
}) => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isSticky = useIsSticky(isStickyHeader);
	const handleMobileTogglerClick = () => {
		setIsMobileMenuOpen(true);
	};
	return (
		<>
			{/* <!-- start: Offcanvas Menu --> */}
			<MobileMenu
				isMobileMenuOpen={isMobileMenuOpen}
				setIsMobileMenuOpen={setIsMobileMenuOpen}
			/>
			{/* <!-- end: Offcanvas Menu --> */}

			<header
				className={`header-area ${
					headerType === 10
						? "header-3 h10-header"
						: headerType === 9
						? isStickyHeader
							? "header-3"
							: "h9-header"
						: headerType === 8
						? "header-1 h8-header"
						: headerType === 7
						? "header-2 h7-header"
						: headerType === 6
						? "header-1 h6-header"
						: headerType === 5
						? `header-2 ${isStickyHeader ? "" : "header-5"}`
						: headerType === 3
						? "header-3"
						: headerType === 2
						? "header-2"
						: "header-1"
				} section-gap-x ${
					isStickyHeader
						? `header-duplicate header-sticky ${isSticky ? "sticky" : ""}`
						: "header-absolute"
				} `}
			>
				{isHeaderTop && <HeaderTop type={topbarType} />}
				{headerType === 8 && !isStickyHeader ? (
					<div className="h8-header-mainmenu-bg-shape"></div>
				) : (
					""
				)}
				<div className="container-fluid">
					<div className="row">
						<div className="col-12">
							<div className="header-wrapper">
								{/* <!-- site logo --> */}
								<Logo headerType={headerType} isStickyHeader={isStickyHeader} />

								{/* <!-- navigation --> */}
								<Navbar />
								{/* <!-- header right info --> */}
								<div className="header-right-item d-none d-lg-inline-flex">
									<Link
										className="header-contact d-none d-xl-inline-flex"
										href="tel:+254700000000"
									>
										<span className="call-icon">
											<i className="tji-phone"></i>
										</span>
										<span className="call-text">+254 700 000 000</span>
									</Link>
									{headerType !== 5 ? (
										<div className="header-button">
											<ButtonPrimary text={"Let’s Talk"} url={"/contact"} />
										</div>
									) : (
										""
									)}
								</div>
								{/* <!-- menu bar --> */}
								<div
									className="menu_bar mobile_menu_bar d-lg-none"
									onClick={handleMobileTogglerClick}
								>
									<span></span>
									<span></span>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
