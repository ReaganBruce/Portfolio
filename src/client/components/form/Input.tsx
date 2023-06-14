import React, { ReactElement } from "react";

const Input = ({ children, value, change }: InputProps): ReactElement => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{children}</span>
          </label>
          <input
            value={value}
            type="text"
            placeholder={children.slice(8).toLowerCase() + "...."}
            className="input input-bordered w-full max-w-xs"
            onChange={change}
            required
          />
        </div>
      </section>
    </>
  );
};

type InputProps = {
  children: React.ReactNode | any;
  value: string;
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default Input;
