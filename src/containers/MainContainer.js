import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";

class MainContainer extends Component {
  state = {
    NewsArr: [],
    Weather: null
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
        // console.log(result.articles);
        this.setState({ NewsArr: result.articles });
      });

      fetch("https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29")
        .then(res => res.json())
        .then(weather =>{
          // console.log(weather);
          this.setState({
            Weather: weather
          })
        })
  
    // fetch(
    //   "https://newsapi.org/v2/everything?q=bitcoin&from=2019-06-26&sortBy=publishedAt&apiKey=68c14f4e25554369bb88760265178c2d"
    // )
    //   .then(res => res.json())
    //   .then(r => {
    //     console.log(r.articles);
    //   });
  }

  // ComponentDidMount() {
  //   fetch(
  //     "https://api.openweathermap.org/data/2.5/forecast?id=4699066&APPID=1178c91249e1986e193e0c736d80df29"
  //   )
  //     .then(res => res.json())
  //     .then(r => {
  //       console.log(r);
  //     });
  // }

  render() {
    // console.log(this.state.Weather);
    
    return (
      <div>
        <div>
          <NewsSearch />
        </div>
        <div style={this.mainDiv}>
          <div>
            <NewsCollection news={this.state.NewsArr} />
          </div>
          <div>
            <WeatherCollection weather={this.state.Weather}/>
          </div>
        </div>
      </div>
    );
  }
}


export default MainContainer;
