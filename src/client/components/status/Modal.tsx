import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";

const Modal = ({
  children,
  showModal,
}: ModalProps): ReactElement | null => {
  const modalRoot = document.getElementById("modal-root")!;

  if (!showModal) {
    return null;
  }

  return ReactDOM.createPortal(
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="bg-white p-2 rounded w-72">
          <h1 className="font-semibold text-center text-xl text-gray-700">
            {children}
          </h1>
          <Link to={`/projects`} className="card-actions justify-center mt-7">
            <button className="btn btn-primary">View</button>
          </Link>
        </div>
      </div>
    </>,
    modalRoot
  );
};

type ModalProps = {
  children: React.ReactNode;
  showModal: boolean;
};

export default Modal;
