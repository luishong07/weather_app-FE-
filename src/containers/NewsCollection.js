import React, { Component } from "react";

import NewsCards from "../components/NewsCards";

class NewsCollection extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Hi from NewsCollection</h1>
        </div>
        <div>
          <NewsCards />
        </div>
      </div>
    );
  }
}
export default NewsCollection;
