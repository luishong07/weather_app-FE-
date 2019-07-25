import React, { Component } from "react";
import NewsCollection from "./NewsCollection";
import WeatherCollection from "./WeatherCollection";
import NewsSearch from "../components/NewsSearch";
import { newExpression } from "@babel/types";

class MainContainer extends Component {
  render() {
    return (
      <div>
        <NewsSearch />
        <NewsCollection />
        <WeatherCollection />
      </div>
    );
  }
}

export default MainContainer;
