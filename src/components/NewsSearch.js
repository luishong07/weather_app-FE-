import React, { Component } from "react";

class NewsSearch extends Component {
  render() {
    return (
      <div className="searchForm">
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
