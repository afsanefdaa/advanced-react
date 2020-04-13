/* where we start react */
import React, {Component} from 'react';
import ReactDom from 'react-dom';

class App extends Component {
    state = {
      name: 'me'
    };

    asyncFunc = () => {
      return Promise.resolve('afi');
    };

    async componentDidMount() {
      this.setState({name: await this.asyncFunc()});
    }

    render() {
      return (
        <div>
          hi {this.state.name}
        </div>
      );
    }
}


ReactDom.render(<App />, document.getElementById('root'));
