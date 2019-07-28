import React, { Component } from "react";
import WeatherCards from "../components/WeatherCards";

class WeatherCollection extends Component {

  style = {
    display: "flex",
    flexWrap: "wrap",
    margin: "5px"
  }

  render() {
    if(!this.props.weather){
      return null
    }

    let fiveDayWeather = this.props.weather

    return (
      <div>
        <div>
          <h1>5 Day Weather Forecast</h1>
        </div>
        <div className="ui container" style ={this.style} >
          {fiveDayWeather.map(day =>{
          return <WeatherCards key = {day.dt_txt} day ={day} onClick={this.props.onClick} />
          })}
    
        </div>
      </div>
    );
  }
}

export default WeatherCollection;
