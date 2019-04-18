import React, { Component } from 'react';

export default class TopBar extends Component {
	constructor(props){
		super(props)
		this.state = {name :"DRESSEUR", inputVal:""};
		this.changeInput = this.changeInput.bind(this);
	}
	changeInput(event){
		this.setState({inputVal: event.target.value});
	}
	
  render() {
  	console.log(this);
		return (
		      <div className="Profile">
			      <div className='TopBar'>
			      		<div className='profile_image'>
			      			<img id="profile_pic" src="https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/500px-Tortank-RFVF.png" />
			      		</div>
			      		
				      	<div className="Inputbox">
				      		<input  id="Search" type="text" placeholder="     Search..." value={this.state.inputVal} onChange={this.changeInput}></input>
				     	</div>
				     	<div className="box a">
			      			<a>{this.state.name}</a>
			      		</div>
				      	<div className="box a" onClick={() =>this.props.changePage("All")}>
				      		<a >CATEGORIES</a>
				      	</div>
			      </div>
		      </div>
    	);
  			
  	}
    
  }

