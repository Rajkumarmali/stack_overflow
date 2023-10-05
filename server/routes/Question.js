import express from "express";
import { AskQuestion, deleteQuestion, getAllQuestions, voteQuestion } from "../controllers/Questions.js";
import auth from "../middlewars/auth.js";
const router = express.Router();


router.post('/Que', auth, AskQuestion)
router.get('/allquestion', getAllQuestions)
router.delete("/question/:id", auth, deleteQuestion);
router.patch("/vote/:id", auth, voteQuestion);
export default router
