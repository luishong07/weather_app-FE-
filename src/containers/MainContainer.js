import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import { newExpression } from "@babel/types";

class MainContainer extends Component {

  state={
    weather: null
  }

componentDidMount =()=>{
  fetch("https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
  .then(res => res.json())
  .then(weather =>{
    // console.log(weather);
    this.setState({
      weather: weather
    })
  })
}



  render() {
    // console.log(this.state.weather);
    
    return (
      <div>
        <NewsSearch />
        <NewsCollection />
        <WeatherCollection weather={this.state.weather} />
      </div>
    );
  }
}

export default MainContainer;
