import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    familyGroup: {
        type: int
    }
}, {
    timestamps: true
});

// Creates Tasks collection in MongoDB
const Task = mongoose.model("Task", taskSchema);
export default Task;