import "./Card.style.css";
import "tachyons";

function Card(props) {
	return (
		<div className='card_container tc dib grow shadow-5'>
			<img alt='robot' src={`https://robohash.org/${props.id}`} />
			<h1>{props.name}</h1>
			<p>Age: {props.age}</p>
		</div>
	);
}

export default Card;
