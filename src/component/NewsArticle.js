import React, { Component } from "react";
import ClampLines from "react-clamp-lines";
import calendar from "../calendar.png";

export default class NewsArticle extends Component {
  render() {
    const data = this.props.details;
    return (
      <article className="article" onClick={() => this.props.onClick(data)}>
        <div className="articleIcon">
          <img src={this.props.thumbnail} alt="" />
        </div>
        <div className="content">
          <ClampLines
            text={this.props.title}
            id="really-unique-id"
            lines={2}
            ellipsis="..."
            className="articleHeading"
            innerElement="h3"
            buttons={false}
          />
          <div className="articleInfo">
            <div>{this.props.byline}</div>
            <div className="calendar">
              <div>{this.props.source}</div>
              <div className="date">
                <img src={calendar} alt="" height="14px" />
                <span>{this.props.date}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="arrow">
          <span>></span>
        </div>
      </article>
    );
  }
}
