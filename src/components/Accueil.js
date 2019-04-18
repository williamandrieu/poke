import React, { Component } from 'react';

export default class Accueil extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}
	
  render() {
		return (
		      <div id="Accueil">
		      	<img id="logoAccueil"src={require("../img/Pokémon-Dex.png")}/>
		      	<p>Bienvenue sur Pokémon-Dex !</p>
		      	<div id="Description">
		      		<p>Ici tu peu faire des choses, plein de chose avec les pokemon.</p>
		      	</div>
		      </div>
    	);
  			
  	}
    
  }

