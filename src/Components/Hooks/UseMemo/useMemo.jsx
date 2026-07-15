import { useMemo, useState } from "react";

function useMemoHook() {

  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    console.log("Calculating...");
    return count * 100;
  }, [count]);

  return (
    <div>

      <h2>{result}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br /><br />

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

    </div>
  );
}

export default useMemoHook;



// What is useMemo?
// Interview Definition

// useMemo is a React Hook that memoizes (caches) the result of an expensive calculation and only recalculates it when its dependencies change.

// Simple Definition

// useMemo is used to improve performance by avoiding unnecessary calculations on every re-render.

// Why do we use useMemo?

// Normally, when a component re-renders:

// State changes ✅
// Parent re-renders ✅
// Props change ✅

// React runs all the code inside the component again, including expensive calculations.

// useMemo prevents unnecessary recalculations.

// Syntax
// const memoizedValue = useMemo(() => {
//   // Expensive Calculation
//   return result;
// }, [dependencies]);
// What does useMemo return?

// It returns the cached result of the function.

// const total = useMemo(() => {
//   return 100 + 200;
// }, []);

// Here,

// total = 300
// Why use useMemo?

// Suppose calculating something takes 2 seconds.

// Without useMemo:

// Component Re-render

// ↓

// Calculation Again

// ↓

// 2 seconds

// Even if the calculation doesn't need to change.

// With useMemo:

// Component Re-render

// ↓

// Uses Cached Value

// ↓

// Instant
// Real World Uses
// Large table filtering
// Searching thousands of records
// Sorting big arrays
// Expensive mathematical calculations
// Dashboard analytics
// Product filtering
// Chart data processing
// Example 1 (Without useMemo)
// import { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   function slowCalculation() {
//     console.log("Calculating...");
//     return count * 100;
//   }

//   return (
//     <div>

//       <h2>{slowCalculation()}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <br /><br />

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//     </div>
//   );
// }

// export default App;
// Problem

// Type inside the input.

// Console

// Calculating...
// Calculating...
// Calculating...
// Calculating...

// Even though count didn't change!

// Because the component re-rendered.

// Example 2 (With useMemo)
// import { useMemo, useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");

//   const result = useMemo(() => {
//     console.log("Calculating...");
//     return count * 100;
//   }, [count]);

//   return (
//     <div>

//       <h2>{result}</h2>

//       <button onClick={() => setCount(count + 1)}>
//         Increase
//       </button>

//       <br /><br />

//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//     </div>
//   );
// }

// export default App;
// Output

// Click Increase

// Console

// Calculating...

// Type inside input

// Console

// Nothing

// Why?

// Because only text changed.

// count didn't.

// React reused the cached value.

// Visual Flow

// Without useMemo

// Change Input

// ↓

// Component Re-render

// ↓

// Calculation Again ❌

// With useMemo

// Change Input

// ↓

// Component Re-render

// ↓

// Uses Cached Value ✅