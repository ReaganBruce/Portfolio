import React, { ReactElement } from "react";


const InterestsView = (props: InterestsViewProps): ReactElement => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">INTERESTS</h1>
      </div>
    </>
  );
};

type InterestsViewProps =  {}

export default InterestsView;
