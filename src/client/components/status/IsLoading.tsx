import React from "react";

const IsLoading: React.FC<IIsLoading> = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <div className="text-7xl text-center">
          <progress className="progress w-56"></progress>
        </div>
      </div>
    </>
  );
};

interface IIsLoading {}

export default IsLoading;
