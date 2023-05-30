import { Router } from "express";

//Controller Imports
import projectsController from "../../controllers/projectsCon";

//Multer Import
import { uploadFile } from "../../utils/fileUpload";

const router = Router();

//GET: localhost:3000/api/projects
router.get("/projects/", projectsController.allProjects);

//GET ID: localhost:3000/api/projects/:id
router.get("/project/:id", projectsController.singleProject);

//POST: localhost:3000/api/projects
router.post("/projects/", uploadFile.single('projectFileUpload'), projectsController.createProject);

//UPDATE: localhost:3000/api/projects/:id
router.put("/projects/:id", projectsController.updateProject);

//DELETE: localhost:3000/api/projects/:id
router.delete("/project/:id", projectsController.deleteProject);

export default router;
