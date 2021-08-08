const express = require("express"),
  path = require("path"),
  //favicon = require('serve-favicon'),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  consign = require("consign"),
  //routes = require("./routes"),
  app = express();

//view engine setup
//app.use(express.static('./app/public'));
app.set("views", path.join(__dirname, "app/views"));
app.set("view engine", "ejs");

//uncomment after placing your favicon in /public
app.use(express.static('./app/public'));
//app.use(favicon(path.join(__dirname, 'public', 'civilsp.ico')));
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//app.use("/", routes);

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/controllers')
    .then('app/models')

    .into(app);

/*
app.use(function(req, res, next) {
    next(createError(404));
});
*/
// error handler
app.listen(3000, function(){
  console.log('Server Online');
});

module.exports = app;
