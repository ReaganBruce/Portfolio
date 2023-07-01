import React, { ReactElement } from "react";

const List = ({ stack, children }: ListPropsArray): ReactElement => {
  return (
    <>
      <section>
        <h2>{children}</h2>
        <div>
          {stack?.map((element: any, index: number) => (
            <li key={index}>{element}</li>
          ))}
        </div>
      </section>
    </>
  );
};

type ListPropsArray = {
  stack?: Array<ListProps> | string[] ;
  children: React.ReactNode;
};

type ListProps = {
  data: string;
};

export default List;
