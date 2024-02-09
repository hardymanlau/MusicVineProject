import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import Header from "../../components/Resources/Header";
import RowItems from "./RowItems";
import "./Restaurants.css";

import { Button, Form} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";
import Axios from "axios";



function Restaurants() {

	// states for the text box and the restaurants from the api
	const [searchText, setSearchText] = useState('');
	const [searchEntered, setSearchEntered] = useState(false);
	const [restaurants, setRestaurants] = useState('');

	// consts for the header and button component
	const text = 'Restaurants';
	const buttonText = 'More Details';
	const apiKey = '';

	// sets the searchText state 
	const searchData = (event) => {
		setSearchText(event.target.value);
		console.log(searchText)
	}

	// checks if search box is empty
	function checkSearchBox() {
		if(searchText !== ''){
			setSearchEntered(true);
		}
	}
	// parameters for the api
	const options = {
		method: 'GET',
		url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchLocation',
		params: { query: searchText },
		headers: {
		  'X-RapidAPI-Key': apiKey,
		  'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
		},
	  };
	  // api to get the city id that matches the one in the search box
	  const fetchCity = async () => {
		try {
		  const response = await Axios(options);
		  if (
			response.data &&
			response.data.data &&
			response.data.data.length > 0 &&
			response.data.data[0].locationId
		  ) {
			const locationId = response.data.data[0].locationId;
			console.log(locationId);
			return locationId;
		  }
		} catch (error) {
			console.error(`Error! ${error}`);
		  	console.error(error);
		  	return error;
		}
	  };
	  // api to get the restuarants using the cityid from the previous api response
	  const showRestaurants = async () => {

		try{
			// makes sure search is filled and runs the fetch city function for city id
			checkSearchBox();
			const cityId = await fetchCity();
			console.log(cityId);
			// parameters for second api request to get the restaurants given the city id
			const idOptions = {
				method: 'GET',
				url: 'https://tripadvisor16.p.rapidapi.com/api/v1/restaurant/searchRestaurants',
				params: {
					locationId: cityId,
				},
				headers: {
					'X-RapidAPI-Key': apiKey,
					'X-RapidAPI-Host': 'tripadvisor16.p.rapidapi.com',
				},
			};

			const response = await Axios(idOptions);
			console.log(response.data.data);
			console.log(response.data.data.data);
			const dataLimit = response.data.data.data.slice(0, 8) //gets only the first 9 results
			// sets the restaurants state const to the results of the api
			setRestaurants(dataLimit);

			return dataLimit;
		}
		catch{
			return(
				alert("Please enter a valid city")
			);

		}
	  };

	
	return (
		<div>
			<NSNavbar />
			<Header text={text}/>

			<Container>
				<Row className="desc-text">
					<p style={{ color: '#828282', fontFamily: 'Lato', fontStyle: 'italic' }}> Search for restaurants by city and indulge in the wonderful cuisines each city has to offer. Each restaurant around the world offers pre-bookings, takeaway options and more.</p>					
				</Row>
			</Container>

			<Container>
				<Row className="search-items">
					<Col sm={8}>
					<Form >
						<Form.Control type="search" placeholder="Enter a city" className="me-2" aria-label="Search" onChange={searchData}/>
					</Form>
					</Col>
					<Col className="search" sm={4}>
						<Button onClick={showRestaurants}className="btn-style" >Search</Button>
					</Col>
				</Row>
				<Row className="desc-text">
					<h6>❗️Search will take some time to return results❗️</h6>
				</Row>
			</Container>

			<Container>
				<Row>
				{searchEntered &&
					restaurants &&
					restaurants.map((restaurant, index) => ( //maps through restaurants array and renders each item
						<RowItems
						key={index}
						title={restaurant?.name}
						text={restaurant?.establishmentTypeAndCuisineTags?.join(', ')} //joins the list of cuisines
						buttonText={buttonText}
						src={restaurant?.squareImgUrl}
						/>
					))}
				</Row>
			</Container>
			<NSFooter />
		</div>
	);
}

export default Restaurants;
