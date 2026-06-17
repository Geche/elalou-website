import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
	const makeActiveLink = useActiveLink();
	const navItems = getNavItems().map(item => makeActiveLink(item));

	return (
		<div className="menu-area d-none d-lg-inline-flex align-items-center">
			<nav id="mobile-menu" className="mainmenu">
				<ul>
					{navItems?.map((navItem, idx) => {
						const hasDropdown = navItem?.submenu?.length > 0;
						return (
							<li
								key={idx}
								className={`${hasDropdown ? "has-dropdown" : ""} ${
									navItem?.isActive
										? hasDropdown
											? "current-menu-ancestor"
											: "current-menu-item"
										: ""
								}`}
							>
								<Link href={navItem?.path ? navItem?.path : "#"}>
									{navItem?.name}
								</Link>
								{hasDropdown ? (
									<ul className="sub-menu">
										{navItem?.submenu?.map((item, idx2) => (
											<li
												key={idx2}
												className={item?.isActive ? "current-menu-item" : ""}
											>
												<Link href={item?.path ? item?.path : "#"}>
													{item?.name}
												</Link>
											</li>
										))}
									</ul>
								) : (
									""
								)}
							</li>
						);
					})}
				</ul>
			</nav>
		</div>
	);
};

export default Navbar;
