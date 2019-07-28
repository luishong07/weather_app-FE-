import React, { Component } from "react";

class WeatherCards extends Component {

  style = {
    margin: "5px",
    padding: "4px",
    borderStyle: "dotted",
    borderWidth: "2px",
    borderColor: "gray",
    width: "200px",
    height:"auto"

}

  getDay = () => {
    this.props.onClick(this.props.day.dt_txt.substring(0,10))
  }
  
  render() {
    // console.log(this.props.day)
    console.log(typeof this.props.day.main.humidity)
   if(!this.props.day){
     return null
   }
  //  console.log(this.props.weather.list)
    return (
      <div className="ui card" style={this.style} onClick={this.getDay} >
        {/* <h2>Hi from WeatherCards </h2> */}
        <div className="content">
        <h2>{this.props.day.dt_txt.split(' ')[0]}</h2>
        <h2>{this.props.day.weather[0].description}</h2>
        <h3>Humidity: {this.props.day.main.humidity}</h3>
        <h3> Temperature: {Math.round((this.props.day.main.temp-273.15)*9/5+32)}</h3>
        {/* {this.props.weather.list.map(w => { 
          return console.log("wtf")
        })} */}
        </div>
      </div>
    );
  }
}

export default WeatherCards;
