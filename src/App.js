import React, { Component } from 'react';
import logo from './logo.svg';
import TopBar from './components/TopBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopBar/>
      </div>
    );
  }
}

export default App;
