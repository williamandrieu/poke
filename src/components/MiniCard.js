import React, { Component } from 'react';

export default class MiniCard extends Component {
	constructor(props){
		super(props)
	}

	createCard(){
		this.props.changePokemon(this.props.pokemon);
		
	}

	render(){
		const{pokemon} = this.props;
		return(
			<div onClick={() => this.createCard()} className="MiniCard">
				<div className="CardId">
					<img src={require("../img/pokemon/"+pokemon.pokedex_number+".png")}/>
					<div className="CardName">
					<p>{pokemon.name}</p>
					</div>
				</div> 
			</div>		
			);
	}
}