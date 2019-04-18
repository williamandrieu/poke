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
			      	<p>Nom : {this.props.name}</p>
			      	<p>Sexe : GROS CANON</p>
			      	<p>Type : Charmeur</p>
			      	<p>Classification : Turtle</p>
			      	</div>
			      </div>
			      <div>
			      	<p>STATS :</p>
			      </div>
			      <div className="listBox">
				      <div className="listItem">
				      	<ul>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      	</ul>
				      </div>
				      <div className="listItem" >
				      	<ul>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      		<li>coucou</li>
				      	</ul>
				      </div>
			      </div>
			      <div>
			      	<p>
			      		Blastoise (/ˈblæstɔɪs/), known in Japan as Kamex (カメックス Kamekkusu), is a Water–type Pokémon species in Nintendo and Game Freak's Pokémon franchise. Created by Ken Sugimori, it first appeared in the video games Pokémon Red and Blue and subsequent sequels, later appearing in various merchandise, spinoff titles, and animated and printed adaptations of the franchise. It is the final evolution of Squirtle and the evolved form of Wartortle. Its name is a portmanteau of the words "Blast" (referring to its water-cannons) and "Tortoise." Blastoise, along with the other starter Pokémon, was also in the first Pokémon movie.
			      	</p>
			      </div>
		      </div>
    	);
  			
  	}
    
  }

