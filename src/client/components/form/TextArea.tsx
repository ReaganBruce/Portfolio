import React, { ReactElement } from "react";

const TextArea = ({ children, name, value, change }: TextAreaProps): ReactElement => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{children}</span>
          </label>
          <textarea
            name={name}
            value={value}
            placeholder={`${children.slice(8).toLowerCase()}....`}
            className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            onChange={change}
            required
          ></textarea>
        </div>
      </section>
    </>
  );
};

type TextAreaProps = {
  children: React.ReactNode | any;
  name: string
  value: string;
  change: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

export default TextArea;
