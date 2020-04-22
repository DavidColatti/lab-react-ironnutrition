import React, { Component } from 'react';
import './App.css';
import foods from './foods.json';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import Search from './components/Search';

class App extends Component {
	state = {
		displayedFoods: foods,
		foodName: '',
		foodCalories: '',
		foodImage: '',
		showForm: false
	};

	displayFood() {
		let foodsArray = [ ...this.state.displayedFoods ];

		return foodsArray.map((food) => {
			return <FoodBox name={food.name} calories={food.calories} image={food.image} />;
		});
	}

	changeFoodName = (e) => {
		this.setState({
			foodName: e.target.value
		});
	};

	changeFoodCalories = (e) => {
		this.setState({
			foodCalories: e.target.value
		});
	};

	changeFoodImage = (e) => {
		this.setState({
			foodImage: e.target.value
		});
	};

	submitFunction = (e) => {
		e.preventDefault();
		let foodArray = [ ...this.state.displayedFoods ];

		let newFood = {
			name: this.state.foodName,
			calories: this.state.foodCalories,
			image: this.state.foodImage
		};

		if (newFood.name != '' && newFood.calories != '' && newFood.image != '') {
			foodArray.push(newFood);

			this.setState({
				displayedFoods: foodArray,
				showForm: false
			});
		}
	};

	searchChange = (e) => {
		let foodsArray = foods.filter((search) => {
			return search.name.includes(e.target.value);
		});
		

		this.setState({
			displayedFoods: foodsArray
		});
	};

	render() {
		return (
			<div className="App">
				<h1>IronNutrition</h1>
				<button
					className="addNewFoodBtn"
					onClick={() => {
						this.setState({ showForm: !this.state.showForm });
					}}
				>
					Add New Food
				</button>
				{this.state.showForm ? (
					<form>
						<input onChange={this.changeFoodName} name="foodName" type="name" placeholder="Food Name" />
						<input
							onChange={this.changeFoodCalories}
							name="foodCalories"
							type="number"
							placeholder="Calories"
						/>
						<input onChange={this.changeFoodImage} name="foodImage" type="text" placeholder="ImageUrl" />
						<input className="submitBtn" type="submit" onClick={this.submitFunction} />
					</form>
				) : (
					''
				)}
				<Search searchChange={this.searchChange} />
				{this.displayFood()}
			</div>
		);
	}
}

export default App;
