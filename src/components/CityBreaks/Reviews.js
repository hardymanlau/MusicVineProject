import './Reviews.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Reviews(props) {
    return (
        <Container className="rightComponent">
        <Row>
          <Col xs={6} md={4}>
            <Image id="reviewImage" src={props.src} roundedCircle />
          </Col>
          <Col id="name" >{props.name}
          </Col>
        </Row>
        <Row id="review">{`"${props.review}"`}</Row>
      </Container>
    )
}

export default Reviews;