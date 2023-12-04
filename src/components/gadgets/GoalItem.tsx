import React from "react";

type GoalItemProps = {
  text: string;
};

const GoalItem: React.FC<GoalItemProps> = (props) => {
  return (
    <li
      className=" relative mx-4 my-0 inline-block cursor-pointer overflow-hidden rounded-3xl border border-sky-900 bg-sky-500 p-4 text-center font-mono text-[1rem] font-bold filter 
    transition
    duration-150
    ease-in-out
    hover:grayscale
    "
    >
      {props.text}
    </li>
  );
};
export default GoalItem;
