import React, { ReactElement } from "react";

const FileUpload = ({ children, value, name, change }: FileUploadProps): ReactElement => {
  return (
    <>
      <section className="flex justify-center items-center pt-10">
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">{children}</span>
          </label>
          <input
            value={value}
            name={name}
            type="file"
            className="file-input file-input-bordered file-input-accent w-full max-w-xs"
            onChange={change}
            required
          />
        </div>
      </section>
    </>
  );
};

type FileUploadProps = {
  children: React.ReactNode | any;
  value?: string | string[]
  name: string
  change: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export default FileUpload;
