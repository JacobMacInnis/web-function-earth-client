import React, { Component } from 'react';
import logo from './assets/function-earth-spinning.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
          <h1>COMING 2019</h1>
        </header>
        
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    );
  }
}

export default App;
