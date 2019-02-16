import React, { Component } from 'react';
import logo from '../../assets/function-earth-spinning.png';
import './Landing.css';

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <header className="landing-header">
          <img src={logo} className="landing-logo" alt="logo" /> 
          <h1>COMING 2019</h1>
        </header>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
    );
  }
}

export default Landing;