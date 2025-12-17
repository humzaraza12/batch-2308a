import express from "express"
import userRouter from "./routes/userRoutes.js"
import { dbConnect } from "./utils/db.js"



let app = express()
dbConnect()
app.use("/image", userRouter)
app.listen(8000)