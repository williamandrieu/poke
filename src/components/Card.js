import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar"};
	}
	
  render() {
		return (
		      <div className="Card">
			      <div className="CardTitle">
			      	<img src="https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/500px-Tortank-RFVF.png"/>
			      	<div className="CardInfo">
			      	<p>Nom : Tortank</p>
			      	<p>Sexe : GROS CANON</p>
			      	<p>Type : Charmeur</p>
			      	<p>Classification : Turtle</p>
			      	</div>
			      </div>
			      <div>
			      	<p>STATS :</p>
			      </div>
			      <div>
			      	<ul>
			      		<li>coucou</li>
			      		<li>coucou</li>
			      		<li>coucou</li>
			      		<li>coucou</li>
			      		<li>coucou</li>
			      	</ul>
			      </div>
		      </div>
    	);
  			
  	}
    
  }

