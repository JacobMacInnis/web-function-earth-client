import React from 'react';
import { Link } from 'react-router-dom';
import './FooterBar.css';

export const FooterBar = props => (
  <div className={`footer-bar ${props.location === '/' ? 'footer-landing' : ''}`}>
    {props.location !== '/' ? <div>
      <Link to="/" className="btn footer-link">
      HOME
      </Link>
    </div> : ''}
    <div>
      <Link to="/privacy" className="btn footer-link">
      Privacy Policy
      </Link>
    </div>
  </div>
);