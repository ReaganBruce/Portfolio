import { useQuery } from "react-query";
import { IProjectDetailsBody, GetProjectResponseWrapper, } from "./types";

//Base Imports
import { fetchOneProject, fetchAllProjects } from "./base";

const useProjectsQuery = () => {
    return useQuery<GetProjectResponseWrapper>("projects", fetchAllProjects);
};

const useProjectDetailsQuery = (projectId: any) => {
  return useQuery<IProjectDetailsBody>(["projectDetails", projectId], () =>
    fetchOneProject(projectId)
    
  );
};

export { useProjectsQuery, useProjectDetailsQuery };
