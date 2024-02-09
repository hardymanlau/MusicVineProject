import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";

// Test to check that when toggle is toggled, the theme is changed 
describe("ThemeProvider Component", () => {
	test("updates theme on toggle", () => {
		const { getByTestId } = render(
			<ThemeProvider>
				<ComponentUnderTest />
			</ThemeProvider>
		);

		// Getting slider using getByTestId
		const slider = getByTestId("slider")

		// Initial theme is light, expect correct background colour #fff
		expect(
			document.documentElement.style.getPropertyValue("--background-color")
		).toBe("#fff");

		// Trigger the toggle
		fireEvent.click(slider);

		// After toggle, the theme is dark, expect correct background colour #333
		expect(
			document.documentElement.style.getPropertyValue("--background-color")
		).toBe("#333");
	});
});

// Testing useTheme hook 
const ComponentUnderTest = () => {
	const { toggleTheme } = useTheme();

	return (
		<button
			onClick={toggleTheme}
			data-testid="slider"
		>
			Toggle Theme
		</button>
	);
};
