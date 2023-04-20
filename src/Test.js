// import { robots } from "./robots";
import { useState } from "react";

function Test() {
	const robots = [
		{ id: 1, name: "trulii", age: 13 },
		{ id: 2, name: "Danu", age: 18 },
		{ id: 3, name: "Sebi", age: 23 },
		{ id: 4, name: "Timar", age: 43 },
		{ id: 5, name: "Sergiu", age: 30 },
		{ id: 6, name: "Bogdi", age: 31 },
		{ id: 7, name: "Florin", age: 40 },
		{ id: 8, name: "Radu", age: 44 },
		{ id: 9, name: "Patri", age: 38 },
	];

	return (
		<div>
			<h1>Test</h1>
			<div>
				{robots.map((user, i) => {
					return <p>{robots[i].name}</p>;
				})}
			</div>
		</div>
	);
}

export default Test;
