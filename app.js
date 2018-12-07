var express = require('express')
// var bodyParser = require('body-parser')
var path = require('path')
var app = express()
// var publicDir = path.join(__dirname, '/public')
// app.use(express.static(publicDir))
app.use('/static',express.static(path.join(__dirname,'public')))

app.get('/flight',function(req, res){
	res.sendFile(path.join(__dirname, 'flight.html'))
	console.log('Search Flight')
})
app.get('/Template-Display-Flights.html',function(req,res){
	res.sendFile(path.join(__dirname, 'Template-Display-Flights.html'))
	console.log('Show Flight')
})
app.get('/Passenger.html',function(req,res){
	res.sendFile(path.join(__dirname, 'Passenger.html'))
	console.log('Passenger')
})
app.get('/Insurance.html',function(req,res){
	res.sendFile(path.join(__dirname, 'Insurance.html'))
	console.log('Insurance')	
})
app.listen(3000, function(){
	console.log('Server started at Port 3000')
})
