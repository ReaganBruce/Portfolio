import React from "react";

const HomeView: React.FC<IHomeView> = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">HOME</h1>
      </div>
    </>
  );
};

interface IHomeView {}

export default HomeView;
