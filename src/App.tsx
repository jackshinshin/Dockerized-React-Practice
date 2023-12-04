import GoalInput from "./components/gadgets/GoalInput";
import GoalList from "./components/gadgets/GoalList";

export type dataType = {
  id: number;
  text: string;
}[];

const fakeData: dataType = [];

function App() {
  return (
    <div className="flex flex-col gap-2">
      <GoalInput />
      <GoalList goals={fakeData} />
    </div>
  );
}

export default App;
