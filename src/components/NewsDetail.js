import React from "react";

export default class NewsDetail extends React.Component {
  render() {
    return (
      <div onClick={this.props.onClick}>
        <div>
          <h1>{this.props.NewsD.props.article.title}</h1>
        </div>
        <div>
          <h4>{this.props.NewsD.props.article.content}</h4>
        </div>
        <div>
          <p>{this.props.NewsD.props.article.author}</p>
        </div>

        <button onClick={this.props.onClick}> Back to normal </button>
        <button onClick={this.redirectFunction}>Go to original Website</button>
      </div>
    );
  }
}
