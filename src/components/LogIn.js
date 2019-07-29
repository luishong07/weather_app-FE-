import React, { Component } from "react";

class LogIn extends Component {
  
  
  loginStyle = {
    textAlign: "left",
    margin: "10px"
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
    fetch("http://localhost:3003/login", {
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
      <div style={this.loginStyle} >
        <form onSubmit={this.onSubmit} >
          <label>Username: </label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={e => this.onChange(e)}
          />
          <label>Password: </label>
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={e => this.onChange(e)}
          />
          <button onSubmit={this.onSubmit} >LOGIN</button>
        </form>
      </div>
    );
  }
}
export default LogIn;
