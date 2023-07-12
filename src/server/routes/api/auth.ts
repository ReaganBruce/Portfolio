import { Router } from "express";
import passport from "passport";

//Controller Import
import authController from "../../controllers/authCon";

const router = Router();

//POST: localhost:3000/auth/register
router.post("/register", authController.register);

//POST: localhost:3000/auth/login
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  authController.login
);

export default router;
