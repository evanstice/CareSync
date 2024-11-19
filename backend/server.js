import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import taskRoutes from "./routes/taskRoutes.js";
import userRoutes from "./routes/userRoutes.js";
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
app.use("/api/users", userRoutes)

app.listen(PORT, () => {
    connectDB();
    console.log("Server started at http://localhost:4000");
});


// import { MongoClient, ServerApiVersion } from 'mongodb';
// const uri = "mongodb+srv://<db_username>:<db_password>@caresync.tc6eo.mongodb.net/?retryWrites=true&w=majority&appName=CareSync";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);

