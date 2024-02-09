import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter"
import Header from "../../components/general-components/Header";
import ImgCard from "../../components/CityBreaks/ImgCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './CityBreaks.css'
import couple from "./images/th.jpg"
import family from "./images/Family-City-Tourism.jpg"
import solo from "./images/solo-citybreak-unsplash-1536x1025.jpg"
import city from "./images/TAM_2032-0c3adf634a31477494dd54358f545204.jpg"

function CityBreaks() {
	return (
		<div>
			<NSNavbar />
			<Header text="CITY BREAKS" />
			<p className="packageInfo">
			At NS Travel Services, we are the perfect travel planning website. 
			<br/>Choose from our options of family, couple or solo travel and find the city break right for you. 
			<br/><br/>Travel to any capital city in Europe and use our site for your all your planning, restaurant and sightseeing needs. 
			<br/>All our options below provide you some of our top choices for cities to go to. 
			<br/>Once you've chosen where to go, head to our sightseeing, resources, restaurants and itinerary tabs to plan your best trip. 
			<br/>Download a copy of your itinerary, and enjoy a fantastic holiday with NS Travel Services!
			</p>
			<br />
			<Container>
				<Row>
					<Col >
						<ImgCard 
							src={couple} 
							packageText="ROMANTIC GETAWAYS" 
							link="/city-breaks/romantic-getaways" 
							altText="Couple kissing in the road at night, lit up by the city lights behind" 
						/>
					</Col>
					<Col >
						<ImgCard 
							src={family} 
							packageText="FAMILY BREAKS" 
							altText="2 parents and 2 daughters walking along a cobbled street"
							link="/city-breaks/family-breaks" 
						/>
					</Col>
				</Row>
				<br />
				<Row>
					<Col>
						<ImgCard 
							src={solo} 
							packageText="INDEPENDENT TRAVEL" 
							altText="Single woman taking a picture from a bridge"
							link="/city-breaks/independent-travel" 
						/>
					</Col>
					<Col >
						<ImgCard 
							src={city} 
							packageText="OUR CITIES" 
							altText="The Louvre in the square, in Paris"
							link="/city-breaks/our-cities" 
						/>
					</Col>
				</Row>
				<br />
			</Container>
			<NSFooter />
		</div>
	);
}

export default CityBreaks;
