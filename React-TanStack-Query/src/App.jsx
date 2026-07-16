import { useQuery } from "@tanstack/react-query";
import UserCard from "./components/UserCard";

// Function to fetch users
async function fetchUsers() {
  const response = await fetch("https://dummyjson.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  return response.json();
}

function App() {
  const {
    data,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) {
    return <h1>Loading Users...</h1>;
  }

  if (error) {
    return <h1>{error.message}</h1>;
  }

  return (
    <div
      style={{
        padding: "20px",
      }}
    >
      <h1>DummyJSON Users</h1>

      {data.users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
        />
      ))}
    </div>
  );
}

export default App;


// What is React TanStack Query?
// Interview Definition

// TanStack Query (formerly React Query) is a powerful data-fetching library for React that simplifies fetching, caching, synchronizing, and updating server data while automatically managing loading, error, and cache states.

// Simple Definition

// TanStack Query is a library that helps React applications fetch, cache, and manage API data with less code than using useEffect and fetch().

// Is TanStack Query a React Hook?

// ❌ No

// It is not a built-in React Hook.

// It is a third-party library.

// Install it:

// npm install @tanstack/react-query
// Why do we use TanStack Query?

// Without TanStack Query, every API call needs:

// useState
// useEffect
// loading
// error
// fetch()
// Cache logic
// Refetch logic

// This becomes repetitive.

// TanStack Query handles all of this for you.

// Without TanStack Query
// const [users, setUsers] = useState([]);
// const [loading, setLoading] = useState(true);
// const [error, setError] = useState("");

// useEffect(() => {
//   fetch("https://dummyjson.com/users")
//     .then((res) => res.json())
//     .then((data) => {
//       setUsers(data.users);
//       setLoading(false);
//     })
//     .catch(() => {
//       setError("Something went wrong");
//       setLoading(false);
//     });
// }, []);

// A lot of manual work.

// With TanStack Query
// const { data, isLoading, error } = useQuery({
//   queryKey: ["users"],
//   queryFn: fetchUsers,
// });

// That's it!

// What problems does TanStack Query solve?

// It automatically handles:

// ✅ API fetching
// ✅ Loading state
// ✅ Error state
// ✅ Caching
// ✅ Background refetching
// ✅ Data synchronization
// ✅ Retry on failure
// Main Features
// Data Fetching
// Caching
// Automatic Refetching
// Background Updates
// Loading State
// Error Handling
// Pagination
// Infinite Scrolling
// Mutations (POST, PUT, DELETE)



// Real Developer Thinking
// Scenario 1

// "I just want to change the page title."

// useEffect(() => {
//     document.title = "Dashboard";
// }, []);

// ✅ Use useEffect

// Scenario 2

// "I need one API on my portfolio website."

// const { data } = useFetch(url);

// or even plain useEffect.

// ✅ Small project

// Scenario 3

// "I'm building Amazon."

// APIs:

// Products
// Cart
// Orders
// Profile
// Wishlist
// Reviews
// Notifications

// Hundreds of API calls.

// Developer thinks:

// "Managing all this manually will be difficult."

// Use

// useQuery()

// ✅ TanStack Query

// Real Company Examples
// Portfolio Website
// About Me
// Projects
// Contact

// One API

// Use:

// useEffect

// or

// useFetch
// Weather App

// One weather API

// Use

// useFetch

// or

// useEffect
// E-commerce

// Many APIs

// Use

// TanStack Query
// Banking App

// Many APIs

// Need caching

// Need synchronization

// Use

// TanStack Query
// Social Media

// Instagram

// Facebook

// Twitter

// Thousands of API requests

// Use

// TanStack Query
// Decision Tree
// Need to perform a side effect?
//             │
//             ▼
//         useEffect

// -----------------------------

// Need to fetch data?

//             │
//             ▼

// Only 1–2 APIs?
//             │
//      Yes ─────────► useEffect or useFetch

//             │
//             No
//             ▼

// Many APIs?

// Need caching?

// Need automatic refetch?

// Need retries?

// Need synchronization?

//             │
//             ▼

//       TanStack Query
// What Companies Use
// Project	Choice
// Portfolio	useEffect
// Blog	useEffect / useFetch
// Small CRUD App	useFetch or useEffect
// Admin Dashboard	TanStack Query
// Amazon	TanStack Query
// Netflix	TanStack Query (or similar server-state library)
// Banking App	TanStack Query
// CRM	TanStack Query
// Interview Question
// Q. When would you use useEffect, useFetch, and TanStack Query?

// I use useEffect for general side effects such as timers, event listeners, or simple API calls. If I find myself repeating the same fetching logic, I create a reusable custom hook like useFetch. For larger applications with many API requests, I prefer TanStack Query because it provides caching, automatic refetching, retries, and efficient server-state management out of the box.