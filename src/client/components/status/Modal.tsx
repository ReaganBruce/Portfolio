import React, { ReactElement } from "react";
import ReactDOM from "react-dom";


const Modal = ({
  children,
  link,
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
          {link}
        </div>
      </div>
    </>,
    modalRoot
  );
};

type ModalProps = {
  children: React.ReactNode;
  link?: React.ReactNode;
  showModal: boolean;
};

export default Modal;
