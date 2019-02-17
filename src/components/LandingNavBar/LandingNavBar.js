import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './LandingNavBar.css';
import logo from '../../assets/function-earth-logo2-shadow.png';

export class LandingNavBar extends Component {
	render() {
		return (
			<div className="landing-nav-bar">
				<div>

					{/* <Link to="/dashboard"> */}
						<img src={logo} className="landing-nav-bar-logo" alt="Think Programming Logo" />
					{/* </Link> */}
					<ul className='landing-nav-bar-buttons'>
						<li><Link to='/login' className='login-button'>
							Login
							</Link>
						</li>
						<li><Link to='/register' className='signup-button'>
							Signup
							</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
};

export default connect(mapStateToProps)(LandingNavBar);