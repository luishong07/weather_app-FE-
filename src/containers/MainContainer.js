import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import CitySearch from "../components/CitySearch";

import WeatherDetailCard from "../components/WeatherDetailCard";
import NewsDetail from "../components/NewsDetail";
import picture from "../images/new.jpeg";

class MainContainer extends Component {
  mainDiv = {
    display: "flex"
  };

  state = {
    NewsArr: [],
    fiveDayWeather: [],
    fiveDayWeatherParsed: [],
    currentWeather: null,
    date: "",
    weatherDetailDate: null,
    weatherDetailCity: null,
    NewsD: null,
    SearchFetch: null,
    SearchFetch5days: null,
    SearchFetch5daysPar: null,
    user: null
  };

  getDate() {
    let date = { currentTime: new Date().toISOString().split("T")[0] };
    this.setState({
      date: date
    });
  }

  getUser() {
    fetch(`http://localhost:3001/users/${localStorage.getItem("id")}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    })
      .then(resp => resp.json())
      .then(result => {
        this.getFiveDayWeather(result);
        this.getFiveDayParsed(result);
        this.getCurrentWeather(result);
        this.setState({
          user: result
        });
      });
  }
  style = {
    background: "#D7F0F3",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

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
    this.getUser();
  }

  // All for Hometown API Searches vvv (need to take in user hometown city and country)
  getFiveDayWeather = user => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        user.hometown_city
      },${user.hometown_country}&APPID=1178c91249e1986e193e0c736d80df29`
    )
      .then(resp => resp.json())
      .then(weather => {
        this.setState({
          fiveDayWeather: weather
        });
      });
  };

  somefunction = arg => {
    this.setState({ SearchFetch: arg });
  };
  somefunction1 = arg => {
    this.setState({ SearchFetch5days: arg });
  };
  somefunction2 = arg => {
    this.setState({ SearchFetch5daysPar: arg });
  };

  getFiveDayParsed = user => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${
        user.hometown_city
      },${user.hometown_country}&APPID=1178c91249e1986e193e0c736d80df29`
    )
      .then(resp => resp.json())
      .then(weather => {
        let city_name = weather.city.name;
        let parsedWeather = weather.list.filter(weather =>
          weather.dt_txt.includes("12:00:00")
        );
        this.setState({
          fiveDayWeatherParsed: parsedWeather
        });
      });
  };

  getCurrentWeather = user => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${
        user.hometown_city
      },${user.hometown_country}&APPID=1178c91249e1986e193e0c736d80df29`
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
  handleClick = (day, city) => {
    this.setState({
      weatherDetailDate: day,
      weatherDetailCity: city
    });
  };

  // When the weather detail card is clicked it changes the weatherDetailDate state and renders the weatherCollection
  handleClick2 = () => {
    this.setState({
      weatherDetailDate: null,
      weatherDetailCity: null
    });
  };

  newsClick = artical => {
    // console.log(artical);
    this.setState({ NewsD: artical });
    // this.refs.dropdown.focus();
  };

  newsClick2 = () => {
    this.setState({ NewsD: null });
  };

  render() {

    return (
      <div style={this.style}>
        <div className="row">
          <div
            style={{
              position: "relative center",
              height: "auto",
              margin: "auto"
            }}
          >
            <CitySearch
              fetchSomething={this.somefunction}
              fetchSomething1={this.somefunction1}
              fetchSomething2={this.somefunction2}
            />
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
                    city={this.state.weatherDetailCity}
                    dayWeather ={this.state.weatherDetailCity === this.state.fiveDayWeather.city.name ? this.state.fiveDayWeather :  this.state.SearchFetch5days }
                    fullSearchWeather = {this.state.SearchFetch5days}
                    weatherDetailDate={this.state.weatherDetailDate}
                    onClick={this.handleClick2}
                    searchDayWeather={this.state.SearchFetch5days}
                    user={this.state.user}
                  />
                ) : (
                  <WeatherCollection
                    search={this.state.SearchFetch}
                    current={this.state.currentWeather}
                    fullWeather={this.state.fiveDayWeather}
                    weather={this.state.fiveDayWeatherParsed}
                    onClick={this.handleClick}
                    searchWeather={this.state.SearchFetch5daysPar}
                    user={this.state.user}
                    fullSearchWeather = {this.state.SearchFetch5days}
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
