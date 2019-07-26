import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import LogIn from "../components/LogIn";

class MainContainer extends Component {
  state = {
    NewsArr: [],
    fiveDayWeather: [],
    fiveDayWeatherParsed: [],
    currentWeather: [],
    hourlyWeather: [],
    date: ""
  };

  getDate() {
    let date = { currentTime: new Date().toISOString().split("T")[0] };
    this.setState({
      date: date
    });
  }

  mainDiv = {
    display: "flex"
  };

  componentDidMount() {
    this.getDate();
    fetch(
      `https://newsapi.org/v2/everything?q=bitcoin&from={this.state.date}&sortBy=publishedAt&apiKey=68c14f4e25554369bb88760265178c2d`
    )
      .then(res => res.json())
      .then(result => {
        console.log(result.articles);
        this.setState({ NewsArr: result.articles });
      });
      this.getFiveDayWeather()
      this.getFiveDayParsed()
      this.getCurrentWeather()
      this.getHourlyWeather()
  }

  getFiveDayWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
      .then( resp => resp.json() )
        .then( weather => {
          this.setState({
            fiveDayWeather: weather.list
          })
        })
  }
  
  getFiveDayParsed = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
      .then( resp => resp.json() )
        .then( weather => {
          let parsedWeather = weather.list.filter(weather=>weather.dt_txt.includes("12:00:00"))
          this.setState({
            fiveDayWeatherParsed: parsedWeather
          })
        })
  }

  getCurrentWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
      .then( resp => resp.json() )
        .then( weather => {
          
          this.setState({
            currentWeather: weather
          })
        })
  }

  getHourlyWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast/hourly?zip=77009,us&APPID=1178c91249e1986e193e0c736d80df29")
      .then( resp => resp.json() )
        .then( weather => {
          
          this.setState({
            hourlyWeather: weather
          })
        })
  }

  
  render() {
    return (
      <div>
        <div style={this.searchCont}>
          <NewsSearch />
          <LogIn />
        </div>
        <div style={this.mainDiv}>
          <div>
            <NewsCollection news={this.state.NewsArr} />
          </div>
          <div>
            <WeatherCollection />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
