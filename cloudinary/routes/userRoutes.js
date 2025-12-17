import { Router } from "express";
import userModel from "../models/userModel.js";
import { fileUpload } from "../utils/fileUpload.js";
import upload from "../utils/multer.js";

let userRouter = Router()

userRouter.post("/upload", upload.single("image"), async (req, res) => {
    try {

        let result = await fileUpload(req.file.buffer);
        console.log(result);
        let savedDoc = await userModel.create({
            url: result.secure_url
        })
        return res.send({ msg: "file uploaded", url : savedDoc.url })
    } catch (error) {
        console.log(error.message);
    }
})


export default userRouter