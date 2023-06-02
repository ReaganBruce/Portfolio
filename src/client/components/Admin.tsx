import React, { useState } from "react";

//Query Imports
import { useCreateProjectQuery } from "../services/queries";

const Admin: React.FC<IAdmin> = () => {
  const [projectName, setProjectName] = useState("");
  const [projectImg, setProjectImg] = useState<File | null>(null);
  const [projectDesc, setProjectDesc] = useState("");

  const { mutate: createNewProject } = useCreateProjectQuery();


  const handleSubmitProject = () => {
    const formData = new FormData();
    formData.append("projectFileUpload", projectImg as File); 
    formData.append("projectName", projectName);
    formData.append("projectDesc", projectDesc);

    //lazy typing ¯\_(ツ)_/¯ Will fix this eventually once I understand Typescript better lol
    createNewProject(formData as any);
  };

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
              type="file"
              className="file-input file-input-bordered file-input-accent w-full max-w-xs"
              onChange={(e) => setProjectImg(e.target.files && e.target.files[0])}
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

interface IAdmin {  }

export default Admin;
