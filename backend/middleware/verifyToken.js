import jwt from "jsonwebtoken"
import authModel from "../model/authModel.js"

export async function verifyToken(req, res, next) {
    let authHeader = req.headers.authorization

    try {

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.send("token not verified")
        }


        let token = authHeader.split(" ")[1]
        let decoded = jwt.verify(token, process.env.SECRET_TOKEN)

        res.send({decoded})
let user =  authModel.findById(decoded.id);

if (!user) {
    return res.send({msg : "user deleted"})
}

        req.user = decoded
        next()
    } catch (error) {
        return res.send({ error: error.message })
    }
}