import Token from "../models/Token.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

export const createToken = async(req, res) => {
    const {username, _id} = req.body;
    if (!username) {
        return res.status(400).json({success: false, message: "No username and password"});
    }

    const accessToken = jwt.sign( {username, _id}, process.env.TOKEN_SECRET);
    const refresh_token = jwt.sign( {username, _id} , process.env.REFRESH_TOKEN);
    const newToken = new Token({ token: accessToken, user_id: _id, refresh_token: refresh_token });


    try {
        await newToken.save();
        res.status(201).json({ success: true, data: newToken});
    }
    catch (error) {
        console.error("Error creating token:", error.message);
        res.status(500).json({success: false, message: "Error adding token"});
    }
};

export const getToken = async(req, res) => {
    try {
        const users = await Token.find();
        res.status(200).json({success: true, data: users})
    }
    catch (error) {
        console.error("Error fetching tokens:", error.message);
        res.status(500).json({success: false, message: "Error fetching tokens"})
    }
};

// Update User
export const updateToken = async(req, res) => {
    const { id } = req.params;
    const token = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Token ID Does Not Exist" });
    }

    try {
        const updatedToken = await Token.findByIdAndUpdate(id, token, { new: true }) // gives updated user object
        res.status(200).json({success: true, data: updatedToken})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating token"});
    }
};

export const deleteToken = async(req, res) => {
    const { id } = req.params;

    // Check if the user ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Token ID does not exist" });
    }

    try {
        // Attempt to find and delete the user by ID
        const deletedToken = await Token.findByIdAndDelete(id);
        
        if (!deletedToken) {
            return res.status(404).json({ success: false, message: "Token not found" });
        }

        res.status(200).json({ success: true, message: "Token deleted successfully", data: deletedToken });
    } catch (error) {
        console.error("Error deleting token:", error.message);
        res.status(500).json({ success: false, message: "Error deleting token" });
    }
};