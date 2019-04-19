import React, { Component } from 'react';
import Minicard from './MiniCard';
import Card from './Card';
import '../App.css';
import firebase from '../firebase.js';

export default class All extends Component {

  constructor(props) {
        super(props);
        this.changePokemon = this.changePokemon.bind(this);
        this.changePage = this.changePage.bind(this);
        this.state = { name: '',page: 'All', bdd: [],pokemon: [] };

    }

    changePage(page){
      this.setState({page: page});
    }
    changePokemon(pokemon){
		this.setState({pokemon: pokemon, page: 'Card'});
    }

  componentDidMount() {
    var bdd = [];
    	this.setState({page:'load'});
      firebase.database().ref('/pokemon/').limitToFirst(721).once('value').then((snapshot) =>{
      bdd = snapshot.val();
      this.setState({ bdd: bdd ,page:'All'});
      });
  }
  render() {
    const {page} = this.state;
    switch(page){
      case "Card":
      return (
      <div className="App">
        <div id="page">
        <Card pokemon={this.state.pokemon} changePage={this.changePage}/>
         </div>
      </div>
    );
      break;
      case "All":
      return (
      <div className="App">
        <div id="page">
        	<div id="containteAll">
	        	{
	          		this.state.bdd.map(function(item){
	             	return <Minicard pokemon={item} changePokemon={this.changePokemon}/>
	        },this)}
        	</div>
         </div>
      </div>
    );
      break;
	case "load":
      return (
      <div className="App">
        <div id="page">
        	<p>Loading ...</p>
         </div>
      </div>
    );
      break;

    }
    
  }
}
