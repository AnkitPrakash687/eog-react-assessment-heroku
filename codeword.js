var express = require('express');
var path = require('path');
require('dotenv').config();
var app = express();

app.set('views', path.join(__dirname, 'client/build'));
app.use(express.static(path.join(__dirname, 'client/build')));
app.engine("html", require('ejs').renderFile)
app.set('view engine', 'html');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});
//app.use(tokencheck.tokencheck);
app.use(express.json());

module.exports = app;
