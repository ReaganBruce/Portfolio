import { useMutation, useQuery } from "react-query";
import { IProjectDetailsBody, GetProjectResponseWrapper } from "./types";

//Base Imports
import { fetchOneProject, fetchAllProjects, createProject } from "./base";

const useProjectsQuery = () => {
  return useQuery<GetProjectResponseWrapper>("projects", fetchAllProjects);
};

const useProjectDetailsQuery = (projectId: string) => {
  return useQuery<IProjectDetailsBody>(["projectDetails", projectId], () =>
    fetchOneProject(projectId)
  );
};

const useCreateProject = () => {
  return useMutation(createProject);
};

export { useProjectsQuery, useProjectDetailsQuery, useCreateProject };
