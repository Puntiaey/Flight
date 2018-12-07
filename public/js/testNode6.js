var http = require('http')
var orderModule = require('./Order')
// Return Constructor Function
var orderCons = orderModule.OrderConstructor

http.createServer(function (req, res) {
  var o1 = new orderCons()
  o1.prodID = 1234
  // res.writeHead(200, {'Content-Type': 'text/plain'})
  // res.end('Hello World!: ' + o1.detail())
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(o1.searchFlight('Bangkok', 'Paris')))
}).listen(8090)
