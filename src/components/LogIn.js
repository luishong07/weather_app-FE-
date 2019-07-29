import React, { Component } from "react";
import {MuiThemeProvider, TextField} from 'material-ui'
import Button from 'react-bootstrap/Button'


class LogIn extends Component {

  state = {
    username: "",
    password: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault()
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
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
      <MuiThemeProvider>
      <div>
        <form onSubmit={this.onSubmit} >
          <TextField 
              floatingLabelText="Username"
              name="username"
              value={this.state.username}
              onChange={e => this.onChange(e)}
          />
          <TextField 
              floatingLabelText="Password"
              name="password"
              value={this.state.password}
              onChange={e => this.onChange(e)}
          />
          <div style={{textAlign: "left", marginLeft: "45px"}}>
            <Button variant ="primary" onSubmit={this.onSubmit} >Login</Button>
          </div>
        </form>
      </div>

      </MuiThemeProvider>
    );
  }
}
export default LogIn;
