import React, { Component } from "react";
import products from "./Products";

const json = require("../../exercise-2/mockups/data.json");

class Product extends Component {
  render() {
  const product = this.props.match.params.id;
    
    console.log(product);
    let details;
    if (product === '1') {
      details = json.bicycle;
      console.log(product);
    }
    if (product === '2') {
      console.log("hah");
      console.log(product);
      details = json.TV;
    }
    if (product === '3') {
      console.log("fff");
      console.log(product);
      details = json.pencil;
    }
    return (
      <div className="details">
        <h2>Product Details</h2>
        <p>Name: {details.name};</p>
        <p>Id: {details.id};</p>
        <p>Price: {details.price};</p>
        <p>Quantity: {details.quantity};</p>
        <p>Desc: {details.desc};</p>
        <p>URL: /product/{this.props.match.params.id};</p>
      </div>
    );
  }
}

export default Product;
