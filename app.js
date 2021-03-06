var express = require('express');
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var users  = require('./controllers/users');
var sess  = require('./controllers/session');
var task  = require('./controllers/task');
var FileStore = require('session-file-store')(session);

var app = express();

// 不指定一个引擎还会出错，WTF
/* app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); */

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
//


app.use(function(req,res,next){
    res.header("Access-Control-Allow-Credentials", 'true');
    res.header("Access-Control-Allow-Origin", "*");
    next();
});


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(['/*'],session({
    secret: 'fdsalkfdslkaj',
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*86400*30
    },
    store:new FileStore()
}));


// app.use('/', routes);
app.use('/users', users);
app.use('/session', sess);
app.use('/task', task);

// catch 404 and forward to error handler
/* app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
}); */

// error handler
// no stacktraces leaked to user unless in development environment
/* app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: (app.get('env') === 'development') ? err : {}
    });
}); */


module.exports = app;
