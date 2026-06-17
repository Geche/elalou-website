"use client";

import Image from "next/image";
import Link from "next/link";
const Logo = ({ headerType, isStickyHeader }) => {
	return (
		<div className="site_logo">
			<Link className="logo" href="/">
				<Image
					src={
						(headerType === 2 ||
							headerType === 5 ||
							headerType === 7 ||
							headerType === 9) &&
						!isStickyHeader
							? "/images/logos/elalou-h-light.png"
							: "/images/logos/elalou-h-dark.png"
					}
					alt="Elalou East Africa Limited"
					width={800}
					height={288}
					style={{ height: "auto" }}
				/>
			</Link>
		</div>
	);
};

export default Logo;
