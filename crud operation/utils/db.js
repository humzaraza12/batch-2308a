import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://yasir:yasir1234@cluster0.p3fwr9x.mongodb.net/db-2308a?retryWrites=true&w=majority"
    );

    console.log(`DB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error →", error.message);
  }
}

dbConnect();
