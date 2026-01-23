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






// const app = require("express")()

// app.get("/", (req,res) =>{
//     res.send("this is a home page!")
// })

// //
// app.get("/rammmm ", (hari,res) =>{
//     hari.send("mo tw router hoo")
// })


// app.listen(155, () =>{
//     console.log("mo tw run   dsd  dsf dsfds ds f shunnxuu")
// })





const app = require("express") ()

// home route (text)
app.get("/", (req,res) =>{
    res.send("this is a home route not changed automatically")
})


//json route 
app.get("/json", (req,res) =>{
    res.json({
        name: "amrit",
        age: 21,
        city: "kathmandu"
    })
})

//server
app.listen(2000, () =>{
    console.log("oh my god1")
})