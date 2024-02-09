// Importing all components needed and CSS
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home/Home";
import CityBreaks from "./pages/CityBreaks/CityBreaks";
import RomanticGetaways from "./pages/CityBreaks/RomanticGetaways";
import FamilyBreaks from "./pages/CityBreaks/FamilyBreaks";
import IndependentTravel from "./pages/CityBreaks/IndependentTravel";
import OurCities from "./pages/CityBreaks/OurCities";
import Sightseeing from "./pages/Sightseeing/Sightseeing";
import Resources from "./pages/Resources/Resources";
import Restaurants from "./pages/Restaurants/Restaurants";
import Itinerary from "./pages/Itinerary/Itinerary";
import { ThemeProvider } from "./contexts/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/Home/About";
// import '@fortawesome/fontawesome-free/css/all.min.css'

// Main app component
function App() {	
	return (
		<div className="App">
			{/* ThemeProvider component is used to manage the theme state and allow the entire app to access this state */}
			<ThemeProvider>
				<Router>
					<Routes>
						{/* Defining each route to the corresponding page using Route component */}
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/city-breaks"
							element={<CityBreaks />}
						/>
						<Route
							path="/city-breaks/romantic-getaways"
							element={<RomanticGetaways />}
						/>
						<Route
							path="/city-breaks/family-breaks"
							element={<FamilyBreaks />}
						/>
						<Route
							path="/city-breaks/independent-travel"
							element={<IndependentTravel />}
						/>
						<Route
							path="/city-breaks/our-cities"
							element={<OurCities />}
						/>
						<Route
							path="/sightseeing"
							element={<Sightseeing />}
						/>
						<Route
							path="/resources"
							element={<Resources />}
						/>
						<Route
							path="/restaurants"
							element={<Restaurants />}
						/>
						<Route
							path="/itinerary"
							element={<Itinerary />}
						/>
                <Route
						path="/about"
						element={<About />}
					/>
					</Routes>
				</Router>
			</ThemeProvider>
		</div>
	);
}

export default App;
