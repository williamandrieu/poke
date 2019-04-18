import React, { Component } from 'react';

export default class AdvancedSearch extends Component {
	constructor(props){
		super(props)
		this.state = {};
	}

  render() {
		return (
		      <div className="AdvancedSearch">
			      <div className="AdvancedSearchTitle">
							<p>Pokemon name :
							<input  id="Search" type="text"></input></p>
							<p>Abilities :
							<input  id="Search" type="text"></input></p>
							<p>Classfication :
							<input  id="Search" type="text"></input></p>
							<p>Pokedex number :
							<input  id="Search" type="text"></input></p>


			      	<p>Type :
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
							</p>
							<p>
							Générations :
							<select name="Generations" form="Generations">
								<option value="1G">1G</option>
								<option value="2G">2G</option>
								<option value="3G">3G</option>
								<option value="4G">4G</option>
								<option value="5G">5G</option>
								<option value="6G">6G</option>
								<option value="7G">7G</option>
							</select>
							</p>
							<p>
							Legendary :
							<select name="Legendary" form="Legendary">
								<option value="Yes">Yes</option>
								<option value="No">No</option>
							</select>
							</p>
							<input id="signUp" value="Search" type="button" onClick={() => this.changePage("")}/>
			      	</div>

			      </div>


    	);

  	}

  }
