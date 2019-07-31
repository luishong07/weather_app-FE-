import React, { Component } from "react";

import picture from "../images/newss.jpg";

class NewsCard extends Component {
  style = {
    backgroundImage: "url( " + picture + " )",
    backgroundPosition: "center",
    backgroundSize: "cover"
  };

  render() {
    return (
      <div className="ui card" style={this.style}>
        <div className="content">
          <div className="header">{this.props.article.title}</div>
        </div>
        <div className="content">
          <div className="description">{this.props.article.description}</div>
        </div>
        <div className="extra content">
          <i aria-hidden="true" className="user icon" /> Author:
          {this.props.article.author}
        </div>
        <div>
          <button
            style={{ color: "blue" }}
            onClick={e => this.props.onClick(this)}
          >
            See article
          </button>
        </div>
      </div>
    );
  }
}
export default NewsCard;
