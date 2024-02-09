import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import "./Header.css"

function Header(props){
    return(
        <header>
            <Container className="cont-title">
                <Row>
                    <h1>{props.text}</h1>
                </Row>
            </Container>
        </header>
    );

}

export default Header;
