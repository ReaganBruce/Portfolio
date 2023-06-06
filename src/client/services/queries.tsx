import { useMutation, useQuery } from "react-query";
import { ProjectBody, ProjectDetails } from "./types";

//Base Imports
import {
  fetchOneProject,
  fetchAllProjects,
  createProject,
  deleteProject,
} from "./base";

const useProjectsQuery = () => {
  return useQuery<ProjectBody>("projects", fetchAllProjects);
};

const useProjectDetailsQuery = (projectId?: string) => {
  return useQuery<ProjectDetails>(["projectDetails", projectId], () =>
    fetchOneProject(projectId as string)
  );
};

const useCreateProjectQuery = () => {
  return useMutation(createProject);
};

const useRemoveProjectQuery = () => {
  return useMutation(deleteProject);
};

export {
  useProjectsQuery,
  useProjectDetailsQuery,
  useCreateProjectQuery,
  useRemoveProjectQuery,
};
