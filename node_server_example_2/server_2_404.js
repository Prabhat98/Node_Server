const express = require("express")

const server = express();

server.get("/a",(req,res)=>{res.send("This is A")})

server.get("/b",(req,res)=>{res.send("This is B")})

server.use((req,res)=>{res.send("<h1>404 NOT FOUND</h1>")})//not specified path here coz that will be valid for all 
//the paths other than /a and /b

/*
Here get is not used coz it cannot handle global middlewares where as use can
also use can handle post, delete, patch etc requests that's why used it
*/

server.listen(1234)
