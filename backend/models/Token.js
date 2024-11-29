import mongoose from "mongoose";

const tokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});



// Creates Tokens collection in MongoDB
const Token = mongoose.model("Token", tokenSchema);
export default Token;