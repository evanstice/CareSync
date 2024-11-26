import User from "../models/User.js";
import mongoose from "mongoose";

export const createUser = async(req, res) => {
    const {username, password} = req.body;
    console.log("Request body:", req.body)
    if (!username || !password) {
        return res.status(400).json({success: false, message: "No username and password"});
    }

    const newUser = new User({username, password});

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newUser});
    }
    catch (error) {
        console.error("Error creating user:", error.message);
        res.status(500).json({success: false, message: "Error adding user"});
    }
};

export const getUser = async(req, res) => {
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
export const updateUser = async(req, res) => {
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

export const deleteUser = async(req, res) => {
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
