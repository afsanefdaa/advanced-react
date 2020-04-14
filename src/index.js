/* where we start react */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Home from './components/Home';

class App extends Component {
  render() {
    return (
      <Home/>
    );
  }
}


ReactDom.render(<App />, document.getElementById('root'));
