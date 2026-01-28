import { V2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadToCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) return null;
        //uploading file to cloudinary
        cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto",
        })
        // file uploaded to cloudinary, now we can remove the file from local server
        console.log("File uploaded to Cloudinary successfully",
            response.url);
        return response;
    }
    catch (error) {
        fs.unlinkSync(localFilePath);// remove the local save temperory file as upload failed
        return null;
    }
}