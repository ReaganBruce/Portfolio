import React from "react";
import { Buffer } from "buffer";

const BufferImage: React.FC<IBufferImage> = ({ imageSrc }) => {
  return (
    <>
      <img
        src={`data:image/png;base64,${Buffer.from(imageSrc).toString("base64")}`}
        alt="Project Image"
      />
    </>
  );
};

interface IBufferImage {
    imageSrc: Uint8Array
}

export default BufferImage;
