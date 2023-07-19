import axios from "axios";
import { ProjectBody, ProjectDetails } from "../types";

//GET: localhost:3000/api/projects/
const fetchAllProjects = async () => {
  try {
    const response = await axios.get<ProjectBody>("/api/projects/"); //FIX
    return response.data;
  } catch (error) {
    throw error;
  }
};

//GET: localhost:3000/api/projects/:id
const fetchOneProject = async (projectId: string) => {
  try {
    const response = await axios.get<ProjectDetails>(
      `/api/project/${projectId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

//POST: localhost:3000/api/projects/
const createProject = async (project: ProjectBody) => {

  try {
    const response = await axios.post<ProjectBody>("/api/projects/", project);
    return response.data;
  } catch (error) {
    throw error;
  }
};

//DELETE: localhost:3000/api/projects/:id
const deleteProject = async (projectId: string) => {
  try {
    const response = await axios.delete<ProjectDetails>(
      `/api/project/${projectId}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { fetchOneProject, fetchAllProjects, createProject, deleteProject };
