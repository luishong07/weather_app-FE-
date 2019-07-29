import React from "react";

import "../style.css";

export default class NewsDetail extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 230);
  }

  render() {
    this.componentDidMount();
    return (
      <div
        className="ui card"
        onClick={this.props.onClick}
        style={{ width: "60rem", marginTop: "60px", marginLeft: "135px" }}
      >
        <div innerRef={innerRef => (this._div = innerRef)} />
        <h3>Selected article </h3>
        <div className="image">
          <img src={this.props.NewsD.props.article.urlToImage} />
        </div>
        <div className="content">
          <div className="header">{this.props.NewsD.props.article.title}</div>
          <div className="meta">
            {this.props.NewsD.props.article.publishedAt}
          </div>
          <div className="description">
            {this.props.NewsD.props.article.content}
          </div>
        </div>
        <div className="extra content">
          <a>
            <i aria-hidden="true" class="user icon" />
            {this.props.NewsD.props.article.author}
          </a>
        </div>
        <button onClick={this.props.onClick}> Back to normal </button>
      </div>
    );
  }
}
