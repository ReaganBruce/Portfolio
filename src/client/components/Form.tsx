import React, { ReactElement } from "react";

const Form = ({
  projectName,
  projectDesc,
  submitProjectName,
  submitProjectDesc,
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
  submitProjectName: React.ChangeEventHandler;
  submitProjectDesc: React.ChangeEventHandler;
  submitProjectImg?: React.ChangeEventHandler;
  submitProject: React.MouseEventHandler;
};

export default Form;
