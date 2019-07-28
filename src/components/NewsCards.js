import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">{this.props.title}</div>
        </div>
        <div className="content">
          <div className="description">{this.props.description}</div>
        </div>
        <div className="extra content">
          <i aria-hidden="true" className="user icon" /> Author:
          {this.props.author}
        </div>
      </div>
    );
  }
}
export default NewsCard;
