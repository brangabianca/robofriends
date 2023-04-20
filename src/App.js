import "./App.css";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import React, { Component } from "react";
// import Test from "./Test";

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			serachfield: "",
		};
	}

	onSearchChange = (e) => {
		this.setState({ serachfield: e.target.value });
	};
	render() {
		const filteredRobots = this.state.robots.filter((robots) => {
			return robots.name
				.toLowerCase()
				.includes(this.state.serachfield.toLowerCase());
		});

		return (
			<div className='tc'>
				<h2>RobotFriends</h2>
				{/* <Test /> */}
				<SearchBox searchChange={this.onSearchChange} />
				<CardList robots={filteredRobots} />
			</div>
		);
	}
}

export default App;
