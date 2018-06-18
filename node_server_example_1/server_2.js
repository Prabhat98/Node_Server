const express = require("express")

let server = express();

server.get('/greet/:name',function(req,res,next)// :name becomes a variable after putting : in front of it
// and gets stored in req.params.name
{
  let greeting = "Good Morning, " + req.params.name;
  res.send(greeting);
})

server.listen(2121)
