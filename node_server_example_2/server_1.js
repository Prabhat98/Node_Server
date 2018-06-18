const express = require("express")

const server = express();

const m1 = function(req,res,next)
{
  console.log("In Middleware 1")
  next();
}

const m2 = function(req,res,next)
{
  console.log("In Middleware 2")
  next();
}

const m3 = function(req,res,next)
{
  console.log("In Middleware 3")
  next();
}

server.use(m1)

server.use("/a",m2)

//server.use(m3)

server.get("/a",function(req,res,next)
{
  res.send("Hello There!!")
})

server.use(m3)

server.listen(2323)
