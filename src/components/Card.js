import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar"};
	}
	
  render() {
  	const { pokedexId,name,type1,type2,sexe,classification,hp,speed,defense,attack,sp_attack,sp_defense } = this.props;
		return (
		      <div className="Card">
			      <div className="CardTitle">
			      	<img src={require("../img/pokemon/"+pokedexId+".png")}/>

			      	
			      	<div className="CardInfo">
			      	<p>Nom : {name}</p>
			      	<p>Pokedex Id : {pokedexId}</p>
			      	<p>Sexe : {sexe}</p>
			      	<p>Type 1 : {type1}</p>
			      	<p>Type 2 : {type2 == ""? "none": type2}</p>
			      	<p>Classification : {classification}</p>
			      	</div>
			      </div>
			      <div>
			      	<p>STATS :</p>
			      </div>
			      <div className="listBox">
				      <div className="listItem">
				      	<ul>
				      		<li>Hp : {hp}</li>
				      		<li>Defense : {defense} </li>
				      		<li>Attack : {attack} </li>
				      		<li>Speed : {speed}</li>
				      		<li>Sp attack : {sp_attack} </li>
				      		<li>Sp defense : {sp_defense}</li>
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

