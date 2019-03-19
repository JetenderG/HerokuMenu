var sequelize = ("sequelize");
var express = require("express");
var routes = require("./routes");
//const routes = require("./routes/api-routes");
//var session = require('express-session');




var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;




// Sets up the Express App
// =============================================================


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and vie

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory

// Routes
app.use(routes);





/*app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
*/
// Routes


var syncOptions = {
  force: false,
  // logging: console.log
};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;