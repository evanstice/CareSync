import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

// Creates Tasks collection in MongoDB
const Login = mongoose.model("Login", loginSchema);
export default Login;