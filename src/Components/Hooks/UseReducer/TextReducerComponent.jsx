import React, { useReducer } from "react";

/* ---------- Initial State ---------- */
const initialState = {
  visible: true,
  color: "black",
};

/* ---------- Reducer Function ---------- */
const reducer = (state, action) => {
  switch (action.type) {
    case "SHOW_TEXT":
      return { ...state, visible: true };

    case "HIDE_TEXT":
      return { ...state, visible: false };

    case "CHANGE_COLOR":
      return {
        ...state,
        color: state.color === "black" ? "red" : "black",
      };

    default:
      return state;
  }
};

/* ---------- Component ---------- */
const TextReducerComponent = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      {/* Text */}
      {state.visible && (
        <h2 style={{ color: state.color }}>
          This is a sentence controlled by useReducer
        </h2>
      )}

      {/* Buttons */}
      <button onClick={() => dispatch({ type: "SHOW_TEXT" })}>
        Show Text
      </button>

      <button
        onClick={() => dispatch({ type: "HIDE_TEXT" })}
        style={{ marginLeft: "10px" }}
      >
        Hide Text
      </button>

      <button
        onClick={() => dispatch({ type: "CHANGE_COLOR" })}
        style={{ marginLeft: "10px" }}
      >
        Change Color
      </button>
    </div>
  );
};

export default TextReducerComponent;


// What is useReducer?
// Interview Definition

// useReducer is a built-in React Hook used to manage complex state logic in Functional Components. It updates the state by dispatching actions to a reducer function, which determines how the state should change.

// Why do we use useReducer?

// useState works well for simple state.

// Example:

// Counter
// Name
// Login
// Theme

// But when the state becomes complex, such as:

// Shopping Cart
// Todo App
// Banking System
// User Dashboard
// Multiple Forms

// useReducer makes the code easier to organize.


// Syntax

// const [state, dispatch] = useReducer(reducer, initialState);
// Syntax Breakdown
// 1. reducer
// reducer

// A function that decides how the state should change.

// 2. initialState
// 0

// The starting value.

// 3. state
// state

// The current state.

// 4. dispatch
// dispatch()

// Used to send an action to the reducer.

// Flow
// Button Click
//       │
//       ▼
// dispatch(action)
//       │
//       ▼
// Reducer Function
//       │
//       ▼
// New State
//       │
//       ▼
// React Re-renders UI
// Important Terms
// What is a Reducer?
// Interview Definition

// A reducer is a JavaScript function that receives the current state and an action, then returns the new state.

// Syntax

// function reducer(state, action) {

// }
// What is an Action?
// Interview Definition

// An action is an object that describes what change should happen to the state.

// Example

// {
//   type: "INCREMENT"
// }
// What is Dispatch?
// Interview Definition

// dispatch() is a function returned by useReducer that sends an action to the reducer to update the state.

// Example

// dispatch({
//   type: "INCREMENT"
// });

// Flow
// Button Click
//       │
//       ▼
// dispatch(action)
//       │
//       ▼
// Reducer Function
//       │
//       ▼
// New State
//       │
//       ▼
// React Re-renders UI