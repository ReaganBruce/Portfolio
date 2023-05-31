import React from "react";
import { useParams, Link } from "react-router-dom";

//Query Import
import {
  useProjectDetailsQuery,
  useRemoveProjectQuery,
} from "../services/queries";

//Component Imports
import IsLoading from "../components/status/IsLoading";
import IsError from "../components/status/IsError";
import BufferImage from "../components/BufferImage";

const ProjectDetails: React.FC<IProjectDetails> = () => {
  const { projectId } = useParams();
  const {
    data: projectDetails,
    isError,
    isLoading,
  } = useProjectDetailsQuery(projectId as string);

  const { mutate: removeProjectBody } = useRemoveProjectQuery(
    projectId as string
  );

  const handleDelete = (projectId: string) => {
    removeProjectBody(projectId)
  }

  if (isLoading) {
    return <IsLoading />;
  }
  
  if (isError) {
    return <IsError />;
  }


  return (
    <>
       <main key={projectDetails?.Project._id}>
          <div className="card-compact w-96 bg-base-100 shadow-xl p-6 ml-5 mt-5">
            <div className="card-body">
              <h1 className="card-title justify-center">
                {projectDetails?.Project.projectName}
              </h1>
              <BufferImage
                imageSrc={projectDetails?.Project.projectImg.data as Buffer}
              />
              <button className="btn btn-secondary" onClick={() => handleDelete(projectDetails?.Project._id as string)}>Delete</button>
              <Link to={`/projects/`} className="card-actions justify-center">
                <button className="btn btn-primary">Go Back</button>
              </Link>
            </div>
          </div>
        </main>
    </>
  );
};

interface IProjectDetails {}

export default ProjectDetails;
