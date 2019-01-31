var express = require('express');

var app = express(),
  port = process.env.PORT || 3000;
  app.listen(port);
  app.get('/', function(req, res) {
    var answer = {"ipaddress":req.headers['host'], 
    "language":req.headers['accept-language'],
    "software":req.headers['user-agent']};
    res.json(answer);
});