import React, { ReactElement } from "react";

const Hero = ({ children, image, data }: HeroProps): ReactElement => {
  return (
    <>
    <main className="just-center">

      <div className="hero min-h-min bg-base-200 justify-center">
        <div className="hero-content flex-col lg:flex-row">
          <img src={`${image}`} className="max-w-sm rounded-lg shadow-2xl justify-center" />
          <div>
            <h1 className="text-5xl font-bold">{children}</h1>
            <p className="py-6">{data}</p>
          </div>
        </div>
      </div>
    </main>
    </>
  );
};

type HeroProps = {
  children: React.ReactNode;
  image?: string;
  data?: string;
};

export default Hero;
