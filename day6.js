const express = require("express");
const radha = express();


// radha.get("/", (req,res)=>{
//     res.send("Welcome to the home page!")
// })

// radha.get("/about", (req, res)=>{
//     res.send("chnage the res to do in home page now!")
// })



// radha.listen(15000, ()=>{
//     console.log("first time changed in code 15000")
// })


// ...........JSON USED ....////////////
radha.get("/", (req,res)=>{
    res.json({
        name: "rama",
        age: 22,
        city: "ktm",
    })
})

radha.get("/abouts", (req,res)=>{
    res.json({
        emil: "radha@gmail.com",
        phone: 9989989,
        location: "ltm",
    })
})

//.....POST METHOD ARE NOT DIRECTLY ACCESSED BROWSER ......./////////
radha.post("/about", (req,res)=>{
    res.json({
        status: "success",
        message: "data posted successfully",
        data: "urgent reply"
,
    })
})

radha.listen(1900, ()=>{
    console.log("jason used are used temporarily 1900")
})