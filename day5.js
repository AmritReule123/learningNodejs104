const express = require("express");
const java = express();

java.get("/", (req,res)=>{
    res.send("ale dherai change vaya kee k ho moo!")
})

java.get("/home", (req,res) =>{
    res.send("dfdsf dsklk kldskfl")
})
    

java.listen(2000, ()=>{
    console.log("totally your are changed in 2000")
})
n