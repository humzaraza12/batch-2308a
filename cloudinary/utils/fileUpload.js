import cloudinary from "./cloudinaryConfig.js"
import streamifier from "streamifier"

export function fileUpload(filePath){
return new Promise((resolve,reject)=>{
    let cloudinaryStream = cloudinary.uploader.upload_stream((err , result)=>{
        if (err) {
           return reject(err)
        }
        resolve(result)
    })
    streamifier.createReadStream(filePath).pipe(cloudinaryStream)
})
}