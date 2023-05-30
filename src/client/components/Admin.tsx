import React, { useState } from "react";

//Query Imports
import { useCreateProject } from "../services/queries";

const Admin: React.FC<IAdmin> = () => {
  const [projectName, setProjectName] = useState('')
  const [projectImg, setProjectImg] = useState('')
  const [projectDesc, setProjectDesc] = useState('')

  const { mutate } = useCreateProject()





  const handleSubmitProject = () => {
    const data = {
      projectName,
      projectImg,
      projectDesc
    }

  }


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
            onChange={(e) => setProjectName(e.target.value)}
            />
        </div>
      </section>

      <section className="flex justify-center items-center pt-10">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Project Image</span>
        </label>
        <input
          value={projectImg}
          type="file"
          className="file-input file-input-bordered file-input-accent w-full max-w-xs"
          onChange={e => setProjectImg(e.target.value)}
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
          onChange={(e) => setProjectDesc(e.target.value)}
          ></textarea>
        </div>
      </section>

      <button onClick={handleSubmitProject}>Create Test Project</button>
          </form>
    </>
  );
};

interface IAdmin {}

export default Admin;
