import React, { Component } from 'react';
import logo from '../../assets/function-earth-spinning.png';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <header className="about-header">
          <img src={logo} className="landing-logo" alt="logo" /> 
          <h1>About Function Earth</h1>
        </header>
      </div>
    );
  }
}

export default About;