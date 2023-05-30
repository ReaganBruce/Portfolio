import axios from "axios";
import { GetProjectResponseWrapper, IProjectDetailsBody } from "./types";

//GET: localhost:3000/api/projects/
const fetchAllProjects = async () => {
  try {
    const { data } = await axios.get<GetProjectResponseWrapper>("/api/projects/");
    return data;
  } catch (error) {
    throw error
  }
};

//GET: localhost:3000/api/projects/:id
const fetchOneProject = async (projectId: string) => {
  try {
    const { data } = await axios.get<IProjectDetailsBody>(`/api/project/${projectId}`);
    return data;
  } catch (error) {
    throw error
  }
};

//POST: localhost:3000/api/projects/
const createProject = async (project: IProjectDetailsBody) => {
  try {
    const { data } = await axios.post<IProjectDetailsBody>("/api/projects/", project);
    return data;
  } catch (error) {
    throw error
  }
};

//DELETE: localhost:3000/api/projects/:id
const deleteProject = async (projectId: string) => {
  try {
    const response = await axios.delete<IProjectDetailsBody>(`/api/project/${projectId}`)
    return response.data
  } catch (error) {
    throw error
  }
}

export { fetchOneProject, fetchAllProjects, createProject, deleteProject };
