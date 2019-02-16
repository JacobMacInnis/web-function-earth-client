import React, { Component } from 'react';
import { Route, withRouter, Redirect } from 'react-router-dom';
import './App.css';
import { FooterBar } from './components/FooterBar/FooterBar';
import Landing from './components/Landing/Landing'
import Privacy from './components/Privacy/Privacy';
import Support from './components/Support/Support';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/"  component={Landing} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path='/about' component={About} />
        <Route exact path='/support' component={Support} />
        <FooterBar location={this.props.location.pathname}/>
      </div>
    );
  }
}

export default withRouter(App);
