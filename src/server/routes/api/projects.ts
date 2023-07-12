import { Router } from "express";

//Controller Imports
import projectsController from "../../controllers/projectsCon";

//Multer Import
import { uploadProjectImage } from "../../utils/fileUpload";
import passport from "passport";

const router = Router();

//GET: localhost:3000/api/projects
router.get("/projects/", projectsController.allProjects);

//GET ID: localhost:3000/api/projects/:id
router.get("/project/:id", projectsController.singleProject);

//POST: localhost:3000/api/projects
router.post(
  "/projects/",
  passport.authenticate("jwt", { session: false }),
  uploadProjectImage.single("projectFileUpload"),
  projectsController.createProject
);

//UPDATE: localhost:3000/api/projects/:id
router.put(
  "/project/:id",
  passport.authenticate("jwt", { session: false }),
  projectsController.updateProject,
);

//DELETE: localhost:3000/api/projects/:id
router.delete(
  "/project/:id",
  passport.authenticate("jwt", { session: false }),
  projectsController.deleteProject,
);

export default router;
