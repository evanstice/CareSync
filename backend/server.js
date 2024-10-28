import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000

app.use(express.json()); // permits use of .json in 'req' below

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

app.use("/api", taskRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});


