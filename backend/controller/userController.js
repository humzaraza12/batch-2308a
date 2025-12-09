import authModel from "../model/authModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export async function register(req,res) {
    const {username , email , password} = req.body 
   try {
    if (!username || !email || !password) {
        return res.send({msg : "all fields are empty"})
     }
     if (!password.length >= 8) {
         res.send({msg : "password 8 se bara hona cahiye"})
     }
 let hash = await bcrypt.hash(password , 10)
// username ---> username : username , email : email
     let user = await authModel({ username ,email , password :hash });
     await user.save()
     return res.send({msg : "user loggedin successfully"})
   } catch (error) {
    res.send({error : error.message});
    console.log(error.message);
   }
}

export async function login(req,res) {
    const { email , password} = req.body 
   try {
    if (!email || !password) {
        return res.send({msg : "all fields are empty"})
     }
     let existing = await authModel.findOne({email})
     if (!existing) return res.send({msg : "email not exist"})

let hash  = await bcrypt.compare( password ,  existing.password)
console.log(hash);
if (!hash) {
   return res.send({mg : "password not match"})
}

let token = jwt.sign({email : existing.email , username : existing.username , id : existing.id }, process.env.SECRET_TOKEN, )

// res.send({msg : "user loggedin"})
  
     return res.send({msg : "user loggedin successfully" , json : token , name : existing.name})
   } catch (error) {
       console.log(error.message);
       return res.send({error : error.message});
   }
}





export async function singleUser(req,res) {
    let {id} = req.params
    try {
        let user = await authModel.findById(id)
        return res.json({user})
    } catch (error) {
        console.log(error.message);
        return res.json({err : error.message})
    }
}



export async function updateUser(req,res) {
    let {id} = req.params
    let update = req.body
    try {
        let user = await authModel.findByIdAndUpdate(id, update , {new : true})
        return res.json({user})
    } catch (error) {
        console.log(error.message);
        return res.json({err : error.message})
    }
}



