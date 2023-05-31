import React from "react";
import { Link } from "react-router-dom";

//Import BufferImage Component
import BufferImage from "./BufferImage";

const Card: React.FC<ICard> = ({ projectBody }) => {
  return (
    <>
      <main className="card-compact h-screen justify-center w-full flex flex-row flex-wrap text-center">
        {projectBody?.map((project) => (
          <div key={`project-id-${project.id}`}>
            <section className="col-4 p-3">
              <div className="card w-96 bg-base-100 shadow-xl p-6 ml-5">
                <div className="card-body">
                  <h1 className="card-title justify-center">
                    {project.projectName}
                  </h1>
                  <p>{project.projectDesc}</p>
                  <BufferImage imageSrc={project.projectImg as Buffer} />
                  <Link
                    to={`/projects/${project.id}`}
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
  projectBody: Array<{
    id: string;
    projectName: string;
    projectDesc: string;
    projectImg: Buffer;
  }>;
}
export default Card;
