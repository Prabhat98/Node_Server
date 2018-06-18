const express = require("express")// requiring express (npm install express) in the current directory

const server = express();// creating a new server, using it as a function so that we can use whatever the function contains

server.get('/',function(req,res,next)//GET request to run the following, '/' is path
/*
req is the request that comes from clients to server
res is the response that server sends to the clients
next is for invoking next middleware function 
function in the HTTP handler that runs in response to the request made
*/
{
  console.log("request and response are working perfectly fine")// this line wouldn't print on the terminal untill 
  // request is made on the given path coz then only the function will execute else without request function won't run
  res.send("Hello World")// sending the response
})


server.listen(1998);//server doesn't run on their own so it needs to start listening to a spesific port number on which
// the request will be sent.
