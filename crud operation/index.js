import express from "express"
import mongoose from "mongoose"
import { dbConnect } from "./utils/db.js"




let app = express()




dbConnect()


app.get("/",(req,res)=>{
    res.send("home page")
})


app.listen(3000 , ()=>{
    console.log("server chl rha haaa......");
})