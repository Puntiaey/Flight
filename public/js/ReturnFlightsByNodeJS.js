var http = require('http')
var port = 3000
var serverUrl = 'localhost'
var fs = require('fs')
// var express = require('express')
// var app = express()
// var bodyParser = require('body-parser')
// app.use(bodyParser())
// app.use(express.static(__dirname + '/public'))

var server = http.createServer(function (req, res) {
  console.log('Request: ' + req.url)
  if (req.url == '/flightSearch') {
  	// var now = new Date()
  	// var html = '<p>Hello World, the time is ' + now + '.</p>'
  	// res.end(html)
  	// fs.readFile('testBootstrap4.html', function (err, text) {
    //    res.setHeader('Content-Type', 'text/html')
    //    res.end(text)
    //  })
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify([{ 'flightNO': 'TG930', 'price': 120.65 }, {'flightNO': 'SG123', 'price': 250.25}]))
  } else {
  	res.end('<p>Only /flightSearch could be open</p>')
  }
})
console.log('Listening at ' + serverUrl + ':' + port)
server.listen(port, serverUrl)
