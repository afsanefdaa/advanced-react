import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

import Home from './components/Home';

const sheet = new ServerStyleSheet();

export default function() {
  /* we take the main component and ask from server to render it for us */
  return ReactDOMServer.renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <Home />
    </StyleSheetManager>
  );
}

