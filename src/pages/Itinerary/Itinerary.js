import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import Header from '../../components/general-components/Header';
import ItineraryForm from '../../components/Itinerary/ItineraryForm';
import DownloadButton from '../../components/Itinerary/DownloadButton';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./Itinerary.css"

function Itinerary() {
	return (
		<div>
			<NSNavbar />
			<Header text="PLAN YOUR TRIP" />
			<Container>
				<Row>
					<Col>
					<Container className="itinerary-description">
						<p>Planning your next adventure?</p>
               			<p>Let us help you create a tailor-made itinerary. Simply fill in the details below, and we will handle the rest.</p>
                		<p>✨ Create an itinerary now! 🪐</p>
					</Container>

					{/* Generate PDF */}
					<div id="pdf-content">
					{/* Include the ItineraryForm component */}
					<ItineraryForm />
					<Container className="watermark">
						<p>NS Travel Services LTD. All rights reserved.</p>
						<a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
							<img src={"/plane.png"} width={30} height={30} alt="logo" />
						</a>
					</Container>
					</div>

					{/* Include the DownloadButton component */}
					<DownloadButton />	
					</Col>
				</Row>
			
			</Container>

			<NSFooter />		
		</div>
	);
}

export default Itinerary;
