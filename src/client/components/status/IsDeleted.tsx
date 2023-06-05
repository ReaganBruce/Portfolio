import React from "react";
import ReactDOM from "react-dom";

const IsDeleted: React.FC<IIsDeleted> = ({ projectName, showModal }) => {
  const modalRoot = document.getElementById("modal-root")!;

  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            Project: {projectName} has successfully been deleted!
          </h1>
        </div>
      </div>
    </>,
    modalRoot
  );
};

interface IIsDeleted {
  projectName: string;
  showModal: boolean;
}

export default IsDeleted;
