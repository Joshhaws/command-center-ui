import React, { Component } from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="left-section">
                        <div className="left-section-content">
                            <div className="left-top">
                                <div className="login-title">Login</div>
                                <Link to="/register" className="secondary-link">Create Account</Link>
                            </div>
                            
                            <div>
                                <input className="input-field"></input>
                                <div className="input-label">Username</div>
                                <input type="password" className="input-field"></input>
                                <div className="input-label">Password</div>
                                <button className="login-button">Login</button>
                                <Link to="/register" className="secondary-link">Forgot Password?</Link>
                            </div>        
                        </div>
                    </div>
                    <div className="right-section">
                        <img className="right-section-logo" src="logo.svg" alt="logo" />
                        <div className="right-section-content">Command Center</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;