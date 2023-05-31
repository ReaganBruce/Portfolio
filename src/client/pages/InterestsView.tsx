import React from "react";


const InterestsView: React.FC<IInterestsView> = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">INTERESTS</h1>
      </div>
    </>
  );
};

interface IInterestsView {}

export default InterestsView;
