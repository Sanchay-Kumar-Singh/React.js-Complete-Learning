import React, { useEffect, useState } from 'react'

const UseEffect = () => {
const [users,setUsers]=useState([]);

 useEffect(()=>{
    fetch("https://dummyjson.com/users")
    .then((res)=>res.json())
    .then((data)=>{
        console.log("Api Called");
        setUsers(data.users)
    })
 })

  return (
     <div>
      <h1>Users</h1>

      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  )
}

export default UseEffect;


// What is useEffect?
// Interview Definition

// useEffect is a built-in React Hook that allows Functional Components to perform side effects such as API calls, data fetching, timers, event listeners, subscriptions, and DOM manipulation after the component has rendered.

// Simple Definition

// useEffect is used to perform tasks after a component renders.

// Why do we use useEffect?

// React components should mainly display the UI.

// But sometimes we need to perform other tasks like:

// Fetch data from an API
// Start a timer
// Listen to window resize
// Access Local Storage
// Update the document title
// Add or remove event listeners

// These tasks are called Side Effects.

// That's why React provides useEffect.

// What is a Side Effect?

// A side effect is any operation that affects something outside the component or doesn't directly return JSX.

// Examples:

// ✅ API Calls

// fetch("https://api.example.com/users");

// ✅ Timer

// setInterval(() => {}, 1000);

// ✅ Local Storage

// localStorage.setItem("theme", "dark");

// ✅ Document Title

// document.title = "React App";

// ✅ Event Listener

// window.addEventListener("resize", handleResize);

// All of these are side effects.

// Syntax
// useEffect(() => {

// }, []);
// Syntax Breakdown
// useEffect(() => {

// }, []);
// First Argument
// () => {

// }

// This is a callback function.

// The code inside it executes after the component renders.

// Second Argument
// []

// This is called the Dependency Array.

// It tells React when to execute the effect.

// This is the most important part of useEffect.

// Interview Points
// useEffect is a built-in React Hook.
// It is used only in Functional Components.
// It performs side effects.


// useEffect is a built-in React Hook used to perform side effects in Functional Components. It executes code after the component renders and is commonly used for API calls, data fetching, timers, event listeners, local storage, and subscriptions. It also replaces lifecycle methods such as componentDidMount, componentDidUpdate, and componentWillUnmount in Class Components.

// Before writing any code, understand one important thing:

// There are three ways to use useEffect, and these are the most frequently asked in interviews.

// // 1. Runs after every render
// useEffect(() => {

// });
// // 2. Runs only once (when the component mounts)
// useEffect(() => {

// }, []);
// // 3. Runs when a specific state or prop changes
// useEffect(() => {

// }, [count]);

// These three patterns are the foundation of useEffect. Once you understand them, you'll be able to use it confidently for API calls, timers, event listeners, and other real-world tasks.


// Where is useEffect used?
// API Calls
// Fetching Data
// Timers
// Event Listeners
// Local Storage
// Authentication Check
// Document Title
// Window Resize
// WebSocket Connections



// | `useEffect` Syntax              | When It Runs                | API Use Case                                                |
// | ------------------------------- | --------------------------- | ----------------------------------------------------------- |
// | `useEffect(() => {})`           | After every render          | ❌ Avoid for API calls (can cause infinite loops)            |
// | `useEffect(() => {}, [])`       | Only after the first render | ✅ Fetch initial data when the page loads                    |
// | `useEffect(() => {}, [search])` | Whenever `search` changes   | ✅ Search, filters, pagination, sorting, dependent API calls |





// 1---> Flow


// Render
//    ↓
// API Call
//    ↓
// setUsers()
//    ↓
// Render Again
//    ↓
// API Call Again
//    ↓
// setUsers()
//    ↓
// Render Again
//    ↓
// ∞ Infinite Loop



// 2--->  Flow


// Component Loads
//       ↓
// API Called
//       ↓
// Data Received
//       ↓
// setUsers()
//       ↓
// Component Re-renders
//       ↓
// API NOT Called Again ✅



// 3---> Flow

// Initially

// search = ""

// API

// https://dummyjson.com/users/search?q=

// User types

// J

// API

// https://dummyjson.com/users/search?q=J

// User types

// Jo

// API

// https://dummyjson.com/users/search?q=Jo

// User types

// John

// API

// https://dummyjson.com/users/search?q=John

// Every time the search state changes, the useEffect runs again because search is in the dependency array.