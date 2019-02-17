import React, { Component } from 'react';
// import logo from '../../assets/function-earth-spinning.png';
import './Support.css';
import LandingNavBar from '../LandingNavBar/LandingNavBar';

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const property = event.target.name;
    this.setState({[property]: event.target.value});
  }
  handleRadioChange(event) {
    console.log('trying')
    console.log(event.target.value, 'value');
    this.setState({service: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    console.log(this.state.service)
    return (
      <div className="support">
        <LandingNavBar />
        <header className="support-header">
          {/* <img src={logo} className="landing-logo" alt="logo" />  */}
          <h1>Function Earth Support</h1>
        </header>
        <main className='support-form'>
          <section className='support-form-inner'>
            <div className='support-form-header'>
              <h2>Have an Issue?</h2>
              <h2>We've got your back</h2>
            </div>
            <form className="support-form">
              {/* <label className="support-form-title">Contact Us
              </label> */}
              <div className='support-input-container'>
                <div className="support-name-container" data-validate="Please Type Your Name">
                  <label className="support-name-label support-label">Full Name *</label>
                  <input onChange={this.handleChange} className="support-name-input support-input" type="text" value={this.state.fullName} name="fullName" placeholder="Enter Your Name" required/>
                </div>
                <div className="support-email-container" data-validate="Enter Your Email (e@a.x)">
                  <label className="support-email-label support-label">Email *</label>
                  <input className="support-email-input support-input" onChange={this.handleChange} value={this.state.email} type="email" name="email" placeholder="Enter Your Email " required/>
                </div>
                <div className="support-phone-container">
                  <label className="support-phone-label support-label">Phone</label>
                  <input className="support-phone-input support-input" onChange={this.handleChange} value={this.state.phone} type="text" name="phone" placeholder="Enter Number Phone"/>
                </div>
              </div>
              <div className="support-radio-container">
                <label className="support-radio-header">Which Service Are You Contacting About?</label>
                <div className="support-radio-flex">
                  <div className='support-radio-left-left'></div>
                  <input 
                    onChange={this.handleRadioChange}
                    checked={this.state.service === 'web'}
                    className="support-radio-left" id="radio1" type="radio" name="type-product" value="web"  />
                  <label className="support-radio-right" htmlFor="radio1"><span className={`checkbox ${this.state.service === 'web' ? 'support-radio-clicked' : ''}`}></span>&nbsp;&nbsp;FunctionEarth.com</label>
                  <div className='support-radio-right-right'></div>
                </div>
                <div className="support-radio-flex">
                  <div className='support-radio-left-left'></div>
                  <input 
                    onChange={this.handleRadioChange}
                    checked={this.state.service === 'apple'}
                    className="support-radio-left" id="radio2" type="radio" name="type-product" value="apple" required />
                  <label className="support-radio-right" htmlFor="radio2"><span className={`checkbox ${this.state.service === 'apple' ? 'support-radio-clicked' : ''}`}></span>&nbsp;&nbsp;Apple Store App</label>
                  <div className='support-radio-right-right'></div>
                </div>
                <div className="support-radio-flex">
                  <div className='support-radio-left-left'></div>
                  <input 
                    onChange={this.handleRadioChange}
                    checked={this.state.service === 'google-play'}
                    className="support-radio-left" id="radio3" type="radio" name="type-product" value="google-play" required/>
                  <label className="support-radio-right" htmlFor="radio3"><span className={`checkbox ${this.state.service === 'google-play' ? 'support-radio-clicked' : ''}`}></span>&nbsp;&nbsp;Google Play App</label>
                  <div className='support-radio-right-right'></div>
                </div>
                <div className="support-radio-flex">
                  <div className='support-radio-left-left'></div>
                  <input 
                    onChange={this.handleRadioChange}
                    checked={this.state.service === 'my-account'}
                    className="support-radio-left" id="radio4" type="radio" name="type-product" value="my-account" required/>
                  <label className="support-radio-right" htmlFor="radio4"><span className={`checkbox ${this.state.service === 'my-account' ? 'support-radio-clicked' : ''}`}></span>&nbsp;&nbsp;My Account</label>
                  <div className='support-radio-right-right'></div>
                </div>
                <div className="support-radio-flex">
                  <div className='support-radio-left-left'></div>
                  <input 
                    onChange={this.handleRadioChange}
                    checked={this.state.service === 'other'}
                    className="support-radio-left" id="radio5" type="radio" name="type-product" value="other" required/>
                  <label className="support-radio-right" htmlFor="radio5"><span className={`checkbox ${this.state.service === 'other' ? 'support-radio-clicked' : ''}`}></span>&nbsp;&nbsp;Other</label>
                  <div className='support-radio-right-right'></div>
                </div>
              </div>
              <div className='support-input-container'>
                <div className="support-message-container">
                    <label className="support-message-label support-label">Message</label>
                    <textarea className="support-message-input support-input" onChange={this.handleChange} value={this.state.message} name="message" 
                    type='text'
                    placeholder="Your message here..." required />
                </div>
              </div>
              <div className="support-button-container">
                <div className='support-button'> Submit</div>
              </div>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default Support;