const express = require("express"),
  path = require("path"),
  //favicon = require('serve-favicon'),
  logger = require("morgan"),
  cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  consign = require("consign"),
  multer = require("multer");
  //routes = require("./routes"),
app = express();

//view engine setup
//app.use(express.static('./app/public'));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.static('./app/public'));
//app.use(favicon(path.join(__dirname, 'public', 'civilsp.ico')));
app.use(logger("dev"));
app.use(express.json({limit: '5000kb'}));
app.use(express.urlencoded({limit: '5000kb', extended: true}));
app.use(express.text({limit: '50000kb'}));
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
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
