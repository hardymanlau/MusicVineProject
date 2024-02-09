import React from "react";
import NSNavbar from "../../components/general-components/NSNavbar";
import NSFooter from "../../components/general-components/NSFooter";
import "./Home.css";
import Container from 'react-bootstrap/Container';
import Family from './homeimages/Family.png';
import London from './homeimages/London.jpeg';
import Amst from './homeimages/Amst.jpeg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ImageCarousel from './ImageCarousel';
import Reviews from './Reviews';
import Figure from 'react-bootstrap/Figure';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <NSNavbar/>
			<Link className="link-style" to="/city-breaks">
			<h1 className="title">City Breaks</h1>
			</Link>
                <header className="header">
                    <Row className="row">
                        <Col className="header-img">
                            <Figure className="figureImage">
                            <Figure.Image
                                width={269}
                                height={372}
                                alt="171x180"
                                src={Family}
                            />
                            <Figure.Caption className="header-caption">
							<p className="ImageP">BARCELONA</p>
							Barcelona: where Gaudi's masterpieces meet family magic! Dive into a city break full of whimsical wonders, vibrant streets, and unforgettable smiles.
                            </Figure.Caption>
                            </Figure>
                        </Col>
                        <Col className="header-img"> 
                        <Figure>
                        <Figure.Image
                            width={269}
                            height={372}
                            alt="171x180"
                            src={London}
                        />
                        <Figure.Caption className="header-caption">
						<p className="ImageP">LONDON</p>
						London calling for a couple's rendezvous! From romantic strolls along the Thames to charming tea dates, soak up the love in the heart of the UK.                        </Figure.Caption>
                        </Figure>
                        </Col>
                        <Col className="header-img">
                        <Figure>
                        <Figure.Image
                            width={269}
                            height={372}
                            alt="171x180"
                            src={Amst}
                        />
                        <Figure.Caption className="header-caption">
						<p className="ImageP">AMSTERDAM</p>
                        Discover yourself and create unforgettable memories on your solo Amsterdam escape. Embrace the freedom of exploring picturesque streets and cozy cafés. 
                        </Figure.Caption>
                        </Figure>
                        </Col>
                    </Row>
                </header>
				<Container>
            <Row className="motto">
              <h2>Helping you create a seamless travel experience.</h2>
            </Row>
			</Container>
            <Container className="sightseeing">
            <Link className="h3-title" to="/sightseeing">
			<h3 className="h3-title">Sightseeing</h3>
			</Link>
            </Container>
            <Container>
            <ImageCarousel />
            </Container>
            <Reviews />
            <NSFooter />
  			</div>
 			);
		}
export default Home;