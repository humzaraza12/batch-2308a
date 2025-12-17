import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

export async function dbConnect() {
    try {
        let conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(await conn.connection.port);
    } catch (error) {
        console.log(error.message);
    }
}