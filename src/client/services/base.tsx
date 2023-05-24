import axios from "axios";

//localhost:3000/api/projects/
const fetchAllProjects = async () => {
  const { data } = await axios.get("/api/projects/");
  return data;
};

//localhost:3000/api/projects/:id
const fetchOneProject = async (projectId: number) => {
  const { data } = await axios.get(`/api/project/${projectId}`);
  return data;
};

export { fetchOneProject, fetchAllProjects };
