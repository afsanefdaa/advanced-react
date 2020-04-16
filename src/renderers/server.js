import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Home from 'components/Home';
import axios from 'axios';
import stateApi from 'api';
import config from '../config'; /* entry point is server file */

const sheet = new ServerStyleSheet();

export default async function() {
  /* when ssr we have to call the api to get the data */
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  /* adding state management */
  const store = new stateApi(response.data);

  /* we take the main component and ask from server to render it for us */
  /* think about make a request both ssr and client side would be constly so its better to export the data once it is get */
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        {/* adding state management */}
        <Home store={store} />
      </StyleSheetManager>
    ),
    initialProps: response.data,
  };
}

