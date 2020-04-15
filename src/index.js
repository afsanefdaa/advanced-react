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

/* https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p */

ReactDom.hydrate(<App />, document.getElementById('root'));
