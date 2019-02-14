// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(express.static('FriendFinder'));

 require("./app/routing/apiRoutes")(app);
 require("./app/routing/htmlRoutes")(app);

// Start listening on PORT
app.listen(PORT, function() {
    console.log('App is listening on PORT: ' + PORT);
  });