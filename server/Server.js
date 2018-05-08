let express = require('express');
let path = require('path');
let config = require('../webpack.config.js');
let webpack = require('webpack');
let webpackDevMiddleware = require('webpack-dev-middleware');
let webpackHotMiddleware = require('webpack-hot-middleware');

let app = express();

let compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/', function (req, res) {
  res.sendFile(path.resolve('public/index.html'));
});

let port = 3000;

app.listen(port, function(error) {
  if(error) throw error;
  console.log("Express server listening on port: ", port);
});
