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
        type: String
    }
}, {
    timestamps: true
});

// Creates User collection in MongoDB
const User = mongoose.model("User", UserSchema);
export default User;