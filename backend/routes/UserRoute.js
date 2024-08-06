import express from "express";

const router = express.Router();


import  { Login, Logout, userProfile } from "../controllers/usercontroller.js";

router.post("/login", Login);
router.get("/logout/:id", Logout);
router.get("/profile/:id", userProfile);

export default router;