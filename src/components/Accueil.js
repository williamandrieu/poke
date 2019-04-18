import React, { Component } from 'react';

export default class Accueil extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}
	
  render() {
		return (
		      <div id="Accueil">
		      	<img src="./img/background.png"/>
		      	<p>Bienvenue sur Pokémon-Dex !</p>
		      	<div id="Description">
		      		<p>Ici tu peu faire des choses, plein de chose avec les pokemon.</p>
		      	</div>
		      </div>
    	);
  			
  	}
    
  }

