import React, { Component } from "react";
import picture from "../images/background.png";

class WeatherCards extends Component {
  style = {
    margin: "5px",
    padding: "4px",
    borderStyle: "solid",
    borderWidth: "1px",
    borderColor: "gray",
    width: "200px",
    height:"auto",
    height: "auto",
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };
    

  

thing = {
  fontSize:"30px",
  color: "white"
  
}
 
weatherArray =[
  "fas fa-cloud-showers-heavy",
  "fas fa-poo-storm",
  "fas fa-sun",
  "fas fa-smog"
]


weatherSymbol = ()=>{
  let daWeather = this.props.day.weather[0].description
  let weatherSym
  if( daWeather.includes("rain")){
   weatherSym =   "fas fa-cloud-showers-heavy"

  }
  else if(daWeather.includes("sun")){
    weatherSym = "fas fa-sun"

  }
  else if(daWeather.includes("cloud")){
    weatherSym = "fas fa-smog"
  }
  else{
    weatherSym = "fas fa-poo-storm"
  }
  return weatherSym
}
  




  getDay = () => {
    this.props.onClick(this.props.day.dt_txt.substring(0, 10));
  };

  getWindDirection = () => {
    let windDirection = this.props.day.wind.deg;

    if (windDirection > 0 && windDirection < 90) {
      windDirection = "NE";
    } else if (windDirection > 90 && windDirection < 180) {
      windDirection = "NW";
    } else if (windDirection > 180 && windDirection < 270) {
      windDirection = "SW";
    } else if (windDirection > 270 && windDirection < 360) {
      windDirection = "SE";
    } else if (windDirection === 0) {
      windDirection = "E";
    } else if (windDirection === 90) {
      windDirection = "N";
    } else if (windDirection === 180) {
      windDirection = "W";
    } else if (windDirection === 270) {
      windDirection = "S";
    }
    return windDirection;
  };

  render() {
      // console.log(this.props.day.wind.deg)
    // console.log(this.props.day)
    // console.log(typeof this.props.day.main.humidity)
   if(!this.props.day){
     return null
   }
   console.log(this.weatherSymbol,"hello there")
  //  console.log(this.props.day.dt_txt.split(' ')[0])
   let dateArray = this.props.day.dt_txt.split(' ')[0].split("-").map(n => {return parseInt(n)})
  //  console.log(dateArray)
   let daDate = new Date(dateArray[0],dateArray[1],dateArray[2])
   let dateSplit = daDate.toString().split(' ').splice(0,3).join(" ")
  //  console.log( typeof &#xf753;,"go beyond")
// ===========
    // console.log(this.props.day.wind.deg)
    // console.log(this.props.day)
    // console.log(typeof this.props.day.main.humidity)
    // if (!this.props.day) {
    //   return null;
    // }
    //  console.log(this.props.weather.list)
    return (
      <div className="ui card" style={this.style} onClick={this.getDay}>
        {/* <h2>Hi from WeatherCards </h2> */}
        <div className="content">
        <h3>{dateSplit}</h3>
        {/* <i style={this.thing} class='fas'>&#xf753;</i> */}
        {/* <i  style={this.thing} class={this.weatherArray[Math.floor(Math.random()*this.weatherArray.length)]}></i> */}
        <i  style={this.thing} class={this.weatherSymbol()}></i>

        <h3>{this.props.day.weather[0].description}</h3>
        <h4>Humidity: {this.props.day.main.humidity} %</h4>
        <h4> Temperature: {Math.round((this.props.day.main.temp-273.15)*9/5+32)} ° F</h4>
        <h4>Wind speed: {Math.round(this.props.day.wind.speed*2.237)} mph </h4>
        <h4>Wind direction: {this.getWindDirection()} </h4>
        {/* {this.props.weather.list.map(w => { 
          <h3>{this.props.day.dt_txt.split(" ")[0]}</h3>
          <h3>{this.props.day.weather[0].description}</h3>
          <h4>Humidity: {this.props.day.main.humidity}</h4>
          <h4>
            {" "}
            Temperature:{" "}
            {Math.round(((this.props.day.main.temp - 273.15) * 9) / 5 + 32)}
          </h4>
          <h4>
            Wind speed: {Math.round(this.props.day.wind.speed * 2.237)} mph{" "}
          </h4>
          <h4>Wind direction: {this.getWindDirection()} </h4>
          {/* {this.props.weather.list.map(w => { 
          return console.log("wtf")
        })} */}
        </div>
      </div>
    );
  }
}

export default WeatherCards;
