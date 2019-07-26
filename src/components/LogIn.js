import React, { Component } from "react";

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
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
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
      });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={e => {
            this.onSubmit(this.state.username, this.state.password);
          }}
        >
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
        </form>
      </div>
    );
  }
}
export default LogIn;
