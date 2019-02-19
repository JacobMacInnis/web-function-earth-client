import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import Landing2 from './components/Landing/Landing2'
import Privacy from './components/Privacy/Privacy';
import Support from './components/Support/Support';
import About from './components/About/About';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/"  component={Landing2} />
        <Route exact path="/privacy" component={Privacy} />
        <Route exact path='/about' component={About} />
        <Route exact path='/support' component={Support} />
      </div>
    );
  }
}

export default withRouter(App);
