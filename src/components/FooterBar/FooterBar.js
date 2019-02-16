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
    {props.location !== '/support' ? <div>
      <Link to="/support" className="btn footer-link">
      Support
      </Link>
    </div> : ''}
    {props.location !== '/privacy' ? <div>
      <Link to="/privacy" className="btn footer-link">
      Privacy Policy
      </Link>
    </div> : ''}
  </div>
);