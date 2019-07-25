import React, { Component } from "react";

class WeatherCards extends Component {
  
  render() {
    // this.props.weather.length == 0 ? null: this.props.weather
    
   if(!this.props.weather){
     return null
   }
   console.log(this.props.weather.list[0])
    return (
      <div>
        <h2>Hi from WeatherCards </h2>
        {/* <h2>{this.props.weather.list}</h2> */}
        {/* {this.props.weather.list.map(w => { 
          return console.log("wtf", w)
        })} */}
      </div>
    );
  }
}

export default WeatherCards;
