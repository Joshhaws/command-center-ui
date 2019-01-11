import React, { Component } from 'react';
import './Register.scss';
import { Link } from 'react-router-dom';

class Register extends Component {
    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="left-section">
                        <div className="left-section-content">
                            <div className="left-top">
                                <div className="login-title">Register</div>
                                {/* <Link to="/register" className="secondary-link">Create Account</Link> */}
                            </div>
                            
                            <div>
                                <input className="input-field"></input>
                                <div className="input-label">Username</div>
                                <input type="password" className="input-field"></input>
                                <div className="input-label">Password</div>
                                <input type="password" className="input-field"></input>
                                <div className="input-label">Confirm Password</div>
                                <button className="login-button">Sign Up</button>
                                {/* <Link to="/register" className="secondary-link">Forgot Password?</Link> */}
                            </div>        
                        </div>
                    </div>
                    <div className="right-section">
                        <img className="right-section-logo" src="logo.svg"/>
                        <div className="right-section-content">Command Center</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;