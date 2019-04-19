import React, { Component } from 'react';
import firebase from '../firebase.js';

export default class AdvancedSearch extends Component {
	constructor(props){
		super(props)
		this.state = {name:"",abilities:"",classification:"",number:"",isLegendary:"", bdd : []};
		this.changeName = this.changeName.bind(this);
		this.changeAbilities = this.changeAbilities.bind(this);
		this.changeClassification = this.changeClassification.bind(this);
		this.changeNumber = this.changeNumber.bind(this);
		this.isLegendary = this.isLegendary.bind(this);

		this.sortPokemon = this.sortPokemon.bind(this);
	}
	changeName(event){
		this.setState({name: event.target.value});
	}
	changeAbilities(event){
		this.setState({abilities: event.target.value});
	}
	changeClassification(event){
		this.setState({classification: event.target.value});
	}
	changeNumber(event){
		this.setState({number: event.target.value});
	}
	isLegendary(event){
		console.log(event.target.value)
		this.setState({isLegendary: event.target.value});
	}
	
	sortPokemon(){
			/*if (name != "") {
					ref = ref.orderByChild("name").equalTo(name);
					 ref.once('value').then((snapshot) =>{
			      	bdd = snapshot.val();
			      	this.setState({ bdd: bdd });
			      	});
				}*/
			var isLegendary = this.state.isLegendary;
			var name = this.state.name;
			var abilities = this.state.abilities;
			var classification = this.state.classification;
			var number = this.state.number;
			var bdd = this.state.bdd;
			var array = [];

			for (var i = 0; i < bdd.length; i++) {
			 	if(bdd[i].name.includes(name) || name == ""){
			 		array.push(bdd[i]);
			 	}
			}
			 var tmpArray = [];

			for (var j = 0; j < array.length; j++) {
			 		if(array[j].abilities.includes(abilities) || abilities == ""){
			 			tmpArray.push(array[j]);
			 		}
			 	}
			var tmp2Array = [];

			for (var k = 0; k < tmpArray.length; k++) {
			 		if(tmpArray[k].pokedex_number == number || number == ""){
			 			tmp2Array.push(tmpArray[k]);	
			 		
			 		}
			 	}

			var tmp3Array = [];

			for (var l = 0; l < tmp2Array.length; l++) {
				console.log(isLegendary);
			 		if(tmp2Array[l].is_legendary == isLegendary ){
			 			tmp3Array.push(tmp2Array[l]);	
			 		
			 		}
			 	} 	 	 	 		
			console.log(tmp3Array);
		}

		
	

	componentDidMount(){
		var bdd = [];
    	firebase.database().ref('/pokemon').limitToFirst(721).once('value').then((snapshot) =>{
      	bdd = snapshot.val();
      	this.setState({ bdd: bdd });
      	});
	
    	
	}



  render() {
		return (
		      <div className="AdvancedSearch">
		      <center>
			      <div className="AdvancedSearchTitle">

			      		<div className="InputAdvancedBox">
							<label htmlFor="name">Pokemon name :</label>
								<input  name="name" className="InputAdvanced" type="text"  value={this.state.name} onChange={this.changeName}></input>
							<label htmlFor="abilities">Abilities :</label>
								<input  name="abilities" className="InputAdvanced" type="text"  value={this.state.abilities} onChange={this.changeAbilities}></input>
							<label htmlFor="number">Pokedex number :</label>
								<input  name="number" className="InputAdvanced" type="text"  value={this.state.number} onChange={this.changeNumber}></input>
						</div>
						<div className="SelectAdvancedBox">
			      	<p>Type :</p>
							<div className="select" >
							<select name="type" form="type">
							  <option value="Normal">Normal</option>
							  <option value="Fire">Fire</option>
							  <option value="Fighting">Fighting</option>
							  <option value="Water">Water</option>
								<option value="Flying">Flying</option>
								<option value="Grass">Grass</option>
								<option value="Poison">Poison</option>
								<option value="Ground">Ground</option>
								<option value="Psychic">Psychic</option>
								<option value="Electric">Electric</option>
								<option value="Rock">Rock</option>
								<option value="Ice">Ice</option>
								<option value="Bug">Bug</option>
								<option value="Dragon">Dragon</option>
								<option value="Ghost">Ghost</option>
								<option value="Dark">Dark</option>
								<option value="Steel">Steel</option>
								<option value="Fairy">Fairy</option>
							</select>
							</div>
							<p>
							Générations :</p>
							<div className="select" >
							<select name="Generations" form="Generations">
								<option value="1">1G</option>
								<option value="2">2G</option>
								<option value="3">3G</option>
								<option value="4">4G</option>
								<option value="5">5G</option>
								<option value="6">6G</option>
								<option value="7">7G</option>
							</select>
							</div>
							<p>
							Legendary :</p>
							<div className="select">
							<select name="Legendary" form="Legendary" onChange={this.isLegendary}>
								<option></option>
								<option value="1">Yes</option>
								<option value="0">No</option>
							</select>
							</div>
							<input id="signUp" value="Search" type="button" onClick={this.sortPokemon}/>
							</div>
			      	</div>
			      	</center>
			      </div>


    	);

  	}

  }
