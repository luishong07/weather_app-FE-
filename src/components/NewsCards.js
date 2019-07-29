import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsCard extends Component {
  render() {
    return (
      <div className="ui card">
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
          <button onClick={e => this.props.onClick(this)}>See article</button>
        </div>
      </div>
    );
  }
}
export default NewsCard;
