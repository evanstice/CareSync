{/*
    Copider from taskController.js
    */}




import User from "../models/User.js";
import mongoose from "mongoose";

export const createUser = async(req, res) => {
    const task = req.body;
    console.log("Request body:", req.body)
    if (!user.username && !user.password) {
        return res.status(400).json({success: false, message: "No username and password"});
    }

    const newUser = new User(username, passwrod);

    try {
        await newUser.save();
        res.status(201).json({success: true, data: newTask});
    }
    catch (error) {
        console.error("Error creating task:", error.message);
        res.status(500).json({success: false, message: "Error adding task"});
    }
};

export const getUser = async(req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({success: true, data: tasks})
    }
    catch (error) {
        console.error("Error fetching tasks:", error.message);
        res.status(500).json({success: false, message: "Error fetching tasks"})
    }
};

// To be finished based on frontend implementation
export const updateUser = async(req, res) => {
    const task = req.body

    try {
        // const updatedTask = await Task.find
        res.status(200).json({success: true, data: updatedTask})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating task"});
    }
};

export const deleteUser = async(req, res) => {
    try {
        
    }
    catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({success: false, message: "Error deleting task"});
    }
};