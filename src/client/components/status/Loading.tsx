import React, { ReactElement } from "react";

const IsLoading = (props: IsLoadingProps): ReactElement => {
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

type IsLoadingProps = {};

export default IsLoading;
