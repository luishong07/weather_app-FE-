import React, { Component } from "react";
import WeatherCards from "../components/WeatherCards";
import CurrentCard from "../components/CurrentCard";
import SearchCurentWeather from "../components/SearchCurentWeather";

class WeatherCollection extends Component {
  style = {
    display: "flex",
    flexWrap: "wrap",
    margin: "5px"
  };

  render() {
    // console.log(this.props.current,"plus ultra")
    let fiveDayWeather = this.props.weather;
    let searchFiveDayWeather = this.props.searchWeather;
    let user =  this.props.user;
    if (!this.props.weather || !this.props.user) {
      return null;
    }

    return (
      <div>
        <div>
          <div className="ui container" style={this.style}>
            <SearchCurentWeather search={this.props.search} />
          </div>
          <h1>{user.hometown_city} Current Weather</h1>
        </div>
        <div className="ui container" style={this.style}>
          <CurrentCard current={this.props.current} />
        </div>
        <div>
          <h1>{user.hometown_city} 5 Day Weather Forecast</h1>
        </div>
        <div className="ui container" style={this.style}>
          {!searchFiveDayWeather
            ? null
            : searchFiveDayWeather.map(Day => {
                return (
                  <WeatherCards
                    key={Day.dt}
                    day={Day}
                    onClick={this.props.onClick}
                  />
                );
              })}

          {fiveDayWeather.map(day => {
            return (
              <WeatherCards
                key={day.dt_txt}
                day={day}
                onClick={this.props.onClick}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default WeatherCollection;
