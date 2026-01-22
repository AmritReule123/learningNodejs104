const app = require ("express")()


// home route 
app.get("/", (req,res) =>{
    res.send("i am begginers freindley ")
})

// hero route 
app.get("/hero", (req,res) =>{
    res.send("make a complete this code runing")
})

// server
app.listen(4000, () =>{
    console.log("not a  a user only coder ")
})