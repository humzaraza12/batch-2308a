import mongoose from "mongoose"

let userMOdel = mongoose.Schema({
    username : {
        type : String, 
        unqiue : true,
        require : true
    },
    email : {
        type : String, 
        unqiue : true,
        require : true
    },
    password : {
        type : String, 
        require : true
    },
})

export default mongoose.model("hamza", userMOdel)