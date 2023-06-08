import React, { ReactElement, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

//Query Import
import {
  useProjectDetailsQuery,
  useRemoveProjectQuery,
} from "../services/queries";

//Component Imports
import IsLoading from "../components/status/IsLoading";
import IsError from "../components/status/IsError";
import IsDeleted from "../components/status/IsDeleted";

const ProjectDetails = (props: ProjectDetailsProps): ReactElement => {
  const [modal, setShowModal] = useState(false);

  const navigate = useNavigate();
  const { projectId } = useParams();
  const { data, error, isError, isLoading } = useProjectDetailsQuery(projectId);

  const { mutate: removeProjectBody } = useRemoveProjectQuery();

  const handleDelete = (projectId?: string) => {
    removeProjectBody(projectId as string);
    setShowModal(true);
    setTimeout(() => {
      navigate(-1);
    }, 1500);
  };

  if (isLoading) {
    return <IsLoading />;
  }

  if (isError) {
    return <IsError message={error.message} />;
  }

  return (
    <>
      <main key={`project-key-${data?.details._id}`}>
        <div className="card-compact w-96 bg-base-100 shadow-xl p-6 ml-5 mt-5">
          <div className="card-body">
            <h1 className="card-title justify-center">
              {data?.details.projectName}
            </h1>
            <img src={`${data?.details.projectImg}`}></img>
            <button
              className="btn btn-secondary"
              onClick={() => handleDelete(data?.details._id)}
            >
              Delete
            </button>
            <IsDeleted
              projectName={data?.details.projectName}
              showModal={modal}
            />
            <a className="link link-success" href={data?.details.github}>
              Github
            </a>
            <Link to={`/projects/`} className="card-actions justify-center">
              <button className="btn btn-primary">Go Back</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

type ProjectDetailsProps = {};

export default ProjectDetails;
