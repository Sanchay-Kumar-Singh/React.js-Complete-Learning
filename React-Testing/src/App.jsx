import "./App.css";
import HelloWorld from "./components/helloWorld";

function App() {
  return (
    <div>
   <HelloWorld/>
    </div>
  );
}

export default App;


// What is Testing?
// Interview Definition

// Testing is the process of verifying that an application works as expected and continues to work correctly after changes are made.

// Types of Testing

// There are three main types.

// Testing
// │
// ├── Unit Testing
// ├── Integration Testing
// └── End-to-End Testing

// 1. Unit Testing ⭐⭐⭐⭐⭐

// Tests one small piece.

// Example

// Button

// Counter

// Function

// Component

// Only one thing.

// Example

// Counter

// Count : 0

// [ Increase ]

// Click button.

// Expected

// Count : 1

// That's Unit Testing.

// 2. Integration Testing

// Tests multiple components together.

// Example

// Navbar

// ↓

// Search

// ↓

// API

// ↓

// Product List

// All connected.

// 3. End-to-End Testing (E2E)

// Tests the entire application.

// Example

// Login

// ↓

// Search Product

// ↓

// Add to Cart

// ↓

// Checkout

// ↓

// Payment

// ↓

// Order Success

// Everything.

// Usually done using

// Cypress
// Playwright
// Selenium



// React Testing Library
// Definition

// React Testing Library is a library used to test React components by interacting with them the same way a real user would.

// Notice

// It does NOT test implementation details.

// It tests what users actually see.

// Example

// User sees

// Login Button

// RTL checks

// Does Login Button exist?

// Not

// Is useState called?
// Jest
// Definition

// Jest is a JavaScript testing framework used to run tests, make assertions, and report test results.

// Think of Jest as

// Test Runner

// It runs your tests.

// Relationship
// Jest
// │
// ├── Runs tests
// ├── Assertions
// ├── Mocking
// └── Reports

// React Testing Library

// Tests React Components

// Together

// React Component

// ↓

// React Testing Library

// ↓

// Jest

// ↓

// PASS / FAIL
// Installation
// npm install --save-dev jest
// npm install --save-dev @testing-library/react
// npm install --save-dev @testing-library/jest-dom
// Your First Component

// Counter.jsx

// import { useState } from "react";

// function Counter() {

//     const [count,setCount]=useState(0);

//     return(
//         <>
//             <h1>{count}</h1>

//             <button onClick={()=>setCount(count+1)}>
//                 Increase
//             </button>
//         </>
//     );
// }

// export default Counter;
// Counter.test.jsx
// import { render, screen } from "@testing-library/react";
// import Counter from "./Counter";

// test("renders counter", () => {

//     render(<Counter />);

//     expect(
//         screen.getByText("Increase")
//     ).toBeInTheDocument();

// });

// Meaning

// Render Component

// ↓

// Find Button

// ↓

// Exists?

// ↓

// PASS



// render()

// Definition

// render() renders a React component into a virtual DOM for testing.

// Example

// render(<Counter />);
// screen

// Definition

// screen is used to query elements rendered into the virtual DOM.

// Example

// screen.getByText("Increase");

// Finds

// Increase
// expect()

// Definition

// expect() is used to define what result is expected in a test.

// Example

// expect(button).toBeInTheDocument();

// Meaning

// Button should exist.
// Assertions

// Most common

// toBeInTheDocument()

// toHaveTextContent()

// toBeDisabled()

// toBeEnabled()

// toHaveValue()

// toBeChecked()
// Example
// <input value="John">

// Test

// expect(input).toHaveValue("John");
// fireEvent

// Suppose

// [ Increase ]

// Click

// fireEvent.click(button);

// Simulates user click.

// Complete Example

// import { render,screen,fireEvent } from "@testing-library/react";
// import Counter from "./Counter";

// test("increase count",()=>{

// render(<Counter/>);

// const btn=screen.getByText("Increase");

// fireEvent.click(btn);

// expect(
// screen.getByText("1")
// ).toBeInTheDocument();

// });

// Flow

// Render

// ↓

// Find Button

// ↓

// Click

// ↓

// Count becomes 1

// ↓

// PASS
// userEvent

// Better than fireEvent.

// Instead of

// fireEvent.click()

// Use

// userEvent.click()

// Because

// It behaves more like a real user.

// Queries
// getByText()

// getByRole()

// getByPlaceholderText()

// getByLabelText()

// getByTestId()

// getByDisplayValue()

// Example

// screen.getByPlaceholderText("Enter Email");
// What Companies Test

// Usually

// ✅ Buttons

// ✅ Forms

// ✅ API loading

// ✅ Error Messages

// ✅ Login

// ✅ Search

// ✅ Cart

// ✅ Modal

// ✅ Navbar



// Testing

// ↓

// Unit Testing

// ↓

// Jest

// ↓

// React Testing Library

// ↓

// render()

// ↓

// screen

// ↓

// Queries

// ↓

// expect()

// ↓

// Assertions

// ↓

// fireEvent()

// ↓

// userEvent()

// ↓

// Mock API

// ↓

// Async Testing



