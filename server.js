'use strict';

// simple express server
const express = require('express');
const mongoose = require('mongoose');

const config = require('./config.js');
const bodyParser = require('body-parser');
const multer = require('multer'); // v1.0.5
const upload = multer(); // for parsing multipart/form-data

const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

// connect to mongodb
mongoose.connect('mongodb://localhost/pokemonhub_test');

if (isDeveloping) {

} else {
  app.use(express.static(__dirname + '/dist'));
}

//
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// import routes

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
