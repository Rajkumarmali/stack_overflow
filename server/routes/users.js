import express from "express";
import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import auth from "../models/auth.js";
const router = express.Router();

router.post('/signup', signup)
router.post('/login', login)
router.get('/Allusers', getAllUsers)
router.patch('/user/:id', updateProfile)

export default router
