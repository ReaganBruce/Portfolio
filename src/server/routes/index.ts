import { Router } from "express";

//Route Imports
import projectsRouter from "./api/projects";
import authRouter from "./api/auth";
import attemptsRouter from "./api/attempts";

const router = Router();

//localhost:3000/api
router.use("/api", projectsRouter);

//localhost:3000/auth
router.use("/auth", authRouter);

//localhost:3000/attempts
router.use("/attempts", attemptsRouter);

export default router;
