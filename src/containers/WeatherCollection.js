import React, { Component } from "react";

import WeatherCards from "../components/WeatherCards";

class WeatherCollection extends Component {
  render() {
    return (
      <div className="ui container">
        <WeatherCards />
      </div>
    );
  }
}

export default WeatherCollection;
