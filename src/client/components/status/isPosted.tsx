import React, { useState } from "react";

const IsPosted: React.FC<IisPosted> = ({ projectName, show }) => {
  if (!show) {
    return null;
  }

  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <form method="dialog" className="modal-box">
          <h3 className="font-bold text-lg">Success</h3>
          <p className="py-4">Project: {projectName} successfully created!</p>
        </form>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

interface IisPosted {
  projectName?: string;
  show: boolean;
}

export default IsPosted;
