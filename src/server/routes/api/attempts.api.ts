import { Router } from "express";

//Controller Import
import attemptsController from "../../controllers/attempts.controller";

const router = Router();

//POST: localhost:3000/attempts/failed
router.post("/failed", attemptsController.testFailedAttempts);

export default router;
