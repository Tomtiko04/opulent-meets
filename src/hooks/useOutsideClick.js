import { useEffect, useRef } from "react";

export function useOutsideClick(handler, caputuringPhase= true) {
	const ref = useRef();
	useEffect(
		function () {
			function handleClick(e) {
				if (ref.current && !ref.current.contains(e.target)) {
					handler();
				}
			}
			document.addEventListener("click", handleClick, caputuringPhase);
			return () => document.removeEventListener("click", handleClick, caputuringPhase);
		},
		[handler, caputuringPhase]
	);
	return ref;
}
