import React, { Component } from 'react';
import './LandingMain.css';

class LandingMain extends Component {
  render() {
    return (
      <div className="landing-main-grid-container">
        <div></div>
        <div><h1 className='landing-main-title'><span className='landing-main-title-first-letter'>F</span >unction <span className='landing-main-title-first-letter'>E</span>arth</h1></div>
        <div><h2 className='landing-main-subtitle'>Tracking Efforts To Preserve Earth and Humanity</h2></div>  
        <div></div>  
        <div className="landing-main-inner-grid-container">
            <div className="landing-main-inner-grid-item landing-main-inner-grid-item-title top-register-grid">Sign up Today</div>
            <div className="landing-main-inner-grid-item"></div>
            <div className="landing-main-inner-grid-item">First Name</div>  
            <div className="landing-main-inner-grid-item"><input type='text' /></div>
            <div className="landing-main-inner-grid-item">Email</div>
            <div className="landing-main-inner-grid-item"><input type='text' /></div>
            <div className="landing-main-inner-grid-item">Username</div>
            <div className="landing-main-inner-grid-item"><input type='text' /></div>
            <div className="landing-main-inner-grid-item">Password</div>
            <div className="landing-main-inner-grid-item"><input type='text' /></div>
            <div className="landing-main-inner-grid-item">Confirm Password</div>
            <div className="landing-main-inner-grid-item"><input type='text' /></div>
            <div className="landing-main-inner-grid-item bottom-register-grid"><button>Sign Up</button></div>
        </div>
        <div>
          
        </div>
        <div></div>
      </div>
      // <div className="landing-main">
      //   <div className='landing-main-header'>
      //     <h1 className='landing-main-title'><span className='landing-main-title-first-letter'>F</span >unction <span className='landing-main-title-first-letter'>E</span>arth</h1>
      //     <h2 className='landing-main-title2'>Tracking Efforts To Preserve Earth and Humanity</h2>
      //   </div>
      // </div>
    );
  }
}

export default LandingMain;