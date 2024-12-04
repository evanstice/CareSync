import Medication from "../models/Medication.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// Add a new medication to care plan
export const createMedication = async(req, res) => {
    const token = req.header('Authorization')?.split(' ')[1]; // 'Bearer <token>'
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
   }

    const med = req.body;
    console.log("Request body:", req.body)
    if (!med.medName) {
        return res.status(400).json({success: false, message: "No medication entered"});
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET); 
    const userId = decoded._id; 
    const newMed = new Medication({med: med.medName, user_id: userId});

    try {
        await newMed.save();
        res.status(201).json({ success: true, data: newMed });
    }
    catch (error) {
        console.error("Error adding medication:", error.message);
        res.status(500).json({success: false, message: "Error adding medication"});
    }
};

// Fetch all medications from DB
export const getMedications = async (req, res) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1]; // 'Bearer <token>'
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.TOKEN_SECRET); // Use your secret key
        const userId = decoded._id; 
        // Fetch meds for the specific user
        const meds = await Medication.find({ user_id: userId }); 
        res.status(200).json({ success: true, data: meds });
    } catch (error) {
        console.error('Error verifying token or fetching medications:', error.message);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


// Update a medication
export const updateMedication = async(req, res) => {
    const { id } = req.params;
    const med = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Medication ID Does Not Exist" });
    }

    try {
        const updatedMed = await Medication.findByIdAndUpdate(id, med, { new: true }) // gives updated medication object
        res.status(200).json({success: true, data: updatedMed})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating medication"});
    }
};

// Delete a medication from care plan
export const deleteMedication = async(req, res) => {
    const { id } = req.params;
    try {
        
    }
    catch (error) {
        console.error("Error deleting medication:", error.message);
        res.status(500).json({success: false, message: "Error deleting medication"});
    }
};