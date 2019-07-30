import React, { Component } from "react";
import { MuiThemeProvider, TextField } from "material-ui";
import Button from "react-bootstrap/Button";

class CitySearch extends Component {
  state = {
    city: "",
    country: "",
    searchWeather: ""
  };

  style = {
    background: "#E5F3F3",
    borderBottom: "blue",
    width: 1600
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log("working");
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city},${
        this.state.country
      }&APPID=1178c91249e1986e193e0c736d80df29`
    )
      .then(resp => resp.json())
      .then(result => {
        console.log(result, "OVVVVVVVVVv");

        this.props.fetchSomething(result);
      });
    this.searchGetFiveDayWeather();
    this.searchGetFiveDayParsed();
  };

  searchGetFiveDayWeather = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${
        this.state.country
      }&APPID=1178c91249e1986e193e0c736d80df29`
    )
      .then(resp => resp.json())
      .then(result => {
        this.props.fetchSomething1(result);
      });
  };

  searchGetFiveDayParsed = () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},${
        this.state.country
      }&APPID=1178c91249e1986e193e0c736d80df29`
    )
      .then(resp => resp.json())
      .then(weather => {
        let parsedWeather = weather.list.filter(weather =>
          weather.dt_txt.includes("12:00:00")
        );
        this.props.fetchSomething2(parsedWeather);
      });
  };

  render() {
    return (
      <div style={this.style}>
        <MuiThemeProvider>
          <form onSubmit={this.onSubmit}>
            <TextField
              floatingLabelText="City"
              name="city"
              value={this.state.city}
              onChange={e => this.onChange(e)}
            />
            <TextField
              floatingLabelText="Country"
              name="country"
              value={this.state.country}
              onChange={e => this.onChange(e)}
            />
            <div>
              <Button
                onClick={this.onSubmit}
                variant="primary"
                type="submit"
                style={{ margin: "auto", padding: "5px" }}
              >
                Search Weather
              </Button>
            </div>
          </form>
        </MuiThemeProvider>
        <hr />
      </div>
    );
  }
}
export default CitySearch;
