import React, {Component} from 'react';
import data from './../api/data';
import DataApiInterface from '../api/DataApiInterface';
import ArticleList from './ArticleList';

const api = new DataApiInterface(data);

class Home extends Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
  }
  render() {
    const {articles, authors} = this.state;
    return <ArticleList articles={articles} authors={authors}/>;
  }
}


export default Home;
