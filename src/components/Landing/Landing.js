import React, { Component } from 'react';
// import logo from '../../assets/function-earth-spinning.png';
import globe from '../../assets/functionearth-globe.jpg';
import './Landing.css';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import { FooterBar } from '../FooterBar/FooterBar';

let deg = `rotate(${Math.floor(Math.random() * 360) + 1}deg)`;
  

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <LandingNavBar />
        <div className='landing-globe-container'>
          <img className='landing-globe' src={globe} alt='earth' 
          style={{transform: deg}}
          />
        </div>
        <div className='landing-header'>
          <h1 className='landing-title'>Function Earth</h1>
        </div>
        <FooterBar location={this.props.location.pathname}/>
        {/* <header className="landing-header">
          <img src={logo} className="landing-logo" alt="logo" /> 
          <h1>COMING 2019</h1>
        </header>
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div> */}
      </div>
    );
  }
}

export default Landing;