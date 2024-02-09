import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CurrencyConverter from "../components/Resources/CurrencyConverter";

// Mocking the fetch function globally
global.fetch = jest.fn();

// Mocking the response for a successful API call with example exhcange rates
const successfulApiResponse = {
	rates: { GBP: 1, EUR: 1.2 },
};

beforeEach(() => {
	// Reset mock before each test
	fetch.mockReset();
});

// Testing to check that conversion calculation carried out when convert button is clicked
test("performs currency conversion on button click", async () => {
	fetch.mockResolvedValueOnce({
		json: async () => successfulApiResponse,
		ok: true,
	});

	render(<CurrencyConverter />);

	// Get convert button from screen
	const convertButton = screen.getByText("Convert");

	// Trigger a button click
	fireEvent.click(convertButton);

	// Wait for the component to handle the API response and update the UI
	await screen.findByText("100 GBP = 120.00 EUR");

  // Assert that the expected result is displayed
	expect(screen.getByText("100 GBP = 120.00 EUR")).toBeInTheDocument();
});
