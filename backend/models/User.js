import mongoose from "mongoose";

// Define the User schema
const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        familyGroup: {
            type: Number, // Fixed type from `int` to `Number`
        },
    },
    { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Create the User model
const User = mongoose.model("User", UserSchema);

export default User;
