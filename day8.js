const express = require("express");
const app = express();

app.get("/home", (req,res)=>{
    res.json({
        message: "i am a home page!"

    })
})



app.patch("/about", (req,res)=>{
    res.json({
        sarad: "ata are all collect used i nodejs!"
    })
})

app.post("/post", (req,res)=>{
    res.json({

   
    success: "post is used in postman line"
})
 })


DATABASE_URL="postgresql://postgres.lwrobcnkmtullvupucbx:fullstack@gmail.com@aws-1-ap-south-1.pooler.supabase.com:6543/postgres"


 app.listen(4900, ()=>{
    console.log("4900 are already work in line code!")
 })