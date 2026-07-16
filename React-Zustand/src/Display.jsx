import useCounterStore from "./store/counterStore";

function Display() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h2>Display Component</h2>

      <h1>{count}</h1>
    </div>
  );
}

export default Display;