import { useMutation, useQuery } from "react-query";
import { ProjectBody, ProjectDetails } from "./types";

//Base Imports
import {
  fetchOneProject,
  fetchAllProjects,
  createProject,
  deleteProject,
} from "./base";
import { AxiosError } from "axios";

const useProjectsQuery = () => {
  return useQuery<ProjectBody, Error>("projects", fetchAllProjects);
};

const useProjectDetailsQuery = (projectId?: string) => {
  return useQuery<ProjectDetails, Error>(["projectDetails", projectId], () =>
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
