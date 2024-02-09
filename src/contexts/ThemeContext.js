import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

// Creating context to manage the theme state
const ThemeContext = createContext();

export const useTheme = () => {
	// Accessing the current theme and toggleTheme function from the ThemeContext
	return useContext(ThemeContext);
};

// Creating the provider component to manage the theme state
// Accessing the stored theme from local storage
export const ThemeProvider = ({ children }) => {
	const storedTheme = localStorage.getItem("theme");
	const [theme, setTheme] = useState(storedTheme || "light");

	//  Using useEffect to update the CSS depending on the selected theme
	useEffect(() => {
		document.documentElement.style.setProperty(
			"--background-color",
			theme === "light" ? "#fff" : "#333"
		);
		document.documentElement.style.setProperty(
			"--text-color",
			theme === "light" ? "#000" : "#fff"
		);
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Function to toggle between light and dark colour theme
	const toggleTheme = () => {
		// Adding console log messages for error handling purpose - that toggle is working correctly and correct colour theme displayed
		console.log("Toggle Clicked");
		setTheme((prevTheme) => {
			const newTheme = prevTheme === "light" ? "dark" : "light";
			console.log("New Theme:", newTheme);
			return newTheme;
		});
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
