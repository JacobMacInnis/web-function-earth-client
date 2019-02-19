import React, { Component } from 'react';
// import logo from '../../assets/function-earth-spinning.png';
import globe from '../../assets/functionearth-globe.jpg';
import './Landing2.css';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import LandingMain from './LandingMain/LandingMain';
import { FooterBar } from '../FooterBar/FooterBar';

let deg = `rotate(${Math.floor(Math.random() * 360) + 1}deg)`;
  

class Landing extends Component {
  render() {
    return (
      <div className="landing">
        <LandingNavBar />
        <LandingMain />
      </div>
    );
  }
}

export default Landing;