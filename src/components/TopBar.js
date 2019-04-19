import React, { Component } from 'react';

export default class TopBar extends Component {
	constructor(props){
		super(props)
		this.state = {inputVal:""};
		this.changeInput = this.changeInput.bind(this);
	}
	changeInput(event){
		this.setState({inputVal: event.target.value});
	}
	
  render() {
		return (
		      <div className="Profile">
			      <div className='TopBar'>
			      		<div className='profile_image' onClick={() =>this.props.changePage("Accueil")}>
			      			<img id="profile_pic" src={require("../img/Pokémon-Dex.png")} />
			      		</div>
			      		
				      	<div className="Inputbox">
				      		<input id="Search" type="text" placeholder="     Search..." value={this.state.inputVal} onChange={this.changeInput}></input>
				     	</div>
				     	<div className="box a" onClick={() =>this.props.changePage("All")}>
			      			<a>All</a>
			      		</div>
			      		<div className="box a" onClick={() =>this.props.changePage("All")}>
			      			<a>Advanced search</a>
			      		</div>
				      	<div className="box a" onClick={() =>this.props.changePage("All")}>
				      		<a>CATEGORIES</a>
				      	</div>
			      </div>
		      </div>
    	);
  			
  	}
    
  }

