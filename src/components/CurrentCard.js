import React, { Component } from "react";
import picture from "../images/clouds.jpg";

class CurrentCard extends Component {
  style = {
    margin: "5px",
    padding: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "gray",
    width: "200px",
    height: "auto",
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  render() {
    // console.log(this.props.current)

    if (!this.props.current) {
      return null;
    }

    // if(!this.props.current.main){
    //     console.log(this.props.current)
    //     return null
    // }

    // console.log(this.props.current)

    return (
      <div
        className="ui card"
        style={this.style}
        onClick={this.getDay}
        // style={style}
      >
        <div className="content">
          <h3>{this.props.current.weather[0].description}</h3>
          <h3> Humidity:{this.props.current.main.humidity}%</h3>
          <h3>
            {" "}
            Temperature:{Math.round(this.props.current.main.temp - 273)}° C{" "}
          </h3>
          <h3> Windspeed: {this.props.current.wind.speed}mph</h3>
        </div>
      </div>
    );
  }
}
export default CurrentCard;
