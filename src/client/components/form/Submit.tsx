import React, { ReactElement } from "react";

const Submit = ({ children, click }: SubmitProps): ReactElement => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <button className="btn btn-primary mt-2" onClick={click} type="button">
            {children}
          </button>
        </div>
      </section>
    </>
  );
};

type SubmitProps = {
    children: React.ReactNode;
    click: React.MouseEventHandler;
};

export default Submit;
