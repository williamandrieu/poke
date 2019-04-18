import React, { Component } from 'react';

export default class MiniCard extends Component {
	constructor(props){
		super(props)
	}


	render(){
		const{pokedexId, name} = this.props;
		return(
			<div className="MiniCard">
				<div className="CardId">
					<img src={require("../img/pokemon/"+pokedexId+".png")}/>
					<div className="CardName">
					<p>{name}</p>
					</div>
				</div> 
			</div>		
			);
	}
}