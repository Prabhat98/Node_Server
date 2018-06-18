const express = require("express")

let server = express();

server.get('/greet/:tod/:name',function(req,res,next)
{
  let tod = "morning";// the default value, any value other than morning,evening it will display morning coz its default
  switch (req.params.tod)// tod is stored in req.params.name
  {
    case "morning": tod = "Morning"; break;
    case "evening": tod = "Evening"; break;
  }
  let greeting = "Good "+ tod +" " + req.params.name;
  res.send(greeting);
})

server.listen(2121)
