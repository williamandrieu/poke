import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import Card from './components/Card';
import './App.css';
import img from './img/background.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <center>
        <Card/>
        <Card name="Bubu"/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        </center>
      </div>
    );
  }
}

export default App;
