var express = require('express')
var moment = require ('moment')

var app = express ()


// server static content 'web pages'

var log=function(message){
    var time = moment().format()
    console.log ('[Server] @' +time+ ' ' +message)

}

var adder = function(num1,num2){
    var result = num1+num2;
    return result
} 

// Endpoint to do the simple additions
app.get ('/adder', function(req,res){
    log('Adder Request Mode')
    var num1 = parseInt(req.query.num1);
    var num2 = parseInt(req.query.num2);
    var result = adder (num1.num2)
    res.send (''+result+'')
})



var port = 4000;
app.listen(port)
log ('Server listening on:' +port)
