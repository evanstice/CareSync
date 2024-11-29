import express from "express";
import { createToken, getToken, updateToken, deleteToken } from "../controllers/tokenController.js"
const router = express.Router();

router.post("/", createToken);
router.get("/", getToken);
router.put("/:id", updateToken);
router.delete("/:id", deleteToken);

export default router;