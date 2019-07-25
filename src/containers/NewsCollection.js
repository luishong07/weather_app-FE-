import React, { Component } from "react";

import NewsCards from "../components/NewsCards";

class NewsCollection extends Component {
  render() {
    return (
      <div>
        {this.props.news.map(articles => (
          <NewsCards
            title={articles.title}
            description={articles.description}
            author={articles.author}
          />
        ))}
      </div>
    );
  }
}
export default NewsCollection;
