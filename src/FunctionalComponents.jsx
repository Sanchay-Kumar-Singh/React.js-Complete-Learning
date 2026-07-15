import React from 'react'

const FunctionalComponents = () => {
  return (
    <div>FunctionalComponents</div>
  )
}

export default FunctionalComponents;

// function FunctionalComponents() {
//   return (
//     <div>
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// export default FunctionalComponents;

// Functional Component
// Interview Definition

// A Functional Component is a JavaScript function that accepts props as input and returns JSX to describe what should be displayed on the screen. Modern React development primarily uses functional components along with Hooks to manage state and lifecycle features.

// Explanation
// It is simply a JavaScript function.
// It returns JSX.
// It receives data through props.
// It can manage state using Hooks like useState.
// It can perform side effects using Hooks like useEffect.
// It is easier to read, write, and test.
// It is the recommended way to build React applications today.
// Example
// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

// export default Welcome;