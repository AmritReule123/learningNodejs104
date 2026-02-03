const express = require("express");
const hari = express();


// app.get("/", (req,res)=>{
//     res.send("hello i am a nodejs server");

// })

// app.listen(4500, ()=>{
//     console.log("this is a server running 4500")
// })



hari.get("/", (req,res)=>{
    res.send("this is my changer code how and how!")
})

hari.get("/home", (req,res)=>{
    console.log("mo tw totally changed now")
})

hari.listen(1400, ()=>{
    console.log("this is a ruuning time code on 1400")
})