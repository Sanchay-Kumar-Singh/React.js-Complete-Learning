import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Runs only if validation passes
  const onSubmit = (data) => {
    alert("Login Successful!");

    console.log(data);
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid gray",
        borderRadius: "10px",
      }}
    >
      <h2>React Hook Form Login</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email */}

        <label>Email</label>

        <br />

        <input
          type="email"
          placeholder="Enter Email"
          {...register("email", {
            required: "Email is required",

            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid Email",
            },
          })}
        />

        <br />

        {errors.email && (
          <p style={{ color: "red" }}>
            {errors.email.message}
          </p>
        )}

        <br />

        {/* Password */}

        <label>Password</label>

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          {...register("password", {
            required: "Password is required",

            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />

        <br />

        {errors.password && (
          <p style={{ color: "red" }}>
            {errors.password.message}
          </p>
        )}

        <br />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default App;


// What is React Hook Form?
// Interview Definition

// React Hook Form is a lightweight third-party library for managing forms in React. It simplifies form handling, validation, and submission while improving performance by minimizing unnecessary re-renders.

// Simple Definition

// React Hook Form is a library that makes creating and validating forms in React easier and faster.

// Is React Hook Form a React Hook?

// ❌ No

// It is not a built-in React Hook like useState or useEffect.

// It is a third-party library.

// Install it using:

// npm install react-hook-form

// Without React Hook Form

// For every input:

// const [name, setName] = useState("");

// <input
//   value={name}
//   onChange={(e) => setName(e.target.value)}
// />

// If you have 20 fields, you'll often end up with many state variables or a large state object and lots of handlers.

// With React Hook Form
// const { register } = useForm();

// <input {...register("name")} />

// No need to manually connect value and onChange for each field.

// Why is React Hook Form Popular?
// Less code
// Easy validation
// Better performance
// Fewer unnecessary re-renders
// Cleaner code
// Easy integration with UI libraries like Material UI, Ant Design, and Chakra UI
// Main Features
// Form Handling
// Form Validation
// Error Handling
// Form Submission
// Reset Form
// Default Values
// Custom Validation
// Nested Forms
// Dynamic Forms


// Where is React Hook Form Used?
// Login Forms
// Registration Forms
// Contact Forms
// Job Application Forms
// Student Registration
// Payment Forms
// Survey Forms
// Admin Dashboards
// Profile Update Forms
// E-commerce Checkout
// Advantages
// Less boilerplate code
// High performance
// Easy validation
// Easy error handling
// Easy form reset
// Supports complex and dynamic forms
// Integrates well with other libraries


// | Function           | Purpose                          |
// | ------------------ | -------------------------------- |
// | `useForm()`        | Creates and manages the form     |
// | `register()`       | Registers an input field         |
// | `handleSubmit()`   | Handles form submission          |
// | `formState.errors` | Stores validation errors         |
// | `reset()`          | Resets the form                  |
// | `watch()`          | Watches field values             |
// | `setValue()`       | Updates a field programmatically |
// | `getValues()`      | Gets current form values         |


// How it Works
// User Types
//       │
//       ▼
// register() stores values
//       │
//       ▼
// User Clicks Submit
//       │
//       ▼
// handleSubmit()
//       │
//       ▼
// Validation Runs
//       │
//  ┌────┴────┐
//  │         │
//  ▼         ▼
// Valid     Invalid
//  │         │
//  ▼         ▼
// onSubmit   Show Errors