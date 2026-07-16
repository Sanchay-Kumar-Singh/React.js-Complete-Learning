import Counter from "./Counter";
import Display from "./Display";

function App() {
  return (
    <div>
      <Counter />
      <hr />
      <Display />
    </div>
  );
}

export default App;




// What is Zustand?
// Interview Definition

// Zustand is a lightweight state management library for React that allows multiple components to share and manage global state without the complexity of Redux

// Simple Definition

// Zustand is a library used to manage global state in React applications.

// Why do we need Zustand?

// Suppose you have these components:

// App
// │
// ├── Navbar
// ├── Sidebar
// ├── Products
// ├── Cart
// └── Profile

// All of them need the Cart Count.

// Without Zustand, you would pass props like this:

// App
//  │
//  ▼
// Navbar
//  │
//  ▼
// Header
//  │
//  ▼
// CartIcon

// This is called Prop Drilling.

// With Zustand

// Navbar  ─────┐
//              │
// Sidebar ─────┤
//              │
// Products ────┤
//              ▼
//          Zustand Store
//              ▲
// Cart ─────────┤
// Profile ──────┘

// Every component directly accesses the store.

// Why do we use Zustand?
// Share data between components
// Avoid Prop Drilling
// Manage Global State
// Simple alternative to Redux
// Less boilerplate code
// Easy to learn
// Local State vs Global State
// Local State
// const [count, setCount] = useState(0);

// Only this component can use count.

// Global State
// const count = useStore((state) => state.count);

// Any component can use count.

// What is Global State?

// Global state is data shared across multiple components.

// Examples:

// Logged-in User
// Shopping Cart
// Theme (Dark/Light)
// Language
// Notifications
// Wishlist
// Authentication
// User Profile

// Installation
// npm install zustand
// Basic Syntax
// import { create } from "zustand";

// const useStore = create((set) => ({
//   count: 0,

//   increase: () =>
//     set((state) => ({
//       count: state.count + 1,
//     })),
// }));
// How it Works
// Component
//       │
//       ▼
// useStore()
//       │
//       ▼
// Zustand Store
//       │
//       ▼
// Global State
// Where do we use Zustand?
// Shopping Cart
// Authentication
// Theme Toggle
// User Profile
// Language Selection
// Wishlist
// Notifications
// Dashboard
// Chat Applications
// E-commerce Websites
// Advantages
// Very easy to learn
// Less code than Redux
// No Provider required
// Fast performance
// Minimal boilerplate
// Excellent TypeScript support
// Great for small to medium applications



// | Zustand              | Redux Toolkit              |
// | -------------------- | -------------------------- |
// | Simple               | More structured            |
// | Less code            | More boilerplate           |
// | No Provider          | Requires Provider          |
// | Easier for beginners | Better for very large apps |
// | Quick setup          | More configuration         |

// | Context API                 | Zustand                        |
// | --------------------------- | ------------------------------ |
// | Can cause more re-renders   | Optimized updates              |
// | Needs Provider              | No Provider                    |
// | Good for simple global data | Better for larger shared state |
// | Built into React            | Third-party library            |



// Need state in only one component?
//         │
//         ▼
//      useState

// --------------------------------

// Need to share simple data
// (theme, language)?
//         │
//         ▼
//     Context API

// --------------------------------

// Need global state
// (cart, auth, wishlist)
// with simple setup?
//         │
//         ▼
//       Zustand

// --------------------------------

// Large enterprise app
// with complex business logic,
// many developers,
// advanced middleware?
//         │
//         ▼
//     Redux Toolkit
