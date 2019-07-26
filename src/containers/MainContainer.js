import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import LogIn from "../components/LogIn";

class MainContainer extends Component {
  state = {
    NewsArr: [],
    Weather: [],
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
