import React, { Component } from 'react';
import logo from '../../assets/function-earth-spinning.png';
import './Support.css';

class Support extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: null,
      email: null,
      phone: null,
      service: null,
      message: null
    }
  }
  render() {
    return (
      <div className="support">
        <header className="support-header">
          <img src={logo} className="landing-logo" alt="logo" /> 
          <h1>Support Function Earth</h1>
        </header>
        <main>
          <section className='contact-form'>
            <h2>Have an Issue? We've got your back</h2>
            <form class="support-form">
              <label class="support-form-title">Contact Us
              </label>
              <div class="" data-validate="Please Type Your Name">
                <label class="">Full Name *</label>
                <input class="" type="text" name="name" placeholder="Enter Your Name"/>
              </div>
              <div class="" data-validate="Enter Your Email (e@a.x)">
                <label class="">Email *</label>
                <input class="" type="text" name="email" placeholder="Enter Your Email "/>
              </div>
              <div class="">
                <label class="">Phone</label>
                <input class="" type="text" name="phone" placeholder="Enter Number Phone"/>
              </div>
              <div class="">
                <label class="">Which Function Earth Application is this in reference to?</label>
              </div>
              <div>
              <select class="" name="service" tabindex="-1" aria-hidden="true">
                <option>Please choose</option>
                <option>FunctionEarth.com</option>
                <option>FE Apple Store App</option>
                <option>FE Google Play App</option>
                <option>Other</option>
              </select>
              </div>
              <div class="dropDown"></div>
              <div class="">
                <label class="">Which Function Earth Application are you contacting about?</label>
                <div class="">
                  <input class="" id="radio1" type="radio" name="type-product" value="web" checked="checked" />
                  <label class="" for="radio1">FunctionEarth.com</label>
                </div>
                <div class="">
                  <input class="" id="radio2" type="radio" name="type-product" value="Apple Store App" />
                  <label class="" for="radio2">Apple Store App</label>
                </div>
                <div class="">
                  <input class="" id="radio3" type="radio" name="type-product" value="Google Play App" />
                  <label class="" for="radio3">Google Play App</label>
                </div>
              </div>
              <div class="">
                <div class="" data-validate="Please Type Your Message">
                  <label class="">Message</label>
                  <textarea class="" name="message" placeholder="Your message here..."></textarea>
                </div>
                <div class="">
                  <button class="">
                    <label>Submit</label>
                  </button>
                </div>
              </div>
            </form>
          </section>
        </main>
      </div>
    );
  }
}

export default Support;