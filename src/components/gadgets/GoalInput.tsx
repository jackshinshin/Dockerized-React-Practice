import React, { useState } from "react";
import Card from "../layouts/Card";

type GoalInputProps = {};

const GoalInput: React.FC<GoalInputProps> = () => {
  const [entered, setEntered] = useState("");

  const updateEnteredText: React.ChangeEventHandler = (e) => {
    setEntered((e.target as HTMLInputElement).value);
  };
  const checkBeforeSubmission: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (entered.trim().length === 0) {
      alert("Invalid text - please enter a longer one");
      return;
    }

    // Send the text to database api
  };
  return (
    <section>
      <Card>
        <form
          onSubmit={checkBeforeSubmission}
          className="text-important text-center"
        >
          <label
            htmlFor="text"
            className="text-important inline text-lg font-black"
          >
            New Goal
          </label>
          <input
            type="text"
            id="text"
            value={entered}
            onChange={updateEnteredText}
            className="mx-4 mb-2 h-12 w-3/4 rounded-full border border-slate-400 px-1 text-center"
          ></input>
          <button className="rounded-full border border-sky-900 bg-slate-500 text-white hover:bg-slate-800">
            Add Goal
          </button>
        </form>
      </Card>
    </section>
  );
};
export default GoalInput;
