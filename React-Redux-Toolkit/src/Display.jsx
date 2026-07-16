import { useSelector } from "react-redux";

function Display() {

  const count = useSelector((state) => state.counter.count);

  return (
    <div>

      <h2>Display Component</h2>

      <h1>{count}</h1>

    </div>
  );
}

export default Display;