import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useTheme } from "../../contexts/ThemeContext";
import Toggle from "../../contexts/Toggle";
import "./NSNavbar.css";

function NSNavbar() {
	const handleToggle = () => {
		// Using the toggleTheme function from useTheme
		toggleTheme();
	};

	const { theme, toggleTheme } = useTheme();

	return (
		<div>
			<h1 className="nsTravelServices">NS Travel Services</h1>
			<Navbar
				collapseOnSelect
				expand="lg"
				className="navbar navbar-expand-lg"
			>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="mr-auto mx-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/city-breaks">City Breaks</Nav.Link>
						<Nav.Link href="/sightseeing">Sightseeing</Nav.Link>
						<Nav.Link href="/resources">Resources</Nav.Link>
						<Nav.Link href="/restaurants">Restaurants</Nav.Link>
						<Nav.Link href="/itinerary">Itinerary</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>

					<Toggle
						checked={theme === "dark"}
						// When toggle is toggled, handleToggle function is called
						onChange={handleToggle}
					/>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default NSNavbar;
