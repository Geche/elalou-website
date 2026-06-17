import getNavItems from "@/libs/getNavItems";
import Link from "next/link";
import MobileMenuItem from "./MobileMenuItem";

const MobileNavbar = () => {
	const navItems = getNavItems();
	const lastIdx = navItems.length - 1;
	return (
		<div className="hamburger_menu">
			<div className="mobile_menu mean-container">
				<div className="mean-bar">
					<Link
						href="#nav"
						className="meanmenu-reveal"
						style={{ right: 0, left: "auto" }}
					>
						<span>
							<span>
								<span></span>
							</span>
						</span>
					</Link>
					<nav className="mean-nav">
						<ul>
							{navItems?.map((navItem, idx) => {
								const hasDropdown = navItem?.submenu?.length > 0;
								if (hasDropdown) {
									return (
										<MobileMenuItem
											key={idx}
											text={navItem?.name}
											url={navItem?.path ? navItem?.path : "#"}
										>
											{navItem?.submenu?.map((item, idx2) => (
												<li key={idx2}>
													<Link href={item?.path ? item?.path : "#"}>
														{item?.name}
													</Link>
												</li>
											))}
										</MobileMenuItem>
									);
								}
								return (
									<li key={idx} className={idx === lastIdx ? "mean-last" : ""}>
										<Link href={navItem?.path ? navItem?.path : "#"}>
											{navItem?.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default MobileNavbar;
