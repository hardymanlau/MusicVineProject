import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import resources from "./ResourcesData";

// Functional component for rendering a set of resource cards based on resources array
function ResourcesCard({ resourcesData }) {
	return (
		<Container className="d-flex justify-content-center">
			<Row>
				{/* Using map to iterate over the resources array and generate individual cards */}
				{resources.map((resourcesData, index) => (
					<Col
						key={index}
						data-testid="resource-card"
					>
						<Card id="resources">
							<Card.Img
								variant="top"
								src={resourcesData.imageUrl}
							/>
							<Card.Body id="resourcesBody">
								<Card.Title id="resourcesTitle">{resourcesData.name}</Card.Title>
								<Card.Text id="description">
									{resourcesData.description}
								</Card.Text>
								<Button
									href={resourcesData.website}
									target="_blank"
									rel="noopener noreferrer"
								>
									Visit Website
								</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default ResourcesCard;
