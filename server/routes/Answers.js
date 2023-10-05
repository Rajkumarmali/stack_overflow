import express from "express";
import { deleteAnswer, postAnswer } from "../controllers/Answer.js";
import auth from "../middlewars/auth.js";
const router = express.Router();

router.patch("/post/:id", auth, postAnswer);
router.patch("/answer/:id", auth, deleteAnswer);

export default router;