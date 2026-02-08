const express = require("express");
const app = express();


app.get("/", (req,res)=>{
    res.json({
        name: "sita",
        city: "pokhara",
        age: 23
    })
})



app.get("/about", (req,res)=>{
    res.json({
        nam: "sitaram",
        country: "Nepal",
        pressionals: "engineer"
      
    })
})


app.post("/about", (req,res)=>{
    res.json({
        stauts: "success",
        message: "successfully posted data",
        data: "need to reply urgently"
    })
})



app.delete("/about/:me", (req,res)=>{
    res.json({
        status: "delete forever",
        confirm: "surely format this code!",

    })
})


app.patch("/about/:patch", (req,res)=>{
    res.json({
        status: "patching",
        means: "patch vanay ko k ho!"
    })
})


app.listen(1111, ()=>{
    console.log("this port are usually work in browser 1111")
})