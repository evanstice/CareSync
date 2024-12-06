import express from "express";
import { createMedication, getMedications, updateMedication, deleteMedication, updateByID} from "../controllers/medicationController.js"
const router = express.Router();

router.post("/", createMedication);
router.get("/", getMedications);
router.put("/:id", updateMedication);
router.delete("/:id", deleteMedication);
router.put('/updateByUser/:userId', updateByID);

export default router;