import React from 'react'
import { Container, Header } from 'semantic-ui-react'
import Table from 'react-bootstrap/Table'

export default class WeatherDetailCard extends React.Component {
    
    style = {
        margin: "10px"
    }

    render() {

        console.log(this.props.dayWeather)
        let allDayWeather = this.props.dayWeather.filter( weather => weather.dt_txt.includes(this.props.weatherDetailDate))
        let temps = allDayWeather.map(weather => Math.round((weather.main.temp-273.15)*9/5+32))
        let times = allDayWeather.map(weather => weather.dt_txt.substring(11,20))
        console.log(temps)
        console.log(times)
        return (

            <div key= {this.props.weatherDetailDate} style={this.style}>
                <Container fluid>
                <Header as='h2'>{this.props.dayWeather.name} Weather on {this.props.weatherDetailDate} </Header>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            {times.map( time => <th>{time}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {temps.map( temp => <td style ={this.colStyle}>{temp} &#176; F</td>)}
                        </tr>
                    </tbody>
                    </Table>
                </Container>
            </div>
        );
    };
}



