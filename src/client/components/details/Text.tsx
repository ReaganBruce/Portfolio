import React, { ReactElement } from "react";

const Text = ({ children, data }: TextProps): ReactElement => {
  return (
    <>
      <main className="card-normal justify-center flex text-center">
        <div className="w-140 bg-base-100 shadow-xl">
          <div className="card-body justify-center">
            <h2 className="card-title justify-center">{children}</h2>
            <p className="text-left">{data}</p>
          </div>
        </div>
      </main>
    </>
  );
};

type TextProps = {
  children: React.ReactNode;
  data?: string;
};

export default Text;
