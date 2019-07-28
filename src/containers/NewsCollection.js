import React, { Component } from "react";

import NewsCards from "../components/NewsCards";

class NewsCollection extends Component {
  render() {
    return (
      <div>
        {this.props.news.map(article => (
          <NewsCards
            key={article.id}
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
