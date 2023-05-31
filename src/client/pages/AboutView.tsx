import React from "react";

const AboutView: React.FC<IAboutView> = () => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">ABOUT</h1>
      </div>
    </>
  );
};

interface IAboutView {}

export default AboutView;
