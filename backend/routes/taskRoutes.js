import express from "express";
import { createTask, getTasks, updateTask, deleteTask } from "../controllers/taskController.js"
const router = express.Router();

router.post("/", createTask);
router.get("/", getTasks);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

export default router;