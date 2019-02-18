import React, { Component } from 'react';
// import logo from '../../assets/function-earth-spinning.png';
import './Support.css';
import LandingNavBar from '../LandingNavBar/LandingNavBar';
import { connect } from 'react-redux';
import { newSupportMessage, endSupportMessaging } from '../../actions/support';
import { FooterBar } from '../FooterBar/FooterBar';

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      popUp: false,
      success: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updatePopUp = this.updatePopUp.bind(this);
    this.closeSucessfulMessage = this.closeSucessfulMessage.bind(this);
  }
  handleChange(event) {
    const property = event.target.name;
    this.setState({[property]: event.target.value});
  }
  handleRadioChange(event) {
    this.setState({service: event.target.value});
  }
  handleSubmit(event) {
    if (this.state.fullName === '') {
      alert('Full Name is required');
    } else if (this.state.email === '') {
      alert('Email is required');
    } else if (this.state.service === '') {
      alert('Service is required');
    } else if (this.state.message === '') {
      alert('Message is required');
    } else {
    const { fullName, email, service, phone, message } = this.state;
    const support = {fullName, email, service, phone, message };
    this.props.dispatch(newSupportMessage(support));
    event.preventDefault();
    }
  }
  updatePopUp() {
    this.setState({popUp:true, success: true});
  }
  componentDidUpdate(prevProps) {
    if (this.props.success !== prevProps.success) {
      if (this.props.success === true) {
        this.updatePopUp();
      }
    }
  }
  closeSucessfulMessage() {
    this.setState({
      fullName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
      popUp: false,
      success: false
    })
    this.props.dispatch(endSupportMessaging());
  }
  render() {
    let popUp = '';
    if (this.state.popUp === true && this.state.success === true) {
      popUp = <div className='support-success-popup'>
        <h2>Success!</h2>
        <h4>Your Support Message was successfully sent</h4>
        <h4>Please allow up to 24 hours for a response</h4>
        <button onClick={this.closeSucessfulMessage}>Close</button>
        </div>;
    } else if (this.state.popUp === true && this.state.success === false) {
      popUp = <div className='support-failure-popup'>
        <h4>Your Support Message not sent</h4>
        <h4>{this.props.error.message}</h4>
        <button onClick={this.closeSucessfulMessage}>Close</button>
        </div>;
    }
    return (
      <div className="support">
        <LandingNavBar />
        <header className="support-header">
          <h1>Function Earth Support</h1>
        </header>
        <main className='support-form'>
          <section className='support-form-inner'>
            <div className='support-form-header'>
              <h2>Have an Issue?</h2>
              <h2>We've got your back</h2>
            </div>
            <form className="support-form">
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
              {/* <div className="support-button-container"> */}
                <input type='submit' onClick={this.handleSubmit} value='Submit'
                className='support-button'/> 
              {/* </div> */}
            </form>
          </section>
        </main>
        {this.state.popUp && popUp}
        <FooterBar location={this.props.location.pathname}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  success: state.support.success,
  error: state.support.error
});

export default connect(mapStateToProps)(Support);