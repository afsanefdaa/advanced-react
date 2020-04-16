import express from 'express'; /* for using imports in server side babel is needed */
import config from './config'; /* entry point is server file */
import serverRender from 'renderers/server';
import data from './api-data/data';

const app = express();  /* initialize an express application */

app.use(express.static('public')); /* express middleware to serve static files */

app.set('view engine', 'ejs'); /* tell express to set ejs as template language */
/* create the / end point it has two arguments https://expressjs.com/en/api.html#app.get.method */
app.get('/', async (req, res) => {
  /* render the main component from here -server- and return back to the page as a prop */
  const initialContent = await serverRender(); /* it contains api call so its asynchronous */
  res.render('index', { ...initialContent }); /* ejs default folder is views */
});

/* create rest api with express */
app.get('/data', (req, res) => {
  res.send(data);
});

/* listen has a path and a callback as its arguments https://expressjs.com/en/api.html#app.listen */
app.listen(config.port, () => {
  console.info(`Running on ${config.port}`);
}); /* instead of hard coding the port use a config file */
