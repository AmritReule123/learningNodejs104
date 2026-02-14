const express = require("express")  
const app = express()

require("./backend/connection");

////GET COLLEGE
app.get("/college", function(req,res){
    res.json({
        message: "college are successfully!"
    })
})


//POST COLLEGE
app.post("/college", function(req,res){
    res.json({
        message: "college post are added"
    })
})



//DELETE COLLEGE
app.delete("/college/:id", function(req,res){

res.json({
    message: "this messages are automatically deleted"
})
})


// PATCH COLLEGE
app.patch("/college/:id", function(req,res){
    res.json({
        message: ("Books are patched are obeviously")
    })
})


app.listen(1323, ()=>{
    console.log("server running on port 1323")
})