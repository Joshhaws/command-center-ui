import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
    render() {
        return(
            <div className="body-content">
                <div className="login-container">
                    <div className="left-section">
                        <div className="left-section-content">
                            Login
                        </div>
                    </div>
                    <div className="right-section">
                        <div className="right-section-content">Command Center</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;