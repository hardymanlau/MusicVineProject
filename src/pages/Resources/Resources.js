import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import ResourcesCard from "../../components/Resources/ResourcesCard";
import resourcesData from "../../components/Resources/ResourcesData"; 
import Header from "../../../src/components/general-components/Header";
import CurrencyConverter from "../../components/Resources/CurrencyConverter";
import "./Resources.css";

// Creating functional component to render resources page
function Resources() {

	return (
    
		<div className="resourcesContainer">
			{/* Using the imported navbar & header component */}
			<NSNavbar />
			<Header
				className="headerText"
				text="Travel Resources"
			/>
			<p id="resourcesPara">
				Embark on stress-free trip planning with our curated selection of
				resources. From securing the best flight deals on Skyscanner to staying
				informed with government travel advice, and ensuring a comfortable stay
				through Booking.com, our list simplifies your journey. The Been Travel
				app takes it a step further—select your visited countries, and the map
				visualizes your global adventures.
				<br />
				<br />
				Let these resources be your trusted companions in enhancing the joy of
				planning your next adventure, transforming the daunting task of trip
				preparation into an exciting journey of anticipation and discovery.
			</p>
			<h1 id="resourcesTagline"> Check out these resources </h1>
			{/* Using the imported resources card component */}
			<ResourcesCard resources={resourcesData} />
			<hr/>
			<h2 id="currencyTagline">Convert anywhere, travel everywhere</h2>
			{/* Using the imported currency converter and footer component */}
			<CurrencyConverter />

			<NSFooter />
		</div>
	);
}

export default Resources;
