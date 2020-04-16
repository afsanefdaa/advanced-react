import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Home extends Component {
  state = {
    articles: this.props.initialProps.articles,
    authors: this.props.initialProps.authors,
  };

  render() {
    const {articles, authors} = this.state;
    return <ArticleList articles={articles} authors={authors}/>;
  }
}


export default Home;
