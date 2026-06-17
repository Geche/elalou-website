"use client";

import { useEffect, useState } from "react";
const useIsSticky = isStickyHeader => {
	const [isSticky, setIsSticky] = useState(false);

	// sticky header related
	useEffect(() => {
		const handleScroll = () => {
			const st = window.scrollY;
			// Always-sticky: pin the navbar once scrolled past the hero,
			// regardless of scroll direction.
			setIsSticky(st > 300);
		};
		if (isStickyHeader) {
			handleScroll();
			window.addEventListener("scroll", handleScroll);
		}

		return () => {
			if (isStickyHeader) {
				window.removeEventListener("scroll", handleScroll);
			}
		};
	}, [isStickyHeader]);
	return isSticky;
};

export default useIsSticky;
