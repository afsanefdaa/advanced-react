import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  };

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  componentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  render() {
    const { articles, query } = this.state;
    let filteredArticles = articles;
    const queryReg = new RegExp(query, 'i');

    if (query) {
      filteredArticles = pickBy(articles, (value) => {
        return value.title.match(queryReg)
        || value.body.match(queryReg);
      });
    }
    return [
      <Timestamp key="timestamp" timestamp={this.state.timestamp} />,
      <SearchBar key="search-bar" />,
      <ArticleList articles={filteredArticles} key="articles-list" />
    ];
  }
}

export default Home;
