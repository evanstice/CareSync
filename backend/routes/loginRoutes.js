import express from "express";
import { loginUser } from "../controllers/loginController.js";

const router = express.Router();

// Login route
router.post("/login", loginUser);

export default router;
