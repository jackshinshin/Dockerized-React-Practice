import React from "react";

type GoalItemProps = {
  text: string;
};

const GoalItem: React.FC<GoalItemProps> = (props) => {
  return (
    <li className=" mx-4 my-0 cursor-pointer rounded-3xl border border-sky-900 bg-sky-500 p-4 text-center font-mono text-[1rem] font-bold">
      {props.text}
    </li>
  );
};
export default GoalItem;
