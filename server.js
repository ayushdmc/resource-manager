import express from 'express';
import path from 'path';
import chalk from 'chalk';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import _ from 'lodash';
import config from './webpack.config';

/* eslint-disable no-console */

const port = process.env.PORT || 5000;
const app = express();
const distPath = path.join(__dirname, 'dist');

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler));
  app.use(webpackHotMiddleware(compiler));
}
app.use(express.static(distPath));
app.set('view engine', 'html');
app.use(bodyParser.json({ type: ['json'] }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/home', (req, res) => {
  res.sendFile(path.join(__dirname, './src/index.html'));
});

app.listen(port);

console.log('************************************');
console.log('Apllication is Running :)');
console.log('Server running on port:', port);
console.log('************************************');
