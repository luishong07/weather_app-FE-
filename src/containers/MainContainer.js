import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import LogIn from "../components/LogIn";
import WeatherDetailCard from '../components/WeatherDetailCard';

class MainContainer extends Component {
  
  // spanStyle = {
  //   display: "inline-block"
  // }
  
  state = {
    NewsArr: [],
    fiveDayWeather: [],
    fiveDayWeatherParsed: [],
    currentWeather: null,
    date: "",
    weatherDetailDate: null,
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
        // console.log(result.articles);
        this.setState({ NewsArr: result.articles });
      });
      this.getFiveDayWeather()
      this.getFiveDayParsed()
      this.getCurrentWeather()
  }

  getFiveDayWeather = () => {
    fetch("https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
      .then( resp => resp.json() )
        .then( weather => {
          this.setState({
            fiveDayWeather: weather
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
  
  // When a weather card is clicked it changes the weatherDetailDate state and renders the weatherDetailCardComponent
  handleClick = (day) => {
    this.setState({weatherDetailDate: day})
  }

  // When the weather detail card is clicked it changes the weatherDetailDate state and renders the weatherCollection
  handleClick2 = () => {
    this.setState({weatherDetailDate: null})
  }


  
  render() {
    // console.log(this.state.fiveDayWeather)
    
    return (
      <div>
        <div>
          <LogIn />
          <NewsSearch />
          
        </div>
        <div style={this.mainDiv}>
          <div>
            <NewsCollection news={this.state.NewsArr} />
          </div>
          <div style={{ position: "relative", width: 1200, height: "auto" }} >
          {this.state.weatherDetailDate ?
          <WeatherDetailCard key ={this.state.weatherDetailDate} dayWeather={this.state.fiveDayWeather} weatherDetailDate={this.state.weatherDetailDate} onClick={this.handleClick2} />:
          <WeatherCollection current={this.state.currentWeather} weather={this.state.fiveDayWeatherParsed} onClick={this.handleClick} />
          }
          </div>
        </div>
      </div>
    );
  }
}


export default MainContainer;
