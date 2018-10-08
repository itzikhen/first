var express = require('express');
var app = express();

app.get("/", function(req,res){
  res.send(`<h1>Welcome ITZIK to our first app</h1><h2>some other header</h2>`)
});

app.listen(process.env.PORT||3500, function () {
    console.log("server is listening");
});
