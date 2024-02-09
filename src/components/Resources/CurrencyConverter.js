import React, { useState } from "react";
import getCurrencies from "./GetCurrencies";
import "./CurrencyConverter.css";

// Functional component to render currency converter web app
function CurrencyConverter() {
	// Using useState to keep track of amount, from currency, to currency, and conversion result
	const currencies = getCurrencies();
	const [amount, setAmount] = useState(100);
	const [fromCurrency, setFromCurrency] = useState("GBP");
	const [toCurrency, setToCurrency] = useState("EUR");
	const [conversionResult, setConversionResult] = useState("");

	// Creating API url to fetch exchange rates
	// Key removed for security purposes and DM'd to instructor as part of marking 
	const apiKey = "";
	const apiUrl = `http://data.fixer.io/api/latest?access_key=${apiKey}`;

	//  Creating function to make API call to get exchange rates and perform the conversion calculation
	function convertCurrency() {
		// If statement to determine whether the function will run and make an API call
		if (amount.length !== 0)
			fetch(apiUrl)
				.then((response) => response.json())
				.then((data) => {
					let fromRate = data.rates[fromCurrency];
					let toRate = data.rates[toCurrency];
					const resultAmount = (amount / fromRate) * toRate;
					setConversionResult(
						`${amount} ${fromCurrency} = ${resultAmount.toFixed(
							2
						)} ${toCurrency}`
					);
				});
		else {
			// Alert the user if no amount is entered
			alert("Please enter an amount");
		}
	}

	return (
		<div>
			<div className="currencyContainer">
				<div className="currencyApp">
					<img
						id="currencyIcon"
						src="/images/Resources/currencyIcon.png"
						alt="Currency Icon"
					/>
					<label
						htmlFor="amount"
						id="amount"
					>
						Amount:{" "}
					</label>
					{/* Adding onChange to trigger setAmount useState to update the amount based on user input
					 */}
					<input
						type="number"
						value={amount}
						onChange={(e) => setAmount(e.target.value)}
					/>
					<div className="dropdownSelection">
						<label htmlFor="from">From:</label>
						{/* Adding onChange to trigger setFromCurrency useState to update the from currency based on user selection from dropdown */}
						<select
							id="fromSelection"
							value={fromCurrency}
							onChange={(e) => setFromCurrency(e.target.value)}
						>
							{currencies.map((currency) => (
								<option
									key={currency}
									value={currency}
								>
									{currency}
								</option>
							))}
						</select>
						<label htmlFor="to">To:</label>
						{/* Adding onChange to trigger setToCurrency useState to update the to currency based on user selection from dropdown */}
						<select
							id="toSelection"
							value={toCurrency}
							onChange={(e) => setToCurrency(e.target.value)}
						>
							{currencies.map((currency) => (
								<option
									key={currency}
									value={currency}
								>
									{currency}
								</option>
							))}
						</select>
					</div>
					{/* Adding onClick to button to trigger the convertCurrency function when button is clicked */}
					<button
						id="convertButton"
						onClick={convertCurrency}
					>
						Convert
					</button>
					{/* Display the conversion result only when there is a valid result */}
					{conversionResult && <p id="result">{conversionResult}</p>}
				</div>
			</div>
		</div>
	);
}

export default CurrencyConverter;
