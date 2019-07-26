import React, { Component } from "react";

class WeatherCards extends Component {
  
  render() {
    // console.log(this.props.day)
    console.log(typeof this.props.day.main.humidity)
   if(!this.props.day){
     return null
   }
  //  console.log(this.props.weather.list)
    return (
      <div class="ui card" style={{ width: "250" }}>
        {/* <h2>Hi from WeatherCards </h2> */}
        <div class="content">
        <h2>{this.props.day.dt_txt.split(' ')[0]}</h2>
        <h2>{this.props.day.weather[0].description}</h2>
        <h3>Humidity: {this.props.day.main.humidity}</h3>
        <h3> Temperature: {(this.props.day.main.temp-273.15)}</h3>
        {/* {this.props.weather.list.map(w => { 
          return console.log("wtf")
        })} */}
        </div>
      </div>
    );
  }
}

export default WeatherCards;
