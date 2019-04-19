import React, { Component } from 'react';

export default class Card extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar"};
	}
	
  render() {
  	const { pokemon} = this.props;
  	console.log(pokemon);
		return (
		      <div className="Card">
			      <div className="CardTitle">
			      <div onClick={() => this.props.changePage("All")}>Retour</div>
			      	<img src={require("../img/pokemon/"+pokemon.pokedex_number+".png")}/>
			      	<div className="CardInfo">
			      	<p>Name EN : {pokemon.name}</p>
			      	<p>Name JP : {pokemon.japanese_name}</p>
			      	<p>Pokedex Id : {pokemon.pokedex_number}</p>
			      	<p>Sexe : {pokemon.percentage_male}</p>
			      	<p>Type 1 : {pokemon.type1}</p>
			      	<p>Type 2 : {pokemon.type2 == ""? "none": pokemon.type2}</p>
			      	<p>Classification : {pokemon.classfication}</p>
			      	</div>
			      </div>
			      <div>
			      	<p>STATS :</p>
			      </div>
			      <div className="listBox">
				      <div className="listItem">
				      	<ul>
				      		<li>Hp : {pokemon.hp}</li>
				      		<li>Defense : {pokemon.defense} </li>
				      		<li>Attack : {pokemon.attack} </li>
				      		<li>Speed : {pokemon.speed}</li>
				      		<li>Sp attack : {pokemon.sp_attack} </li>
				      		<li>Sp defense : {pokemon.sp_defense}</li>
				      	</ul>
				      </div>
				      <div className="listItem" >
				      	<ul>
				      		<li>Nb step for eggs : {pokemon.base_egg_steps}</li>
				      		<li>Generation : {pokemon.generation}</li>
				      		<li>Weight : {pokemon.weight_kg+" kg"}</li>
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

