import ImgCard from "../../components/CityBreaks/ImgCard.js";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'

function Footer(props) {
  return (
    <>
      <hr id="pageBreak" />
      <br />
      <h3 id="heading" >You might be interested in these trips too</h3>
      {/* Importing ImgCard for other recommended trips */}
      <Container>
        <Row>
          <Col md={{ span: 5, offset: 1}}>
            <ImgCard 
              src={props.srcOne} 
              packageText={props.cityName} 
              altText={props.altOne} 
            />
          </Col>
          <Col md={{ span: 5, offset: 0}}>
            <ImgCard 
              src={props.srcTwo} 
              packageText={props.cityNameTwo} 
              altText={props.altTwo} 
            />
				  </Col>
			  </Row>
        <br />
      </Container>
    </>
  );
}

export default Footer;