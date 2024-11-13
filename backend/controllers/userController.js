{/*
    Copied from taskController.js
    */}




import User from "../models/User.js";
import mongoose from "mongoose";

export const createUser = async(req, res) => {
    const user = req.body;
    console.log("Request body:", req.body)
    if (!user.username) {
        return res.status(400).json({success: false, message: "No username and password"});
    }

    const newUser = new User(username);

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

// To be finished based on frontend implementation
export const updateUser = async(req, res) => {
    const user = req.body

    try {
        // const updatedUser = await User.find
        res.status(200).json({success: true, data: updatedUser})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating user"});
    }
};

export const deleteUser = async(req, res) => {
    try {
        
    }
    catch (error) {
        console.error("Error deleting user:", error.message);
        res.status(500).json({success: false, message: "Error deleting user"});
    }
};