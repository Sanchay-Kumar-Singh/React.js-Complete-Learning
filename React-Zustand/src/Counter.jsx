import useCounterStore from "./store/counterStore";

function Counter() {
  const count = useCounterStore((state) => state.count);

  const increase = useCounterStore((state) => state.increase);

  const decrease = useCounterStore((state) => state.decrease);

  const reset = useCounterStore((state) => state.reset);

  return (
    <div>
      <h1>Counter : {count}</h1>

      <button onClick={increase}>+</button>

      <button onClick={decrease}>-</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;