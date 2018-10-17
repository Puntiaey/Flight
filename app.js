var express = require('express')
// var bodyParser = require('body-parser')
var path = require('path')
var app = express()
// var publicDir = path.join(__dirname, '/public')
// app.use(express.static(publicDir))
app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/',function(req, res){
	res.sendFile(path.join(__dirname, 'flight.html'))
})
app.get('/Template-Display-Flights.html',function(req,res){
	res.sendFile(path.join(__dirname, 'Template-Display-Flights.html'))	
})

app.listen(3000, function(){
	console.log('Server started at Port 3000')
})