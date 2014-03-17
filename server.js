#!/bin/env node
//  OpenShift sample Node application
var http = require('http');

//Get the environment variables we need.
var ipaddr  = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port    = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var reqs = [];

http.createServer(function (req, res) {
  if(req.url !== '/' && req.url !== '' && req.url !== '/favicon.ico'){
    reqs.push(req.method + ' ' + req.url);
  }
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(reqs.join('\n'));
}).listen(port, ipaddr);
console.log("Server running at http://" + ipaddr + ":" + port + "/");
