import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import  "./ResourcesCard.css";
import food from "../../pages/Restaurants/food.jpg";

function BasicExample2(props) {

	function getDetails(){
		if (props.title !== ''){
			const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(props.title)}`;
			window.open(searchUrl, "_blank");
		}	
	};

	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src={props.src || food}
			/>
			<Card.Body>
				<Card.Title>{props.title}</Card.Title>
				<Card.Text>
					Cuisine: {props.text}
				</Card.Text>
				<Button onClick={getDetails} className="btn-card-style" >{props.buttonText}</Button>
			</Card.Body>
		</Card>
	);
}

export default BasicExample2;
