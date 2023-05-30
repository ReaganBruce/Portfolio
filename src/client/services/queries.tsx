import { useMutation, useQuery } from "react-query";

//Base Imports
import { fetchOneProject, fetchAllProjects, createProject, deleteProject } from "./base";

const useProjectsQuery = () => {
  return useQuery("projects", fetchAllProjects);
};

const useProjectDetailsQuery = (projectId: string) => {
  return useQuery(["projectDetails", projectId], () =>
    fetchOneProject(projectId)
  );
};

const useCreateProjectQuery = () => {
  return useMutation(createProject);
};


const useRemoveProjectQuery = (projectId: string) => {
  return useMutation(deleteProject)
}

export { useProjectsQuery, useProjectDetailsQuery, useCreateProjectQuery, useRemoveProjectQuery };
