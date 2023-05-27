import axios from "axios";
import { IProjectDetailsBody } from "./types";

//GET: localhost:3000/api/projects/
const fetchAllProjects = async () => {
  const { data } = await axios.get("/api/projects/");
  return data;
};

//GET: localhost:3000/api/projects/:id
const fetchOneProject = async (projectId: string) => {
  const { data } = await axios.get(`/api/project/${projectId}`);
  return data;
};

//POST: localhost:3000/api/projects/
const createProject = async (project: IProjectDetailsBody) => {
  return (await axios.post("/api/projects/", project))
};

export { fetchOneProject, fetchAllProjects, createProject };
