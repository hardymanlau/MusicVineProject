import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './ImgCard.css'
import { Container } from 'react-bootstrap';

function ImgCard(props) {
  

  return (
    <>
      <Container id="cityBreaks" >
        <Card id="cityCard" >
          <Card.Img id="cityImages" variant="top" src={props.src} alt={props.altText} />
          <Card.Body id="cityPackage" >
              <Card.Text id="leftSideText" >
              {props.packageText}
              </Card.Text>
              <Link to={props.link} data-testid="link" >
                {/* Ensuring link takes you to top of page */}
                <Button 
                  id="rightSideButton" 
                  onClick={() => window.scrollTo(0, 0)}
                  >Read more</Button>
              </Link>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default ImgCard;