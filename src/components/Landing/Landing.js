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
          <h1 className='landing-title'><span className='landing-title-first-letter'>F</span >unction <span className='landing-title-first-letter'>E</span>arth</h1>
          <h2>Tracking Efforts To Preserve Earth and Humanity</h2>
        </div>
        <section className='landing-registration-outer-container'>
          <div className='landing-registration-inner-container'>
            <label>Sign up for your free account.</label>
            <form>
              <label>Name:</label>
              <input type='text'></input>
            </form>
          </div>
        </section>
        <FooterBar location={this.props.location.pathname}/>
      </div>
    );
  }
}

export default Landing;