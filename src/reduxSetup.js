/* 
we attempted to add Redux to our files
however, couldn't resolve this error:
'export 'useTheme' (imported as 'useTheme') was not found in 
'../contexts/ThemeContext' (possible exports: default)
so here are the files we wrote so that you can see what we attempted!
So as not to affect our running code, all the code which would’ve gone inside the themecontext, 
app index file has been compiled and commented out in this reduxSetup.js file.
You can see all this below: 
*/


// reduxSetup.js:

// import { createStore, combineReducers } from "redux";

// // Action - for setting the colour theme
// export const setTheme = (theme) => ({
// 	type: "SET_THEME",
// 	payload: theme,
// });

// // Reducer - function to handle themee state change
// const themeReducer = (state = "light", action) => {
// 	switch (action.type) {
// 		case "SET_THEME":
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

// const rootReducer = combineReducers({
// 	theme: themeReducer,
// });

// // Store - create REdux store using reducer
// const store = createStore(rootReducer);

// export default store;





// updated ThemeContext.js:

// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setTheme } from "./reduxSetup"; 

// const ThemeProvider = ({ children }) => {
// 	const theme = useSelector((state) => state.theme);
// 	const dispatch = useDispatch();

// 	useEffect(() => {
// 		// Using useEffect to update the CSS depending on the selected theme
// 		document.documentElement.style.setProperty(
// 			"--background-color",
// 			theme === "light" ? "#fff" : "#333"
// 		);
// 		document.documentElement.style.setProperty(
// 			"--text-color",
// 			theme === "light" ? "#000" : "#fff"
// 		);
// 		localStorage.setItem("theme", theme);
// 	}, [theme]);

// 	// Function to toggle between light and dark colour theme
// 	const toggleTheme = () => {
// 		// Dispatch the setTheme action
// 		dispatch(setTheme(theme === "light" ? "dark" : "light"));
// 	};

// 	// Expose the toggleTheme function
// 	return <>{children({ toggleTheme })}</>;
// };

// export default ThemeProvider;





// Updated Navbar:

// import React from "react";
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { useTheme } from "../contexts/ThemeContext";
// import Toggle from "../contexts/Toggle";
// import "./NSNavbar.css";

// function NSNavbar() {
// 	const { theme, toggleTheme } = useTheme();

// 	const handleToggle = () => {
// 		// Using the toggleTheme function from useTheme
// 		toggleTheme();
// 	};

// 	return (
// 		<div>
// 			<h1 className="nsTravelServices">NS Travel Services</h1>
// 			<Navbar
// 				collapseOnSelect
// 				expand="lg"
// 				className="navbar navbar-expand-lg"
// 			>
// 				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
// 				<Navbar.Collapse id="responsive-navbar-nav">
// 					<Nav className="mr-auto mx-auto">
// 						<Nav.Link href="/">Home</Nav.Link>
// 						<Nav.Link href="/city-breaks">City Breaks</Nav.Link>
// 						<Nav.Link href="/sightseeing">Sightseeing</Nav.Link>
// 						<Nav.Link href="/resources">Resources</Nav.Link>
// 						<Nav.Link href="/restaurants">Restaurants</Nav.Link>
// 						<Nav.Link href="/itinerary">Itinerary</Nav.Link>
// 					</Nav>

// 					<Toggle
// 						checked={theme === "dark"}
// 						// When toggle is toggled, handleToggle function is called
// 						onChange={handleToggle}
// 					/>
// 				</Navbar.Collapse>
// 			</Navbar>
// 		</div>
// 	);
// }

// export default NSNavbar;








// Updated index.js:

// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import { Provider } from "react-redux";
// import store from "./reduxSetup"; 
// import reportWebVitals from "./reportWebVitals";

// ReactDOM.render(
// 	<React.StrictMode>
// 		{/* Wrapping app with the Redux Provider */}
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</React.StrictMode>,
// 	document.getElementById("root")
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();







// Updated App.js:

// Importing all components needed and CSS
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Home from "./pages/Home/Home";
// import CityBreaks from "./pages/CityBreaks/CityBreaks";
// import RomanticGetaways from "./pages/CityBreaks/RomanticGetaways";
// import FamilyBreaks from "./pages/CityBreaks/FamilyBreaks";
// import IndependentTravel from "./pages/CityBreaks/IndependentTravel";
// import OurCities from "./pages/CityBreaks/OurCities";
// import Sightseeing from "./pages/Sightseeing/Sightseeing";
// import Resources from "./pages/Resources/Resources";
// import Restaurants from "./pages/Restaurants/Restaurants";
// import Itinerary from "./pages/Itinerary/Itinerary";
// import { Provider } from "react-redux";
// import store from "./reduxSetup"; 

// // Main app component
// function App() {
// 	return (
// 		<div className="App">
// 			{/* Wrapping app with the Redux Provider */}
// 			<Provider store={store}>
// 				<Router>
// 					<Routes>
// 						{/* Defining each route to the corresponding page using Route component */}
// 						<Route
// 							path="/"
// 							element={<Home />}
// 						/>
// 						<Route
// 							path="/city-breaks"
// 							element={<CityBreaks />}
// 						/>
// 						<Route
// 							path="/city-breaks/romantic-getaways"
// 							element={<RomanticGetaways />}
// 						/>
// 						<Route
// 							path="/city-breaks/family-breaks"
// 							element={<FamilyBreaks />}
// 						/>
// 						<Route
// 							path="/city-breaks/independent-travel"
// 							element={<IndependentTravel />}
// 						/>
// 						<Route
// 							path="/city-breaks/our-cities"
// 							element={<OurCities />}
// 						/>
// 						<Route
// 							path="/sightseeing"
// 							element={<Sightseeing />}
// 						/>
// 						<Route
// 							path="/resources"
// 							element={<Resources />}
// 						/>
// 						<Route
// 							path="/restaurants"
// 							element={<Restaurants />}
// 						/>
// 						<Route
// 							path="/itinerary"
// 							element={<Itinerary />}
// 						/>
// 					</Routes>
// 				</Router>
// 			</Provider>
// 		</div>
// 	);
// }

// export default App;