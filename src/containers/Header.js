import React, { Component } from "react";
import picture from "../images/header3.jpeg";

class Header extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover",
    padding: "50px",
    textAlign: "center"
  };
  render() {
    return (
      <div style={this.style}>
        <h1>Clouds Weather App</h1>
      </div>
    );
  }
}

export default Header;
