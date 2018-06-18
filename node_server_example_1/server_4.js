const express = require("express")

let server = express();

server.get('/greet/:tod',function(req,res,next)
{
  let tod = "morning";
  switch (req.params.tod)
  {
    case "morning": tod = "Morning"; break;
    case "evening": tod = "Evening"; break;
  }
  let greeting = "Good "+ tod +" " + req.query.name;// name waali query will be available to us through req.query.name
  // query is written after "?"
  res.send(greeting);
})

server.get('/html',function(req,res,next)
{ // back ticks to write multiline strings, used to write html code
  res.send(`  
    <html>
      <body>
        <h1>This is a Heading</h1>
        <i>This is italic</i>
      </body>
    </html>    
`)
})

server.listen(2131)
