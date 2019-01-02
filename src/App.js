import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './assets/function-earth-spinning.png';
import './App.css';

import Privacy from './components/privacy';

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
        <Route exact path="/privacy"  component={Privacy} />
      </div>
    );
  }
}

export default App;
