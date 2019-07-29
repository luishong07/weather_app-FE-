import React, { Component } from "react";
import { MuiThemeProvider, TextField } from "material-ui";
import Button from "react-bootstrap/Button";

class CitySearch extends Component {
  state = {
    city: "",
    country: "",
    searchWeather: ""
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
        this.setState({
          searchWeather: result
        });
      });
  };

  render() {
    return (
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
          <div style={{ textAlign: "left", marginLeft: "45px" }}>
            <Button
              onClick={this.onSubmit}
              variant="primary"
              type="submit"
              style={{ margin: "auto", padding: "5px" }}
            >
              Add Favorite City
            </Button>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
export default CitySearch;
