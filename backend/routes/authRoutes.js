import express from "express"
import { login, register, singleUser, updateUser } from "../controller/userController.js"
import { verifyToken } from "../middleware/verifyToken.js"


let authRoutes = express.Router()


authRoutes.post("/register", register)
authRoutes.get("/:id", singleUser)
authRoutes.put("/:id", updateUser)
authRoutes.post("/login", login)
authRoutes.get("/profile",verifyToken ,  (req,res)=>{
    res.send({ msg : "you are verified"})
})

export default authRoutes