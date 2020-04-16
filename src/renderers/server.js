import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';
import Home from 'components/Home';
import axios from 'axios';
import DataApiInterface from 'api';
import config from '../config'; /* entry point is server file */

const sheet = new ServerStyleSheet();

export default async function() {
  /* when ssr we have to call the api to get the data */
  const response = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApiInterface(response.data);

  /* pass the initialProps to the component */
  const initialProps = {
    articles: api.getArticles(),
    authors: api.getAuthors(),
  };

  /* we take the main component and ask from server to render it for us */
  /* think about make a request both ssr and client side would be constly so its better to export the data once it is get */
  return {
    initialMarkup: ReactDOMServer.renderToString(
      <StyleSheetManager sheet={sheet.instance}>
        <Home initialProps={initialProps} />
      </StyleSheetManager>
    ),
    initialProps,
  };
}

