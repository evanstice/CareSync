import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import medicationRoutes from "./routes/medicationRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import tokenRoutes from "./routes/tokenRoutes.js";
import medicationRoutes from "./routes/medicationRoute.js";
import cors from "cors"

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000


app.use(cors())
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

app.use("/api/tasks", taskRoutes)
app.use("/api/medications", medicationRoutes)
app.use("/api/users", userRoutes)
app.use("/api/tokens", tokenRoutes)
app.use("/api/medications", medicationRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:4000");
});


