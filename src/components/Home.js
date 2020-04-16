import React, { Component } from 'react';
import ArticleList from './ArticleList';

class Home extends Component {
  /* have to read state from store from now on */
  state = this.props.store.getState();

  render() {
    const {articles} = this.state;
    return <ArticleList articles={articles} store={this.props.store}/>;
  }
}


export default Home;
