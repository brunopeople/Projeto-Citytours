import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";
import { tourData } from "../../tourData";

export default class Tourlist extends Component { 

// variável array que vai guardar os dados do array
	state = {
		tours: tourData
	};

// método que faz a remoção do elemento array do tourData
	removeTour = id => {
		const { tours } = this.state;
		const sortedTours = tours.filter(tour => tour.id !== id );
		this.setState({
			tours: sortedTours
		});
	};

	render(){

		//console.log(this.state.tours)
		// varíavel que guarda o atributo das informações sobre o array.
		const { tours } = this.state;

		return(
			<section className="tourlist">
			{tours.map(tour => (
				<Tour key={tour.id} tour={tour} removeTour={this.removeTour} />
			))}
			</section>
		);
	}

}