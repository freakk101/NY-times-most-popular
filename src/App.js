import React, { Component } from "react";
import Nav from "./component/Nav";
import NewsArticle from "./component/NewsArticle";
import ArticleDetails from "./component/ArticleDetails";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { news: [], isDetail: false, detailedArticle: "" };
  }

  componentDidMount() {
    fetch(
      "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/7.json?api-key=0sKNTnLGyPghpibXDIayDogYuuk7BiTw"
    )
      .then(res => res.json())
      .then(newsFeed => {
        this.setState({ news: newsFeed.results });
      });
  }

  handleBack = () => {
    this.setState({ isDetail: false });
  };

  handleClick = details => {
    this.setState({ ...this.state, isDetail: true, detailedArticle: details });
  };

  render() {
    if (this.state.news.length === 0) return null;
    const articleList = this.state.news.map((data, index) => (
      <NewsArticle
        key={index}
        title={data.title}
        byline={data.byline}
        date={data.published_date}
        source={data.source}
        thumbnail={data.media[0]["media-metadata"][1].url}
        onClick={this.handleClick}
        isDetail={this.state.isDetail}
        details={data}
      />
    ));
    return (
      <>
        <Nav showBack={this.state.isDetail} onBack={this.handleBack} />
        {this.state.isDetail ? (
          <ArticleDetails data={this.state.detailedArticle} />
        ) : (
          articleList
        )}
      </>
    );
  }
}
