import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table'

export default class WeatherDetailCard extends React.Component {
    
    style = {
        margin: "10px"
    }

    render() {

        
        let allDayWeather = this.props.dayWeather.list.filter( weather => weather.dt_txt.includes(this.props.weatherDetailDate))
        let temps = allDayWeather.map(weather => Math.round((weather.main.temp-273.15)*9/5+32))
        let winds = allDayWeather.map(weather => (weather.wind))
        let times = allDayWeather.map(weather => weather.dt_txt.substring(11,20))
        
        return (

            <div key= {this.props.weatherDetailDate} style={this.style} onClick={this.props.onClick}>
                <Container fluid>
                <Header as='h2'>{this.props.dayWeather.city.name} Weather on {this.props.weatherDetailDate} </Header>
                <Table responsive >
                    <thead>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>Time</td>
                            {times.map( time => <td>{time}</td>)}
                        </tr>
                        <tr>
                            <td>Temperature</td>
                            {temps.map( temp => <td style ={this.colStyle}>{temp} &#176; F</td>)}
                        </tr>
                        <tr>
                            <td>Wind Speed</td>
                            {winds.map( wind => <td style ={this.colStyle}>{Math.round(wind.speed*2.237)} mph</td>)}
                        </tr>
                        <tr>
                            <td>Wind Direction</td>
                            {winds.map( wind => <td style ={this.colStyle}>{Math.round(wind.deg)} degrees</td>)}
                        </tr>

                    </tbody>
                    </Table>
                
                </Container>
            </div>
        );
    };
}



