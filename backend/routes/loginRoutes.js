import express from "express";
import { createLogin, getLogin, updateLogin, deleteLogin } from "../controllers/loginController.js"
const router = express.Router();

router.post("/", createLogin);
router.get("/", getLogin);
router.put("/:id", updateLogin);
router.delete("/:id", deleteLogin);

export default router;