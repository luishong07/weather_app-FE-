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
    let fullWeather = this.props.fullWeather;
    let searchFiveDayWeather = this.props.searchWeather;
    let user =  this.props.user;
    let fullSearchWeather = this.props.fullSearchWeather

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
        {!fullSearchWeather ?
        null :
        <div>
        <div>
          <h1>{fullSearchWeather.city.name} 5 Day Weather Forecast</h1>
        </div>
        <div className="ui container" style={this.style}>
          {!searchFiveDayWeather
            ? null
            : searchFiveDayWeather.map(day => {
                return (
                  <WeatherCards
                    key={day.dt}
                    city = {fullSearchWeather.city.name}
                    day={day}
                    onClick={this.props.onClick}
                  />
                );
              })}
          </div>
          </div>
        }
        <div>
          <h1>{user.hometown_city} 5 Day Weather Forecast</h1>
        </div>
        <div className="ui container" style={this.style}>
          {fiveDayWeather.map(day => {
            return (
              <WeatherCards
                key={day.dt_txt}
                city={fullWeather.city.name}
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
