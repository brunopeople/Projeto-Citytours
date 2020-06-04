import React, { Component } from "react";
import Tour from "../Tour";
import "./tourlist.scss";


export default class Tourlist extends Component { 

// variável array que vai guardar os dados do array
	state = {
		tours: tourData
	};

// método que faz a remoção do elemento array do tourData
	removeTour = id => {
		console.log(id);
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