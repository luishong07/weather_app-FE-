import React, { Component } from "react";

export default class LogIn extends Component {
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
      <div>
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
