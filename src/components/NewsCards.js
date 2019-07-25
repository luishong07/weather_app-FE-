import React, { Component } from "react";

class NewsCard extends Component {
  render() {
    return (
      <div class="ui card" style={{ width: "250" }}>
        <div class="content">
          <div class="header">{this.props.title}</div>
        </div>
        <div class="content">
          <div class="description">{this.props.description}</div>
        </div>
        <div class="extra content">
          <i aria-hidden="true" class="user icon" />4 Friends Author:
          {this.props.author}
        </div>
      </div>
    );
  }
}
export default NewsCard;
