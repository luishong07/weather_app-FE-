import React, { Component } from "react";
import {MuiThemeProvider, TextField, RaisedButton} from 'material-ui'

export default class SignUp extends Component {
  
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
        localStorage.setItem("id", result.id)
      })
      .then( () => { window.location.replace('http://localhost:3000/login') })
  };

  render() {
    return (
      <body style={{backgroundImage: `url(https://techcrunch.com/wp-content/uploads/2015/08/clouds.jpg)`}}>
        <div className="row" >
        <div className="col-4"></div>
          <div className="col-4" style={this.style}>
            <h1>Weather App</h1>
            <h2>Sign Up</h2>
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
                    type="password"
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
                /><br></br>
                <div >
                  <RaisedButton type="submit" style ={{margin: "15px"}} onSubmit={this.onSubmit} >Sign Up</RaisedButton>
                </div>
              </form>
            </div>

            </MuiThemeProvider>
          </div>
          <div className="col-4"></div>
        </div>
        </body>
    );
  }
}
