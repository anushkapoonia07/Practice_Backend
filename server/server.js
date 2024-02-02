const express=require("express")
const app=express()

app.get("/",(req,res)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.json({"message":"Jai Shree Ram"})
})

app.listen(7000,()=>{
    console.log("server started")
})