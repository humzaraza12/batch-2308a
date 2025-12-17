import mongoose from "mongoose";


let userModel = mongoose.Schema({
    url : {
        type : String,
        required : true
    }
});



export default mongoose.model("imgFolder",userModel)