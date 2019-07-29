import React, { Component } from "react";
import {MuiThemeProvider, TextField} from 'material-ui'
import Button from 'react-bootstrap/Button'

export default class SignUp extends Component {
  state = {
    username: "",
    hometown_city: "",
    hometown_country: "",
    email: "",
    password: ""

  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        hometown_city: this.state.hometown_city,
        hometown_country: this.state.hometown_country,
        email: this.state.email,
        password: this.state.password
      })
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        localStorage.setItem("token", result.auth_token)
      });
  };

  render() {
    return (
      <div style={{textAlign: "center"}}>
        <MuiThemeProvider>
        <div style={{position: "relative", margin: "auto"}}>
          <form onSubmit={this.onSubmit} >
            <TextField 
                floatingLabelText="Username"
                name="username"
                value={this.state.username}
                onChange={e => this.onChange(e)}
            /><br></br>
            <TextField 
                floatingLabelText="Password"
                name="password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
            /><br></br>
            <TextField 
                floatingLabelText="Email"
                name="email"
                value={this.state.email}
                onChange={e => this.onChange(e)}
            /><br></br>
            <TextField 
                floatingLabelText="Hometown City"
                name="hometown_city"
                value={this.state.hometown_city}
                onChange={e => this.onChange(e)}
            /><br></br>
            <TextField 
                floatingLabelText="Hometown Country"
                name="hometown_country"
                value={this.state.hometown_country}
                onChange={e => this.onChange(e)}
            />
            <div >
              <Button variant ="primary" onSubmit={this.onSubmit} >Sign Up</Button>
            </div>
          </form>
        </div>

        </MuiThemeProvider>
      </div>
    );
  }
}
