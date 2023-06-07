import React, { ReactElement } from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

const Card = ({ projectData }: ProjectCardProps): ReactElement => {
  return (
    <>
      <main className="card-compact h-screen justify-center w-full flex flex-row flex-wrap text-center">
        {projectData?.map((project) => (
          <div key={`project-id-${project._id}`}>
            <section className="col-4 p-3">
              <div className="card w-96 bg-base-100 shadow-xl p-6 ml-5">
                <div className="card-body">
                  <h1 className="card-title justify-center">
                    {project.projectName}
                  </h1>
                  <p>{project.projectDesc}</p>
                  <img src={`${project.projectImg}`}></img>
                  <Link
                    to={`/projects/${project._id}`}
                    className="card-actions justify-center"
                  >
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
                <span className="card-actions pr-10 mt-3">
                  Created:
                  <Moment format="DD/MM/YYYY">{project.createdAt}</Moment>
                </span>
              </div>
            </section>
          </div>
        ))}
      </main>
    </>
  );
};

type ProjectCardProps = {
  projectData?: Array<ProjectCardBody>;
};

type ProjectCardBody = {
  _id: string;
  createdAt: string;
  projectName: string;
  projectDesc: string;
  projectImg: string;
};
export default Card;
