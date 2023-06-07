import React, { ReactElement } from "react";

const HomeView = (props: HomeViewProps): ReactElement => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">HOME</h1>
      </div>
    </>
  );
};

type HomeViewProps = {}

export default HomeView;
