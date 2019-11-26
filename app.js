var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();
console.log(path.join(__dirname, 'dist'));
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'dist'));
app.use(express.static(path.join(__dirname, 'dist'), {index: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err.message);
  res.status(err.status || 500).end();
});

module.exports = app;
