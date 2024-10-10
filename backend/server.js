import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Server is ready");
});

const connectDB = async() => {
    try {
        const db = await mongoose.connect(process.env.DB_URL)
        console.log(`MongoDB Connected: ${db.connection.host}`)
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});


