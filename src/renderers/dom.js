/* where we start react */
import React from 'react';
import ReactDom from 'react-dom';
import Home from '../components/Home';
import stateApi from 'api';

/* adding state management */
const store = new stateApi(window.initialProps);
/* we get the api in ssr and pass it into ejs file and store as a global variable and tada :) we have it here!  */
/* https://dev.to/marvelouswololo/how-to-server-side-render-react-hydrate-it-on-the-client-and-combine-client-and-server-routes-1a3p */
ReactDom.hydrate(
  <Home store={store} />,
  document.getElementById('root')
);
