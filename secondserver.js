const express = require("express");
const app = express();

var PORT = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Testing, testing 1234....");
});

app.listen(PORT);
