import React, { Component } from "react";

import NewsCards from "../components/NewsCards";

class NewsCollection extends Component {
  style = {
    margin: "10px"
  };

  render() {
    return (
      <div style={this.style}>
        {this.props.news.map(article => (
          <NewsCards
            key={this.props.news.indexOf(article)}
            article={article}
            onClick={this.props.onClick}
          />
        ))}
      </div>
    );
  }
}
export default NewsCollection;
