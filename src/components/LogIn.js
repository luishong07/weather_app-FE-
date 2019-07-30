import React, { Component } from "react";
import {MuiThemeProvider, TextField} from 'material-ui'
import { RaisedButton } from 'material-ui'



class LogIn extends Component {

  style = {
    position: "relative",
    textAlign: "center",
    margin: "25px",
    padding: "25px",
    borderWidth: "1px",
    borderColor: "gray",
    borderStyle: "solid",
    backgroundColor: "white"
  }

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
      })
      .then( () => { window.location.replace('http://localhost:3000/') })
      
  };

  render() {
    return (
        <div className="row" >
        <div className="col-4"></div>
        <div className="col-4" style={this.style} >
        <h1>Weather App</h1>
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
        <div className="col-4"></div>
        </div>
    );
  }
}
export default LogIn;
