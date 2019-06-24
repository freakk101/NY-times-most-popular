import React, { Component } from "react";

export default class ArticleDetails extends Component {
  render() {
    return (
      <div className="articleDetails">
        <h1>{this.props.data.title}</h1>
        <img
          className="articleImg"
          src={this.props.data.media[0]["media-metadata"][4].url}
          alt=""
        />
        <h3>{this.props.data.abstract}</h3>
      </div>
    );
  }
}
