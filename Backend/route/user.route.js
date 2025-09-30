import express from "express";
import { login, logout, signUp } from "../controller/user.controller.js";
const router = express.Router();

router.post("/signup",signUp)
router.post("/login", login)
router.post("/logout", logout)
export default router;