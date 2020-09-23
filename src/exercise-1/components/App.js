import React, {Component} from 'react';
import '../styles/App.css';
import {BrowserRouter, BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import About from '../../exercise-4/components/About';
import User from '../../exercise-4/components/User';
import Home from '../../exercise-4/components/Home';
class App extends Component {
  render() {
    return (
      
     <BrowserRouter>
     <div className="nav">
      <Link to="/" className="nav-link" >
      HOME
      </Link>
      <Link to="/user" className="nav-link">
      My Profile
      </Link>
      <Link to="/about" className="nav-link">
      About Us
      </Link>
      </div>
      <div className = "main">

      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
        <Route exact path="/about" component={About} />
      </Switch>
      </div>
      </BrowserRouter>
      
 
    );
  }
}

export default App;
