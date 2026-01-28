//require("dotenv").config({path: "./.env"});
import dotenv from "dotenv";
dotenv.config({path: "./.env"});


import connectDB from "./db/index.js";
import { app } from "./app.js";


connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log("Failed to connect to the database", err);
        throw err;
    });
})
.then(() => {
    app.listen(process.env.PORT)
    console.log(`Server is running on port ${process.env.PORT}`);
})
.catch((err) => {
    console.log("MONGO db connection failled !!!", err);
})