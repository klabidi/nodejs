var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser') ;


app.use(bodyParser()) ; 

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
res.sendFile(path.join(__dirname+'/about.html'))
});
app.post('/form',function(req,res){
console.log(req.body.email)
});


app.listen(3000);

console.log("Running at Port 3000");
