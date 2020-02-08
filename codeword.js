var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//app.use(tokencheck.tokencheck);
app.use(express.json());

module.exports = app;
