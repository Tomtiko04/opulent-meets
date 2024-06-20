import { createContext, useContext, useEffect } from "react";
import { PropTypes } from "prop-types";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

export const DarkModeContext = createContext();

function DarkModeProvider({ children }) {
	const [isDarkMode, setIsDarkMode] = useLocalStorageState(window.matchMedia('(prefers-color-scheme: light)').matches, "isDarkMode");

	useEffect(
		function () {
			if (isDarkMode) {
				document.documentElement.classList.add("dark-mode");
				document.documentElement.classList.remove("light-mode");
			} else {
				document.documentElement.classList.add("light-mode");
				document.documentElement.classList.remove("dark-mode");
			}
		},
		[isDarkMode]
	);

	function toggleDarkMode() {
		setIsDarkMode((isDark) => !isDark);
	}

	return (
		<DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
			{children}
		</DarkModeContext.Provider>
	);
}

DarkModeProvider.propTypes = {
	children: PropTypes.any,
};

export default DarkModeProvider;
