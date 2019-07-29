import React, { Component } from "react";
import {MuiThemeProvider, TextField} from 'material-ui'
import Button from 'react-bootstrap/Button'



class NewsSearch extends Component {


  state = {
    city: "",
    country: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault()
    

  }


  render() {
    return (
      <MuiThemeProvider>
        <form onSumbit={this.onSubmit} >
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
          <div style={{textAlign: "left", marginLeft: "45px"}}>
            <Button variant ="primary">Add Favorite City</Button>
          </div>
        </form>
      </MuiThemeProvider>
    );
  }
}
export default NewsSearch;
