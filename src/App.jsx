import React from 'react'
import UseEffect from './UseEffect'



const App = () => {
  return (
    <div>
      <UseEffect/>

    </div>
  )
}

export default App



// 1. What is React?
// Interview Definition

// React is an open-source JavaScript library developed by Meta (Facebook) for building fast, interactive, and reusable user interfaces, especially for Single Page Applications (SPAs). It uses a component-based architecture and a Virtual DOM to efficiently update the UI.

// Simple Definition

// React is a JavaScript library used to build user interfaces by dividing them into reusable components.

// Keywords to Remember
// JavaScript Library
// Developed by Meta
// Component-Based
// Reusable UI
// Virtual DOM
// Single Page Application (SPA)
// 2. What is a Component?
// Interview Definition

// A component is an independent, reusable building block of a React application that returns JSX to display a part of the user interface. Each component can have its own state, props, and logic.

// Simple Definition

// A component is a reusable piece of UI.

// Example:

// App
// ├── Navbar
// ├── Sidebar
// ├── Product
// └── Footer

// Each part is a component.

// Keywords
// Reusable
// Independent
// Returns JSX
// Own Logic
// Own State
// Own Props
// 3. What is Parent and Child Component?
// Interview Definition

// A parent component is the component that renders another component, while the rendered component is called the child component. Data is usually passed from the parent to the child using props.

// Example

// function App() {
//   return <Navbar />;
// }

// Here

// App
//   │
//   ▼
// Navbar
// App = Parent
// Navbar = Child
// Keywords
// Parent renders Child
// Data flows using Props
// One-Way Data Flow
// 4. What is a Class Component?
// Interview Definition

// A Class Component is a React component created using an ES6 class that extends React.Component. It can manage state, receive props, and use lifecycle methods through the render() method.

// Example

// class App extends React.Component {
//   render() {
//     return <h1>Hello</h1>;
//   }
// }
// Keywords
// ES6 Class
// extends React.Component
// render()
// State
// Props
// Lifecycle Methods
// 5. What is State?
// Interview Definition

// State is an object that stores dynamic data of a component. When the state changes, React automatically re-renders the component to reflect the updated data.

// Simple Definition

// State is the component's own data that can change over time.

// Example

// this.state = {
//   count: 0
// };
// Examples of State
// Counter
// Login Status
// Theme
// Shopping Cart
// User Information
// Keywords
// Dynamic Data
// Component Memory
// Re-render
// Mutable
// 6. What is setState()?
// Interview Definition

// setState() is a method in React Class Components used to update the component's state. When setState() is called, React schedules a re-render and updates the UI with the new state.

// Example

// this.setState({
//   count: this.state.count + 1
// });
// Important Interview Point

// Never update state directly.

// ❌ Wrong

// this.state.count = 10;

// ✅ Correct

// this.setState({
//   count: 10
// });
// Keywords
// Updates State
// Triggers Re-render
// Asynchronous
// Never modify state directly
// 7. What is Lifecycle?
// Interview Definition

// The React component lifecycle is the sequence of phases a class component goes through from creation to updating and finally removal from the DOM. React provides lifecycle methods to execute code during each phase.

// Simple Definition

// Lifecycle describes the complete life of a React component.

// Three Phases
// Mounting
// Updating
// Unmounting
// 8. What are Lifecycle Methods?
// Interview Definition

// Lifecycle methods are built-in methods available in React Class Components that allow developers to execute code at different stages of a component's lifecycle, such as mounting, updating, and unmounting.

// Keywords
// Built-in Methods
// Mounting
// Updating
// Unmounting
// Execute Code
// 9. Mounting Phase
// Interview Definition

// Mounting is the phase in which a component is created and inserted into the DOM for the first time.

// Methods

// constructor()

// ↓

// render()

// ↓

// componentDidMount()
// 10. Updating Phase
// Interview Definition

// Updating is the phase that occurs whenever a component's state or props change. React re-renders the component and executes update lifecycle methods.

// Methods

// render()

// ↓

// componentDidUpdate()
// 11. Unmounting Phase
// Interview Definition

// Unmounting is the phase in which a component is removed from the DOM. Before removal, React executes the componentWillUnmount() method for cleanup.

// Method

// componentWillUnmount()
// 12. What is render()?
// Interview Definition

// The render() method is a required method in every React Class Component. It returns JSX, which React uses to display the user interface. Whenever state or props change, the render() method executes again to update the UI.

// 13. What is constructor()?
// Interview Definition

// The constructor() is a special JavaScript method that is executed when a class component is created. It is commonly used to initialize state and perform initial setup.

// 14. What is componentDidMount()?
// Interview Definition

// componentDidMount() is a lifecycle method that executes once after the component has been rendered and added to the DOM. It is commonly used for API calls, event listeners, and timers.

// 15. What is componentDidUpdate()?
// Interview Definition

// componentDidUpdate() is a lifecycle method that executes after every update caused by changes in state or props. It is commonly used to perform actions based on updated data while avoiding unnecessary updates.

// 16. What is componentWillUnmount()?
// Interview Definition

// componentWillUnmount() is a lifecycle method that executes just before a component is removed from the DOM. It is used to clean up resources such as timers, event listeners, or subscriptions.

// Interview Cheat Sheet (Memorize)
// Question	One-Line Answer
// What is React?	A JavaScript library for building reusable user interfaces using components.
// What is a Component?	A reusable and independent piece of UI that returns JSX.
// Parent Component	The component that renders another component.
// Child Component	The component rendered by a parent component.
// What is a Class Component?	An ES6 class that extends React.Component and uses render(), state, props, and lifecycle methods.
// What is State?	An object that stores dynamic data and triggers a re-render when updated.
// What is setState()?	A method used to update state and trigger a re-render in class components.
// What is Lifecycle?	The sequence of phases a component goes through: mounting, updating, and unmounting.
// Mounting	Component is created and added to the DOM.
// Updating	Component re-renders when state or props change.
// Unmounting	Component is removed from the DOM.
// render()	Returns JSX to display the UI.
// componentDidMount()	Runs once after the component is added to the DOM.
// componentDidUpdate()	Runs after state or props change.
// componentWillUnmount()	Runs before the component is removed from the DOM for cleanup.