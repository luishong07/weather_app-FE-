import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import LogIn from "../components/LogIn";

class MainContainer extends Component {
  state = {
    NewsArr: [],
    Weather: []
  };

  mainDiv = {
    display: "flex"
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-26&sortBy=publishedAt&apiKey=68c14f4e25554369bb88760265178c2d"
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
