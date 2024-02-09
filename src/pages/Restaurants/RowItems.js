import BasicExample2 from "./ResourcesCard";
import Col from 'react-bootstrap/Col';

import "./RowItems.css";

function RowItems(props){


    return(
            <Col className="card-style">
                <BasicExample2 title={props.title} text={props.text} buttonText={props.buttonText} src={props.src}/>
            </Col>
    );
}

export default RowItems;