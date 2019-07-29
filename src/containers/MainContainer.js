import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";

import WeatherDetailCard from "../components/WeatherDetailCard";
import NewsDetail from "../components/NewsDetail";

class MainContainer extends Component {
  // spanStyle = {
  //   display: "inline-block"
  // }

  state = {
    NewsArr: [],
    fiveDayWeather: [],
    fiveDayWeatherParsed: [],
    currentWeather: [],
    date: "",
    weatherDetailDate: null,
    NewsD: null
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
    this.getFiveDayWeather();
    this.getFiveDayParsed();
    this.getCurrentWeather();
  }

  // All for Hometown API Searches vvv (need to take in user hometown city and country)
  getFiveDayWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29"
    )
      .then(resp => resp.json())
      .then(weather => {
        this.setState({
          fiveDayWeather: weather
        });
      });
  };

  getFiveDayParsed = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29"
    )
      .then(resp => resp.json())
      .then(weather => {
        let parsedWeather = weather.list.filter(weather =>
          weather.dt_txt.includes("12:00:00")
        );
        this.setState({
          fiveDayWeatherParsed: parsedWeather
        });
      });
  };

  getCurrentWeather = () => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?id=4699066&APPID=1178c91249e1986e193e0c736d80df29"
    )
      .then(resp => resp.json())
      .then(weather => {
        this.setState({
          currentWeather: weather
        });
      });
  };
  // All for Hometown API Searches ^^^

  // When a weather card is clicked it changes the weatherDetailDate state and renders the weatherDetailCardComponent
  handleClick = day => {
    this.setState({ weatherDetailDate: day });
  };

  // When the weather detail card is clicked it changes the weatherDetailDate state and renders the weatherCollection
  handleClick2 = () => {
    this.setState({ weatherDetailDate: null });
  };

  newsClick = artical => {
    console.log(artical);
    this.setState({ NewsD: artical });
  };

  newsClick2 = () => {
    this.setState({ NewsD: null });
  };

  render() {
    return (
      <div>
        <div className="row">
          <div
            style={{
              position: "relative center",
              width: 600,
              height: "auto",
              margin: "auto"
            }}
          >
            <NewsSearch />
          </div>
        </div>
        <div style={this.mainDiv}>
          <div>
            <NewsCollection
              news={this.state.NewsArr}
              onClick={this.newsClick}
            />
          </div>
          <div>
            {this.state.NewsD ? (
              <NewsDetail
                key={this.state.NewsD}
                NewsD={this.state.NewsD}
                onClick={this.newsClick2}
              />
            ) : (
              <div
                style={{ position: "relative", width: 1200, height: "auto" }}
              >
                {this.state.weatherDetailDate ? (
                  <WeatherDetailCard
                    key={this.state.weatherDetailDate}
                    dayWeather={this.state.fiveDayWeather}
                    weatherDetailDate={this.state.weatherDetailDate}
                    onClick={this.handleClick2}
                  />
                ) : (
                  <WeatherCollection
                    weather={this.state.fiveDayWeatherParsed}
                    onClick={this.handleClick}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default MainContainer;
