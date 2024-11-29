import User from "../models/User.js";
import mongoose from "mongoose";

export const createLogin = async(req, res) => {
    const {username, password} = req.body;
    console.log("Request body:", req.body)
    if (!username || !password) {
        return res.status(400).json({success: false, message: "No username and password"});
    }

    const accessToken = jwt.sign(username, process.env.TOKEN_SECRET)
    const newLogin = new Login(accessToken);

    try {
        await newLogin.save();
        res.status(201).json({success: true, data: newLogin});
    }
    catch (error) {
        console.error("Error creating token:", error.message);
        res.status(500).json({success: false, message: "Error adding token"});
    }
};

export const getLogin = async(req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({success: true, data: users})
    }
    catch (error) {
        console.error("Error fetching users:", error.message);
        res.status(500).json({success: false, message: "Error fetching users"})
    }
};

// Update User
export const updateLogin = async(req, res) => {
    const { id } = req.params;
    const user = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User ID Does Not Exist" });
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(id, user, { new: true }) // gives updated user object
        res.status(200).json({success: true, data: updatedUser})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating user"});
    }
};

export const deleteLogin = async(req, res) => {
    const { id } = req.params;

    // Check if the user ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "User ID does not exist" });
    }

    try {
        // Attempt to find and delete the user by ID
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "User deleted successfully", data: deletedUser });
    } catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({ success: false, message: "Error deleting user" });
    }
};
