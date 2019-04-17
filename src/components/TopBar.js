import React, { Component } from 'react';

export default class TopBar extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar"};
	}
	
  render() {
		return (
		      <div className="Profile">


			      <div className='TopBar'>
			      		<div className='profile_image'>
			      			<img id="profile_pic" src="https://www.pokepedia.fr/images/thumb/2/24/Tortank-RFVF.png/500px-Tortank-RFVF.png" />
			      		</div>
			      		<div className="box a">
			      			<a>{this.state.name}</a>
			      		</div>
				      	<div className="box">
				      		<input type="text" placeholder="     Search..."  ></input>
				     	</div>

				      	<div className="box a">
				      		<a href="#" > Coucou</a>
				      	</div>
			      </div>
		      </div>
    	);
  			
  	}
    
  }

