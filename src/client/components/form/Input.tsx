import React, { ReactElement } from "react";

const Input = ({ children, name, value, placeholder, change }: InputProps): ReactElement => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{children}</span>
          </label>
          <input
            name={name}
            value={value}
            type="text"
            placeholder={placeholder}
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
  children: React.ReactNode;
  name: string
  placeholder: string;
  value?: string | string[];
  change: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
};

export default Input;
