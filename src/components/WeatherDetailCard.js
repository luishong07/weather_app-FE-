import React from "react";
import { Container, Header } from "semantic-ui-react";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Chart from "./Chart";
import picture from "../images/new.jpeg";

export default class WeatherDetailCard extends React.Component {
  style = {
    margin: "15px",
    padding: "10px",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "gray",
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  state = {
    celsius: true,
    color: "blue",
    temps: this.props.dayWeather.list
      .filter(weather => weather.dt_txt.includes(this.props.weatherDetailDate))
      .map(weather => Math.round(weather.main.temp - 273.15))
  };

  

  celsiusConverter = () => {
    let allDayWeather = this.props.dayWeather.list.filter(weather =>
      weather.dt_txt.includes(this.props.weatherDetailDate)
    );

    if (this.state.celsius === true) {
      this.setState({
        celsius: false,
        color: "yellow",
        temps: this.state.temps.map(temp => Math.round((temp * 9) / 5 + 32))
      });
    } else if (this.state.celsius === false) {
      this.setState({
        celsius: true,
        color: "blue",
        temps: this.state.temps.map(temp => Math.round(((temp - 32) * 5) / 9))
      });
    }
  };

  render() {
    let allDayWeather = this.props.dayWeather.list.filter(weather =>
      weather.dt_txt.includes(this.props.weatherDetailDate)
    );
    let temps = allDayWeather.map(weather =>
      Math.round(weather.main.temp - 273.15)
    );
    let winds = allDayWeather.map(weather => weather.wind);
    let times = allDayWeather.map(weather => weather.dt_txt);
    let windDegrees = allDayWeather.map(weather => weather.wind.deg);

    let windDirection = windDegrees.map(weather => {
      if (weather > 0 && weather < 90) {
        return "NE";
      } else if (weather > 90 && weather < 180) {
        return "NW";
      } else if (weather > 180 && weather < 270) {
        return "SW";
      } else if (weather > 270 && weather < 360) {
        return "SE";
      } else if (weather === 0) {
        return "E";
      } else if (weather === 90) {
        return "N";
      } else if (weather === 180) {
        return "W";
      } else if (weather === 270) {
        return "S";
      }
    });

    return (
      <div>
        <div key={this.props.weatherDetailDate} style={this.style}>
          <Container fluid>
            <div style={{ margin: "10px" }}>
              <Header as="h1">
                {this.props.dayWeather.city.name} Weather on{" "}
                {this.props.weatherDetailDate}{" "}
              </Header>
            </div>
            <Table responsive>
              <thead />
              <tbody>
                <tr>
                  <td>Time</td>
                  {times.map(time => (
                    <td>{new Date(time + "Z").toLocaleTimeString()}</td>
                  ))}
                </tr>
                <tr>
                  <td>Temperature</td>
                  {!this.state.celsius
                    ? temps.map(temp => (
                        <td style={this.colStyle}>
                          {(temp * 9) / 5 + 32} &#176; F
                        </td>
                      ))
                    : temps.map(temp => (
                        <td style={this.colStyle}>{temp} &#176; C</td>
                      ))}
                </tr>
                <tr>
                  <td>Wind Speed</td>
                  {winds.map(wind => (
                    <td style={this.colStyle}>
                      {Math.round(wind.speed * 2.237)} mph
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>Wind Direction</td>
                  {windDirection.map(wind => (
                    <td style={this.colStyle}>{wind}</td>
                  ))}
                </tr>
              </tbody>
            </Table>
            <div
              style={{
                position: "relative center",
                width: 800,
                height: "auto",
                margin: "auto"
              }}
            >
              <Chart
                color={this.state.color}
                temps={this.state.temps}
                weather={allDayWeather}
                celsius={this.state.celsius}
              />
            </div>
          </Container>
          <div>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              onClick={this.celsiusConverter}
            >
              &#176; C / &#176; F
            </Button>
            <Button
              style={{ margin: "10px" }}
              variant="primary"
              onClick={this.props.onClick}
            >
              Back to 5-Day
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
