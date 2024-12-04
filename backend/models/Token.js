import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    refresh_token: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
        unique: true // one active token per user session, but tokens don't have to be unique globally
    },
    expiresAt: {
        type: Date,
        default: () => new Date(+new Date() + 24 * 60 * 60 * 1000), // 1 day expiry
    }
}, {
    timestamps: true
});



// Creates Tokens collection in MongoDB
const Token = mongoose.model("Token", tokenSchema);
export default Token;