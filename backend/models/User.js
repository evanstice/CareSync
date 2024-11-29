import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        familyGroup: {
            type: Number // Fixed type from `int` to `Number`
        }
    },

    password: {
        type: String,
        required: true
    },
    familyGroup: {
        type: String

    }
);

// Creates the User collection in MongoDB
const User = mongoose.model("User", UserSchema);


// Creates User collection in MongoDB
const User = mongoose.model("User", UserSchema);
export default User;
