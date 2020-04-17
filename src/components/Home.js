import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickby';

class Home extends Component {
  static childContextTypes = {
    store: PropTypes.object,
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }
  /* have to read state from store from now on */
  state = this.props.store.getState();

  setSearchQuery = (query) => {
    this.setState({ query });
  };

  render() {
    const { articles, query } = this.state;
    let filteredArticles = articles;
    if (query) {
      filteredArticles = pickBy(articles, (value) => {
        return value.title.match(query)
        || value.body.match(query);
      });
    }
    return [
      <SearchBar key="search-bar" doSearch={this.setSearchQuery}/>,
      <ArticleList articles={filteredArticles} key="articles-list" />
    ];
  }
}

export default Home;
