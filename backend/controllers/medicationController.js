import Medication from "../models/Medication.js";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

// Create a new medication
export const createMedication = async(req, res) => {
    const token = req.header('Authorization')?.split(' ')[1]; // 'Bearer <token>'
    if (!token) {
        return res.status(401).json({ success: false, message: 'Unauthorized' });
   }
  
    const med = req.body;
    console.log("Request body:", req.body)
    if (!medication.medication) {
        return res.status(400).json({success: false, message: "No medication entered"});
    }

    // Add the user id and family group to each new medication
    const decoded = jwt.verify(token, process.env.TOKEN_SECRET); 
    const userId = decoded._id; 
    const newMed = new Medication({medName: medication.medication, user_id: userId, family_id: decoded.familyGroup});

    try {
        await newMed.save();
        res.status(201).json({success: true, data: newMed});
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
        const decodedPayload = jwt.verify(token, process.env.TOKEN_SECRET); // Use your secret key
        const userId = decodedPayload._id
        const familyId = decodedPayload.familyGroup
        // Fetch medications for the specific user or family
        if(familyId != null) {
            const meds = await Medication.find({ family_id: familyId }); 
            res.status(200).json({ success: true, data: meds });
        }
        else {
            const meds = await Medication.find({ user_id: userId }); 
            res.status(200).json({ success: true, data: meds });
        }
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
        const updatedMedicaiton = await Medication.findByIdAndUpdate(id, medication, { new: true }) // gives updated medication object
        res.status(200).json({success: true, data: updatedMedication})
    }
    catch (error) {
        console.error("Error updating product:", error.message);
        res.status(500).json({success: false, message: "Error updating medication"});
    }
};

// Delete a medication
export const deleteMedication = async(req, res) => {
    const { id } = req.params;
    try {
        const deletedMed = await Medication.findByIdAndDelete(id);
        
        if (!deletedMed) {
            return res.status(404).json({ success: false, message: "Medication not found" });
        }
    }
    catch (error) {
        console.error("Error deleting Medication:", error.message);
        res.status(500).json({success: false, message: "Error deleting medication"});
    }
};

// Updates all medication by users ID when they join a family group
export const updateMedByID = async(req, res) => {
    try {
        const { userId } = req.params;
        const { family_id } = req.body;
        
        const result = await Medication.updateMany({ user_id: userId }, { family_id: family_id });
        
        res.json({ message: 'Medications updated successfully', modifiedCount: result.modifiedCount });
      } catch (error) {
        res.status(500).json({ message: 'Error updating medications', error: error.message });
      }
};