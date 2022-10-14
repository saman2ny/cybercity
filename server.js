var express = require("express");
var app = express();
app.use(express.static(__dirname + "/"));

app.all("*", function (req, res) {
  console.log("Default redirect");
  res.status(200).sendFile(__dirname + "/dist/index.html");
});

// Start the server
var server = app.listen(process.env.PORT || 6161, function () {
  var port = server.address().port;

  console.log("hooowwah %s", port);
  console.log("Press Ctrl+C to quit.");
});
