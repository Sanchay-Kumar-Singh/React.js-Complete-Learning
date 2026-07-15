import { useState } from "react";

function FormHandling() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`
Name: ${name}
Email: ${email}
    `);

    setName("");
    setEmail("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Student Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <br />

        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <br />

        <button type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default FormHandling;



// What is React Form Handling?
// Interview Definition

// React Form Handling is the process of capturing, managing, validating, and submitting user input using React state and event handlers. React typically uses Controlled Components, where the form data is managed by the component's state.


// Why do we use Form Handling?

// Almost every application contains forms.

// Examples:

// Login Form
// Registration Form
// Contact Form
// Student Form
// Job Application Form
// Payment Form
// Feedback Form

// React provides a way to store and control the values entered by the user.

// What is a Form?

// A form is a collection of input fields used to collect information from users.

// Example:

// --------------------------
// Name     : ____________

// Email    : ____________

// Password : ____________

// [ Submit ]
// --------------------------





// What is a Controlled Component?

// Interview Definition

// A Controlled Component is a form element whose value is controlled by React state using the useState Hook. The displayed value always comes from the component's state.

// Example

// <input
//   value={name}
//   onChange={(e) => setName(e.target.value)}
// />

// Here,

// value={name} → React controls the input value.
// onChange → Updates the state whenever the user types.


// What is an Uncontrolled Component?

// Interview Definition

// An Uncontrolled Component is a form element that manages its own state using the DOM. React accesses its value using a ref instead of React state.

// Example

// const inputRef = useRef();

// <input ref={inputRef} />
// Controlled vs Uncontrolled Components
// Controlled	Uncontrolled
// Uses useState	Uses useRef
// React controls the value	DOM controls the value
// Easier validation	Less React control
// Preferred in React	Used in specific cases




// Flow

// Component Loads
//         │
//         ▼
// name = ""
// email = ""
//         │
//         ▼
// User Types
//         │
//         ▼
// onChange Event
//         │
//         ▼
// useState Updates
//         │
//         ▼
// UI Re-renders
//         │
//         ▼
// User Clicks Register
//         │
//         ▼
// onSubmit Executes
//         │
//         ▼
// Data Processed / Sent to Server



// Relationship Between State and Event Handler

// Think of it like this:

// User Action
//      │
//      ▼
// Event Handler Executes
//      │
//      ▼
// State Updates
//      │
//      ▼
// React Re-renders
//      │
//      ▼
// Updated UI

// Interview Questions
// What is State?

// State is a built-in React feature used to store dynamic data in a component. When the state changes, React automatically updates the UI by re-rendering the component.

// What is an Event Handler?

// An Event Handler is a JavaScript function that executes in response to a user interaction or browser event, such as clicking a button, typing in an input, or submitting a form.