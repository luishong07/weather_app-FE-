import React, { Component } from "react";

class SearchCurentWeather extends Component {
  style = {
    margin: "5px",
    padding: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "gray",
    width: "200px",
    height: "auto"
  };

  render() {
    // console.log(this.props.search, "from scw");

    if (!this.props.search) {
      return null;
    }

    // if(!this.props.current.main){
    //     console.log(this.props.current)
    //     return null
    // }

    // console.log(this.props.current)

    return (
      <div className="ui card" style={this.style} onClick={this.getDay}>
        <div className="content">
          <h1>{this.props.search.name} current weather:</h1>
          <h3>{this.props.search.weather[0].description}</h3>
          <h3> Humidity:{this.props.search.main.humidity}%</h3>
          <h3>
            {" "}
            Temperature:{Math.round(this.props.search.main.temp - 273)}° C{" "}
          </h3>
          <h3> Windspeed: {this.props.search.wind.speed}mph</h3>
        </div>
      </div>
    );
  }
}
export default SearchCurentWeather;
