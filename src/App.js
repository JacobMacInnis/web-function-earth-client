import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { FooterBar } from './components/footer-bar';
import Landing from './components/landing'
import Privacy from './components/privacy';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/"  component={Landing} />
        <Route exact path="/privacy" component={Privacy} />
        <FooterBar />
      </div>
    );
  }
}

export default withRouter(App);
