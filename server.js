
const server=require("express")
const app=server()
app.get("/home",(req,res)=>{
    res.send("this is my page")
})

app.get("/about",(req,res)=>{
    res.send("this is about page")
})

app.listen(9000)