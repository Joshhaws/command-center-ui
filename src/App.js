import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div>
          <Route exact path="/" component={Landing} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Register" component={Register} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
