import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong");
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;



// What is useFetch?
// Interview Definition

// useFetch is a custom React Hook used to fetch data from an API and reuse the same data-fetching logic across multiple components. It is not a built-in React Hook.

// Simple Definition

// useFetch is a custom hook that fetches data from an API so you don't have to write the same useEffect and fetch() code repeatedly.

// Is useFetch a Built-in React Hook?

// ❌ No

// React provides built-in hooks like:

// useState
// useEffect
// useContext
// useReducer
// useMemo
// useCallback
// useRef

// useFetch is created by developers.



// Without useFetch
// Users.jsx
//    │
//    ├── useState
//    ├── useEffect
//    ├── fetch()
//    └── loading

// Products.jsx
//    │
//    ├── useState
//    ├── useEffect
//    ├── fetch()
//    └── loading

// Posts.jsx
//    │
//    ├── useState
//    ├── useEffect
//    ├── fetch()
//    └── loading
// With useFetch
// Users.jsx
//       │
//       ▼
//  useFetch(url)

// Products.jsx
//       │
//       ▼
//  useFetch(url)

// Posts.jsx
//       │
//       ▼
//  useFetch(url)

// One hook

// Many components.

// Syntax
// const { data, loading, error } = useFetch(url);
// How useFetch Works
// Component

//      │

//      ▼

// useFetch(url)

//      │

//      ▼

// useEffect()

//      │

//      ▼

// fetch(API)

//      │

//      ▼

// Store Data

//      │

//      ▼

// Return

// data

// loading

// error