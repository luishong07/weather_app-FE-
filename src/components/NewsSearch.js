import React, { Component } from "react";

class NewsSearch extends Component {

  newsSearchStyle = {
    textAlign: "left",
    margin: "10px"
  }

  render() {
    return (
      <div className="searchForm" style={this.newsSearchStyle} >
        <form>
          <input type="text" placeholder="Search City" />
          <input type="text" placeholder="Search Country" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
export default NewsSearch;
