import React, { Component } from "react";
import WeatherCards from "../components/WeatherCards";

class WeatherCollection extends Component {

  render() {
    if(!this.props.weather){
      return null
    }

    let weatherTest = this.props.weather

    console.log(this.props.weather)
    let daysShow = weatherTest.list.filter(w => { 
      //  console.log(weatherTest.list.indexOf(w))
       if(weatherTest.list.indexOf(w)===0 || weatherTest.list.indexOf(w)===10 || weatherTest.list.indexOf(w)===20 || weatherTest.list.indexOf(w)===30 || weatherTest.list.indexOf(w)===39 ){
        return w
       }
       else{
         return null
       }
      })
      console.log(daysShow)

    return (
      <div className="ui container">
        {daysShow.map(day =>{
         return <WeatherCards day ={day}/>
        })}
        
        
        
      </div>
    );
  }
}

export default WeatherCollection;
