import React, { ReactElement } from "react";

const Form = ({
  projectName,
  projectDesc,
  projectGithub,
  submitProjectName,
  submitProjectDesc,
  submitProjectGithub,
  submitProjectImg,
  submitProject,
}: FormProps): ReactElement => {
  return (
    <>
      <form>
        <section className="flex justify-center items-center pt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Project Name</span>
            </label>
            <input
              value={projectName}
              type="text"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
              onChange={submitProjectName}
            />
          </div>
        </section>
        <section className="flex justify-center items-center pt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Project Image</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              onChange={submitProjectImg}
            />
          </div>
        </section>
        <section className="flex justify-center items-center pt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Project Description</span>
            </label>
            <textarea
              value={projectDesc}
              placeholder="Desc"
              className="textarea textarea-bordered textarea-lg w-full max-w-xs"
              onChange={submitProjectDesc}
            ></textarea>
          </div>
        </section>
        <section className="flex justify-center items-center pt-10">
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Github Link</span>
            </label>
            <input
              value={projectGithub}
              type="text"
              placeholder="Github Link"
              className="input input-bordered w-full max-w-xs"
              onChange={submitProjectGithub}
            />
              <button className="btn btn-primary mt-8" onClick={submitProject}>
              Create Test Project
            </button>
          </div>
        </section>
      </form>
    </>
  );
};

type FormProps = {
  projectName: string;
  projectDesc: string;
  projectGithub: string;
  submitProjectName: React.ChangeEventHandler;
  submitProjectDesc: React.ChangeEventHandler;
  submitProjectGithub: React.ChangeEventHandler;
  submitProjectImg: React.ChangeEventHandler;
  submitProject: React.MouseEventHandler;
};

export default Form;
