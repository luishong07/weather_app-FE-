import React, { Component } from "react";
import {MuiThemeProvider, TextField} from 'material-ui'
import { RaisedButton } from 'material-ui'


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
        localStorage.setItem("id", result.id)


      });
  };

  render() {
    return (
      <div style={{textAlign: "center", margin: "25px"}}>
      <h2>Log In</h2>
        <MuiThemeProvider>
        <div>
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
                type="password"
                value={this.state.password}
                onChange={e => this.onChange(e)}
            />
            <div>
              <RaisedButton type="submit" style ={{margin: "15px"}} onSubmit={this.onSubmit} >Login</RaisedButton>
            </div>
          </form>
        </div>

        </MuiThemeProvider>
      </div>
    );
  }
}
export default LogIn;
