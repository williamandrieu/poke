import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import List from './components/List';
import './App.css';
import img from './img/background.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <center className="center">
        <List/>
        </center>
      </div>
    );
  }
}

export default App;
