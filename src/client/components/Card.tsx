import React from "react";
import { Link } from "react-router-dom";

const Card: React.FC<ICard> = ({ projectData }) => {
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
                   <img src={`${project.projectImg}`} key={`project-image-${project._id}`}></img>
                  <Link
                    to={`/projects/${project._id}`}
                    className="card-actions justify-center"
                  >
                    <button className="btn btn-primary">Details</button>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        ))}
      </main>
    </>
  );
};

interface ICard {
  projectData: Array<{
    _id: string;
    projectName: string;
    projectDesc: string;
    projectImg: {
      data: Buffer;
    };
  }>;
}
export default Card;
