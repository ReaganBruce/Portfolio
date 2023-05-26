import React, { useState } from "react";

//Query Imports
import { useCreateProject } from "../services/queries";

const Admin: React.FC<IAdmin> = () => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Project Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </section>

      <section className="flex justify-center items-center pt-10">
        <input
          type="file"
          className="file-input file-input-bordered file-input-accent w-full max-w-xs"
        />
      </section>

      <section className="flex justify-center items-center pt-10">
      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Project Description</span>
        </label>
        <textarea
          placeholder="Desc"
          className="textarea textarea-bordered textarea-lg w-full max-w-xs"
        ></textarea>
        </div>
      </section>
    </>
  );
};

interface IAdmin {}

export default Admin;
