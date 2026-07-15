import { useRef } from "react";

function App() {

  const inputRef = useRef(null);

  const handleFocus = () => {
    inputRef.current.focus();
  };

  return (
    <div>

      <input
        ref={inputRef}
        placeholder="Enter Name"
      />

      <button onClick={handleFocus}>
        Focus Input
      </button>

    </div>
  );
}

export default App;

// import { useRef } from "react";

// function App() {

//   const countRef = useRef(0);

//   function increase() {
//     countRef.current++;
//     console.log(countRef.current);
//   }

//   return (
//     <button onClick={increase}>
//       Increase
//     </button>
//   );
// }

// export default App;


// import { useState, useRef } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const refCount = useRef(0);

//   return (

//     <div>

//       <h2>State : {count}</h2>

//       <h2>Ref : {refCount.current}</h2>

//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Increase State
//       </button>

//       <button
//         onClick={() => {
//           refCount.current++;
//           console.log(refCount.current);
//         }}
//       >
//         Increase Ref
//       </button>

//     </div>

//   );
// }

// export default App;


// What is useRef?
// Interview Definition

// useRef is a React Hook that creates a mutable reference object whose value persists across re-renders without causing the component to re-render when it changes.

// Simple Definition

// useRef is used to store a value or directly access a DOM element without re-rendering the component.

// Why do we use useRef?

// We use useRef for two main purposes:

// Access DOM elements directly
// Store values that should not trigger a re-render
// Syntax
// const myRef = useRef(initialValue);

// Example:

// const inputRef = useRef(null);

// const countRef = useRef(0);
// What does useRef() return?

// It returns an object like this:

// {
//    current: initialValue
// }

// Example:

// const inputRef = useRef(null);

// console.log(inputRef);

// Output

// {
//    current: null
// }
// Why .current?

// Suppose

// const countRef = useRef(10);

// Internally React creates

// {
//    current: 10
// }

// So we access it like

// countRef.current
// When do we use useRef?
// Focus an input
// Clear an input
// Play/Pause video
// Access image/video/audio elements
// Store previous values
// Store timer IDs
// Stop unnecessary re-renders
// Integrate third-party libraries (Charts, Maps)
// Example 1: Focus Input (Most Asked Interview Example)
// import { useRef } from "react";

// function App() {

//   const inputRef = useRef(null);

//   const handleFocus = () => {
//     inputRef.current.focus();
//   };

//   return (
//     <div>

//       <input
//         ref={inputRef}
//         placeholder="Enter Name"
//       />

//       <button onClick={handleFocus}>
//         Focus Input
//       </button>

//     </div>
//   );
// }

// export default App;
// Output

// Initially

// [___________]

// [ Focus Input ]

// Click

// Cursor automatically moves inside the input.
// Example 2: Count Without Re-render
// import { useRef } from "react";

// function App() {

//   const countRef = useRef(0);

//   function increase() {
//     countRef.current++;
//     console.log(countRef.current);
//   }

//   return (
//     <button onClick={increase}>
//       Increase
//     </button>
//   );
// }

// export default App;

// Every click

// 1
// 2
// 3
// 4

// Notice:

// Nothing changes on the screen because useRef does not trigger a re-render.

// Example 3: Compare useState vs useRef
// import { useState, useRef } from "react";

// function App() {

//   const [count, setCount] = useState(0);

//   const refCount = useRef(0);

//   return (

//     <div>

//       <h2>State : {count}</h2>

//       <h2>Ref : {refCount.current}</h2>

//       <button
//         onClick={() => setCount(count + 1)}
//       >
//         Increase State
//       </button>

//       <button
//         onClick={() => {
//           refCount.current++;
//           console.log(refCount.current);
//         }}
//       >
//         Increase Ref
//       </button>

//     </div>

//   );
// }

// export default App;
// Click Increase State
// State : 1

// Ref : 0

// The UI updates because state changed.

// Click Increase Ref

// Console

// 1
// 2
// 3

// The UI does not update because changing a ref doesn't re-render the component.

// Difference Between useState and useRef
// useState	useRef
// Stores state	Stores a mutable reference
// Causes re-render	Does not cause re-render
// Used for UI data	Used for DOM access or non-UI values
// Updates UI	Doesn't update UI automatically
// Real-World Applications
// Automatically focus the login email field.
// Focus the search bar when a page opens.
// Pause or play a video.
// Reset a form.
// Store a timer (setInterval/setTimeout) ID.
// Remember the previous value of a variable.
// Interview Questions
// What is useRef?

// useRef is a React Hook that stores a mutable value or references a DOM element without causing the component to re-render.

// Does changing a ref cause a re-render?

// No. Updating ref.current does not trigger a component re-render.

// Difference between useState and useRef?

// useState is used for values that affect the UI and triggers re-renders. useRef stores mutable values or DOM references and does not trigger re-renders.

// When should you use useRef?
// Access DOM elements
// Focus inputs
// Control videos or audio
// Store previous values
// Store timer IDs
// Avoid unnecessary re-renders
// Easy Way to Remember
// Need to update the UI?
//         │
//         ▼
//      useState

// -------------------------

// Need to access a DOM element?
//         │
//         ▼
//       useRef

// -------------------------

// Need to store a value without re-rendering?
//         │
//         ▼
//       useRef
// Interview One-Line Revision

// useRef is used to access DOM elements or store mutable values that persist across renders without causing the component to re-render.

// Next recommendation

// The best way to truly understand useRef is to build 3 small projects:

// Focus Input (DOM access)
// Stopwatch (store interval ID in a ref)
// Previous Search Tracker (store the previous input value using a ref)

// These three examples cover almost every practical use of useRef in React interviews.