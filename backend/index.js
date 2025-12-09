import express, { urlencoded } from "express"
import dotenv from 'dotenv'
import authRoutes from "./routes/authRoutes.js"
import { dbConnect } from "./utils/db.js"
import cors from "cors"
import productModel from "./model/productModel.js"


dotenv.config()

let app = express()

app.use(urlencoded({extended : true}))

app.use(cors())
app.use(express.json())

let PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.send("this is our home page")
})

app.use("/api", authRoutes)

app.post("/abdulsami",(req,res)=>{
    res.send("this is our home page")
})

app.delete("/abdulsami/:id",(req,res)=>{
    res.send("your product deleted successfuly")
})

app.get("/yasir",(req,res)=>{
    res.send("this is our profile page")
})

dbConnect()

// app.use("/about", aboutRouter)


app.post("/product/insert",async (req,res)=>{
    const {productName , category , price} = req.body
  try {
    if (!productName || ! category || !price) {
        return  res.send({ msg : "input fields missing"})
      }
      let products = await productModel.create({ productName , category , price});
      await products.save()
  return res.send({ msg : "product inserted" , products})
  } catch (error) {
    res.send({error : error.message})
    console.log(error.message);
  }


})

app.get("/product",async (req,res)=>{
    const {productName , category , price} = req.body
  try {
      let products = await productModel.find();
  return res.send({ msg : "product inserted" , products})
  } catch (error) {
    res.send({error : error.message})
    console.log(error.message);
  }


})

app.delete("/product/:id",async (req,res)=>{
    const {productName} = req.body
  try {
      let products = await productModel.findByIdAndDelete(req.params.id,{productName} );
  return res.send({ msg : "product inserted" , products})
  } catch (error) {
    res.send({error : error.message})
    console.log(error.message);
  }


})

app.listen(PORT,()=>{
    console.log("server is running on", PORT);
})

// console.log(app);