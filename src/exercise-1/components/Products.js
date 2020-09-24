import React, { Component, Fragment } from "react";
import "../../exercise-1/styles/App.css";
import { Link } from "react-router-dom";


class products extends Component {
  render() {
    return (
      <div className="details">
        <Fragment>
          
         <h2>All Products:</h2> 
          <br />
          <Link to="/products/1">Bicycle</Link>
          <br />
          <Link to="/products/2">Tv</Link>
          <br />
          <Link to="/products/3">Pencil</Link>
          <br />
                 
        </Fragment>
      </div>
    );
  }
}

export default products;
