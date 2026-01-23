// const app = require ("express")()


// // home route 
// app.get("/", (req,res) =>{
//     res.send("i am begginers freindley ")
// })

// // hero route 
// app.get("/hero", (req,res) =>{
//     res.send("make a complete this code runing")
// })

// // server
// app.listen(4000, () =>{
//     console.log("not a  a user only coder ")
// })


const app = require("express")()
//home router
app.get("/", (req,res) =>{
    res.send("this a home router")
})

//hero server
app.get("/rajan",(req,myname) =>{
    myname.send("sdf fsdf dsf")

})

app.listen(1212, () =>{
    console.log("I am totally changed now1")
})