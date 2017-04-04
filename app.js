var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');

// routes
var index = require('./routes/index');
var users = require('./routes/users');
var pollutions = require('./routes/pollutions');
var substances = require('./routes/substances');
var onlyGDKsubstances = require('./routes/onlyGDKsubstances');
var cities = require('./routes/cities');
var getPolygon = require('./routes/getPolygon');
var pollutionsWater = require('./routes/pollutionsWater');
var pollutionsRecreationsWater = require('./routes/pollutionsRecreationWater');
var substancesLab3 = require('./routes/substancesLab3');
var pollutionsLab3 = require('./routes/pollutionsLab3');
var illnessesLab4 = require('./routes/illnessesLab4');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// avoid CORS
app.use(cors());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('less-middleware')(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/pollutions', pollutions);
app.use('/substances', substances);
app.use('/onlyGDKsubstances', onlyGDKsubstances);
app.use('/cities', cities);
app.use('/getPolygon', getPolygon);
app.use('/pollutionsWater', pollutionsWater);
app.use('/pollutionsRecreationsWater', pollutionsRecreationsWater);
app.use('/substancesLab3', substancesLab3);
app.use('/pollutionsLab3', pollutionsLab3);
app.use('/illnessesLab4', illnessesLab4);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

