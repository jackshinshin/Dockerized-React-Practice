import React, { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

const Card: React.FC<CardProps> = (props) => {
  return (
    <div className="mx-8 my-auto max-w-md rounded-xl bg-white p-4 shadow-card">
      {props.children}
    </div>
  );
};
export default Card;
