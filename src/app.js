const express = require("express");
const app=express()
require("./db/conn")
const port=process.env.PORT || "3000";
const dburl=process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
app.get("/",(req,res)=>{
    res.send("Hello from ayush kumar")
})
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})