"use client";

import Swal from "sweetalert2";

const useSweetAlert = () => {
	const creteAlert = (type, message) => {
		const Toast = Swal.mixin({
			toast: true,
			position: "top-end",
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true,
			didOpen: toast => {
				// Offset the toast below the always-sticky header so it doesn't
				// overlap the nav (top-right placement sits flush to the top by default).
				const container = Swal.getContainer();
				if (container) container.style.paddingTop = "100px";
				toast.onmouseenter = Swal.stopTimer;
				toast.onmouseleave = Swal.resumeTimer;
			},
		});
		Toast.fire({
			customClass: "z-xxxl",
			icon: type,
			title: message,
		});
	};
	return creteAlert;
};

export default useSweetAlert;
