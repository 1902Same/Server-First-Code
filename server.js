var PORT = process.env.PORT || 5000;
var express = require("express");

var server = express();

server.get("/",(req,res,next)=>{
    console.log("someone else");
    res.send("menu: what do you want? food or water?");
})

server.listen(PORT, ()=>{
    console.log("server is runnig on 3000 port")
})