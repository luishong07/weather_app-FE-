import React, { Component } from "react";
import picture from "../images/clouds.jpg";

class WeatherCards extends Component {
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

  getDayAndCity = () => {
    this.props.onClick(this.props.day.dt_txt.substring(0, 10), this.props.city);
  };

  getWindDirection = () => {
    let windDirection = this.props.day.wind.deg;

    if (windDirection > 0 && windDirection < 90) {
      windDirection = "NE";
    } else if (windDirection > 90 && windDirection < 180) {
      windDirection = "NW";
    } else if (windDirection > 180 && windDirection < 270) {
      windDirection = "SW";
    } else if (windDirection > 270 && windDirection < 360) {
      windDirection = "SE";
    } else if (windDirection === 0) {
      windDirection = "E";
    } else if (windDirection === 90) {
      windDirection = "N";
    } else if (windDirection === 180) {
      windDirection = "W";
    } else if (windDirection === 270) {
      windDirection = "S";
    }
    return windDirection;
  };

  render() {
    // console.log(this.props.day.wind.deg)
    // console.log(this.props.day)
    // console.log(typeof this.props.day.main.humidity)
    if (!this.props.day) {
      return null;
    }
    //  console.log(this.props.weather.list)
    return (
      <div className="ui card" style={this.style} onClick={this.getDayAndCity}>
        <h2>{this.props.city} </h2>
        <div className="content">
          <h3>{this.props.day.dt_txt.split(" ")[0]}</h3>
          <h3>{this.props.day.weather[0].description}</h3>
          <h4>Humidity: {this.props.day.main.humidity}</h4>
          <h4>
            {" "}
            Temperature:{" "}
            {Math.round(((this.props.day.main.temp - 273.15) * 9) / 5 + 32)}
          </h4>
          <h4>
            Wind speed: {Math.round(this.props.day.wind.speed * 2.237)} mph{" "}
          </h4>
          <h4>Wind direction: {this.getWindDirection()} </h4>
          {/* {this.props.weather.list.map(w => { 
          return console.log("wtf")
        })} */}
        </div>
      </div>
    );
  }
}

export default WeatherCards;
