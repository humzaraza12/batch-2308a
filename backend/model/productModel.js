import mongoose from "mongoose"

let productModel = mongoose.Schema({
    productName : {
        type : String, 
        require : true
    },
    category : {
        type : String, 
        require : true
    },
    price : {
        type : Number, 
        require : true
    },
})

export default mongoose.model("product", productModel)