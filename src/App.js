import React, { Component } from 'react';
import TopBar from './components/TopBar';
import Accueil from './components/Accueil';
import All from './components/all';
import './App.css';
import firebase from './firebase.js';

class App extends Component {

  constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = { name: '',page: 'Accueil'};

    }

    changePage(page){
      this.setState({page: page});
    }
    
  render() {
    const {page} = this.state;
    switch(page){
      case "Accueil":
      return (
      <div className="App">
        <TopBar changePage={this.changePage}/>
        <div id="page">
        <Accueil/>
         </div>
      </div>
    );
      break;
      case "All":
      return (
      <div className="App">
        <TopBar changePage={this.changePage}/>
        <div id="page">
          <All/>
         </div>
      </div>
    );
      break;

    }
    
  }
}

export default App;
