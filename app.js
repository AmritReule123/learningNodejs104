const app = require("express")()

//Alternative 
//const express = require("express)
//cost app = express()


// request and response Arrow function
// app.get("/", (req,res)=>{
//     res.send("this is  a error function in node js ")
// })

// app.listen(2000, (req,res)=>{
// console.log("nodejs is a permant language")
// })


// request and response normal function
// app.get("/", (hello,bye)=>{
//     bye.send("this is a new metod used in node js")
// })

// app.get("/hero")


// // 2000 number ko room chae use gar  yo project run garna
// app.listen(3000,(req,res)=>{
//     console.log("i am a node js running in 3000 room")
//     })


// home route 
app.get("/", (req,res) => {
    res.send("this is a home route request!")
})

// hero route 
app.get("/hero", (req,res) => {
})

// server 
app.listen(3000, () =>{
    console.log("Enter any change your code automatically 300")
})