import React, { Component } from "react";
import WeatherCards from "../components/WeatherCards";

class WeatherCollection extends Component {

  render() {

    let weatherTest = this.props.weather

    // console.log(this.props.weather)
    return (
      <div className="ui container">
        
        <WeatherCards weather={weatherTest} />
      </div>
    );
  }
}

export default WeatherCollection;
