import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import Landing from './components/landing'
import Privacy from './components/privacy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/"  component={Landing} />
        <Route exact path="/privacy"  component={Privacy} />
      </div>
    );
  }
}

export default App;
