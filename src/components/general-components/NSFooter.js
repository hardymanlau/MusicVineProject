import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

import "./NSFooter.css";

function NSFooter() {
	return (
		<div>
			<footer className="text-white">
				<Container>
					<Row>
						<Col>
							{/* Importing icons from FontAwesome */}
							<div className="icons">
								<FontAwesomeIcon
									className="icon"
									icon={faFacebookF}
								/>
								<FontAwesomeIcon
									className="icon"
									icon={faInstagram}
								/>
								<FontAwesomeIcon
									className="icon"
									icon={faYoutube}
								/>
							</div>
							<p className="copyRight">
								&copy; 2023 NS Travel Services LTD. All rights reserved.
								NStravelservices.com is a trading name of NS Travel Services UK
								Limited. Registered office: WFH 123. Registered in England:
								company number 123456.
							</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}

export default NSFooter;
