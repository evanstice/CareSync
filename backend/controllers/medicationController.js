import Medication from "../models/Medication.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// Add a new medication to care plan
export const createMedication = async(req, res) => {
    const token = req.header('Authorization')?.split(' ')[1]; // 'Bearer <token>'
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
   }

    const medication = req.body;
    console.log("Request body:", req.body)
    if (!medication.medication) {
        return res.status(400).json({success: false, message: "No medication entered"});
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET); 
    const userId = decoded._id; 
    const newMedication = new Medication({ medication: medication.medication, user_id: userId,  family_id: decoded.familyGroup });

    try {
        await newMedication.save();
        res.status(201).json({ success: true, data: newMedication });
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
    const medication = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Medication ID Does Not Exist" });
    }

    try {
        const updatedMedication = await Medication.findByIdAndUpdate(id, medication, { new: true }) // gives updated medication object
        res.status(200).json({success: true, data: updatedMedication })
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
        await Medication.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Medication successfully deleted"})
    }
    catch (error) {
        console.error("Error deleting medication:", error.message);
        res.status(500).json({success: false, message: "Error deleting medication"});
    }
};