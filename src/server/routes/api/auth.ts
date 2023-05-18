import express, { Router } from "express";

//Controller Import
import authController from "../../controllers/authCon";

const router = Router();

//POST: localhost:3000/auth/admin
router.post("/admin", authController.createAdmin);

export default router;
