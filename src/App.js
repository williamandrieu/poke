import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import Card from './components/Card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
        <center><Card/></center>
      </div>
    );
  }
}

export default App;
