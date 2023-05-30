import axios from "axios";
import { IProjectDetailsBody } from "./types";

//GET: localhost:3000/api/projects/
const fetchAllProjects = async () => {
  try {
    const { data } = await axios.get("/api/projects/");
    return data;
  } catch (error) {
    throw error
  }
};

//GET: localhost:3000/api/projects/:id
const fetchOneProject = async (projectId: string) => {
  try {
    const { data } = await axios.get(`/api/project/${projectId}`);
    return data;
  } catch (error) {
    throw error
  }
};

//POST: localhost:3000/api/projects/
const createProject = async (project: IProjectDetailsBody) => {
  try {
    const { data } = await axios.post("/api/projects/", project);
    return data;
  } catch (error) {
    throw error
  }
};

export { fetchOneProject, fetchAllProjects, createProject };
