import { useState, useCallback } from "react";
import Child from "./Child";

function App() {

  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Parent
      </button>

      <Child increase={increase} />

    </div>
  );
}

export default App;


// import { useState } from "react";
// import Child from "./Child";

// function App() {

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     console.log("Clicked");
//   };

//   return (
//     <div>

//       <h1>{count}</h1>

//       <button onClick={() => setCount(count + 1)}>
//         Parent
//       </button>

//       <Child increase={increase} />

//     </div>
//   );
// }

// export default App;


// What is useCallback?
// Interview Definition

// useCallback is a React Hook that memoizes a function and returns the same function reference unless its dependencies change.

// Simple Definition

// useCallback is used to prevent a function from being recreated on every component re-render.

// Syntax
// const memoizedFunction = useCallback(() => {
//   // function code
// }, [dependencies]);
// Why do we use useCallback?

// Let's first understand the problem.

// Example Without useCallback
// import { useState } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const increase = () => {
//     console.log("Increase");
//   };

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>
//         Count : {count}
//       </button>
//     </>
//   );
// }

// export default App;
// First Render

// React executes

// App()

// ↓

// count = 0

// ↓

// Create increase()

// Memory

// increase()

// Address = 100
// Click Button

// Now

// count = 1

// React renders again.

// App()

// ↓

// Create increase() AGAIN

// Memory

// Old Function

// Address = 100

// -------------------

// New Function

// Address = 200

// Although the code is identical, JavaScript creates a new function object every render.

// Why is that a problem?

// Suppose you have this:

// App

// │

// ├── Parent

// └── Child

// Parent passes

// <Child increase={increase} />

// Every render

// New Function

// ↓

// Child thinks

// "My prop changed."

// ↓

// Child Re-renders

// Even though the function logic didn't change.

// Now use useCallback
// const increase = useCallback(() => {
//   console.log("Increase");
// }, []);
// First Render

// React creates

// increase()

// Address = 100

// Stores it.

// Click Button

// Component renders again.

// React checks

// Dependency

// []

// Changed?

// No

// React returns

// Same Function

// Address = 100

// Instead of

// Address = 200

// So the child receives the same function reference.

// Visual Flow

// Without useCallback

// Render

// ↓

// Create Function

// ↓

// Render

// ↓

// Create Function

// ↓

// Render

// ↓

// Create Function

// With useCallback

// Render

// ↓

// Create Function

// ↓

// Render

// ↓

// Reuse Same Function

// ↓

// Render

// ↓

// Reuse Same Function