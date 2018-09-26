import React, { Component } from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';

class Nav extends Component {
    render(){
        return(
            <div className="main-nav">
                <div className="main-nav-left">
                    <Link to ="/" className="main-nav-title">Command Center</Link>
                    <Link to="/about" className="main-nav-about">About</Link>
                    <Link to="/contact" className="main-nav-contact">Contact</Link>
                </div>
                <div className="main-nav-right">
                    <div>Sign Up</div>
                    <div>Login</div>
                </div>
            </div>
        )
    }
}

export default Nav;