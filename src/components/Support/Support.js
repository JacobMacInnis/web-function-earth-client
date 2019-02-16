import React, { Component } from 'react';
import logo from '../../assets/function-earth-spinning.png';
import './Support.css';

class Support extends Component {
  render() {
    return (
      <div className="support">
        <header className="support-header">
          <img src={logo} className="landing-logo" alt="logo" /> 
          <h1>Support Function Earth</h1>
        </header>
        <main>
          <section>
            <h2>Have an Issue? We've got your back</h2>
            <form>
              
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default Support;