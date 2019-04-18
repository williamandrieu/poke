import React, { Component } from 'react';
import Card from './Card';

export default class List extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar",pokemon1:[]};
		this.pokeDescription = this.pokeDescription.bind(this);
	}

		 pokeDescription() {
		const pokeParse = require('../name.json')
		const url = 'https://en.wikipedia.org/wiki/';

		//console.log(pokeParse);
		
    	const pokemon = [];
    	for (let i = 1; i < 202; i++) {
    		pokemon.push(<Card name={pokeParse[i].name} src={require("../img/pokemon/"+(i+1)+".png")} />);
    	}
    	this.setState({pokemon1:pokemon}) ;
		}
	
	
	componentDidMount() {
		this.pokeDescription();
	}

  render() {
		return (
		      <div className="List">
			    {this.state.pokemon1} 
		      </div>
    	);
  			
  	}
    
  }

