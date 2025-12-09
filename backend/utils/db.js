import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export async function  dbConnect(req,res) {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(conn.connection.name,"===> db name");
    console.log(conn.connection.port,"===> db port");
    console.log(conn.connection.host,"===> db host");
    } catch (error) {
        res.send({ error : error.message});
        console.log(error.message);
    }
}