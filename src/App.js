import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import Accueil from './components/Accueil';
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

  componentDidMount() {
    var name = '';
    firebase.database().ref('/pokemon').once('value').then((snapshot) =>{
      name = snapshot.val()[0].name;
      this.setState({ name: name });
      });
  }
  render() {
    const {page} = this.state;
    switch(page){
      case "Accueil":
      return (
      <div className="App">
        <TopBar/>
        <Accueil/>
      </div>
    );
      break;

    }
    
  }
}

export default App;
