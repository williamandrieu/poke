import React, { Component } from 'react';

export default class List extends Component {
	constructor(props){
		super(props)
		this.state = {name :"VolanBizar"};
	}

	function pokeDescription(argument) {
		const rp = require('request-promise');
		const $ = require('cheerio');
		const pokeParse = 
		const url = 'https://en.wikipedia.org/wiki/';

		rp(url)
		.then(function(html) {
   		//success!
    	const wikiUrls = [];
    	for (let i = 0; i < pokeParse.lenght; i++) {
    	wikiUrls.push($('big > a', html)[i].attribs.href);
    	}
    	return Promise.all(
    	wikiUrls.map(function(url) {
    		return potusParse('https://en.wikipedia.org' + url);
    	})
    	);
		})
		.then(function(presidents) {
			console.log(presidents);
		})
		.catch(function(err) {
   		//handle error
    	console.log(err);
		});
	}
	}
	
  render() {
		return (
		      <div className="List">
			     
		      </div>
    	);
  			
  	}
    
  }

