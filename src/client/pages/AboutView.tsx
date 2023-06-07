import React, { ReactElement } from "react";

const AboutView = (props: AboutViewProps): ReactElement => {
  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-7xl text-center">ABOUT</h1>
      </div>
    </>
  );
};

type AboutViewProps = {}

export default AboutView;
