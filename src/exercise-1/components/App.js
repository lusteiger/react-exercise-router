import React, { Component } from "react";
import "../styles/App.css";
import {
  BrowserRouter,
  NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import About from "./About";
import Profile from "./Profile";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="nav">
          <NavLink
            exact
            to="/"
            className="nav-link"
            activeStyle={{
              textDecorationLine: "underline",
            }}
          >
            HOME
          </NavLink>
          <NavLink
            to="/products"
            className="nav-link"
            activeStyle={{
              textDecorationLine: "underline",
            }}
          >
            Product
          </NavLink>
          <NavLink
            to="/profile"
            className="nav-link"
            activeStyle={{
              textDecorationLine: "underline",
            }}
          >
            My Profile
          </NavLink>
          <NavLink
            to="/about"
            className="nav-link"
            activeStyle={{
              textDecorationLine: "underline",
            }}
          >
            About Us
          </NavLink>
        </div>
        <div className="main">
          <Switch>
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/products/:id" component={Product} />
            <Route exact path="/" component={Home} />
            <Redirect from="/goods" to="/products" />
            <Route  component={Home}/>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
