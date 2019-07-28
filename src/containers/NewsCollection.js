import React, { Component } from "react";

import NewsCards from "../components/NewsCards";

class NewsCollection extends Component {

  style= {
    margin: "10px"
  }

  render() {
    return (
      <div style={this.style}>
        {this.props.news.map(article => (
          <NewsCards
            key={this.props.news.indexOf(article)}
            title={article.title}
            description={article.description}
            author={article.author}
            image={article.urlToImage}
          />
        ))}
      </div>
    );
  }
}
export default NewsCollection;
