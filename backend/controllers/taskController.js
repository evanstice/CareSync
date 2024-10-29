import Task from "../models/Task.js";
import mongoose from "mongoose";

export const createTask = async(req, res) => {
    const task = req.body;
    console.log("Request body:", req.body)
    if (!task.task) {
        return res.status(400).json({success: false, message: "No task entered"});
    }

    const newTask = new Task(task);

    try {
        await newTask.save();
        res.status(201).json({success: true, data: newTask});
    }
    catch (error) {
        console.error("Error creating task:", error.message);
        res.status(500).json({success: false, message: "Error adding task"});
    }
};

export const getTasks = async(req, res) => {
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
export const updateTask = async(req, res) => {
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

export const deleteTask = async(req, res) => {
    try {
        
    }
    catch (error) {
        console.error("Error deleting task:", error.message);
        res.status(500).json({success: false, message: "Error deleting task"});
    }
};