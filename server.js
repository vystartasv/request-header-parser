var express = require("express");

var app = express(),
  port = process.env.PORT || 3000;
app.listen(port);
app.get("/", function(req, res) {
  var ip = (
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    ""
  )
    .split(",")[0]
    .trim();
  var answer = {
    ipaddress: ip,
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  };
  res.json(answer);
});
