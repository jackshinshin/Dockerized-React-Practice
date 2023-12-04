import React from "react";
import Card from "../layouts/Card";
import GoalItem from "./GoalItem";
import { dataType } from "../../App";

type GoalListProps = {
  goals: dataType;
};

const GoalList: React.FC<GoalListProps> = (props) => {
  const noGoals = !props.goals || props.goals.length === 0;
  console.log(noGoals);

  return (
    <section>
      <Card>
        {noGoals && (
          <h2 className="text-important font-important text-center">
            No goals found! Try adding some goals
          </h2>
        )}
        <ul className="flex flex-col gap-2">
          {props.goals.map((g) => {
            return <GoalItem key={g.id} text={g.text} />;
          })}
        </ul>
      </Card>
    </section>
  );
};
export default GoalList;
