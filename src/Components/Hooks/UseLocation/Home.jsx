import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate("/profile?id=101#details", {
      state: {
        name: "Sanchay",
        age: 22,
        city: "Noida",
      },
    });
  };

  return (
    <div>
      <h1>Home Page</h1>

      <button onClick={goToProfile}>
        Go Using useNavigate
      </button>

      <br />
      <br />

      <Link
        to="/profile?id=202#education"
        state={{
          name: "Rahul",
          age: 25,
          city: "Delhi",
        }}
      >
        Go Using Link
      </Link>
    </div>
  );
}

export default Home;



// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import Home from "./Home";
// import Profile from "./Profile";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// What is useLocation?
// Interview Definition

// useLocation is a React Router hook that returns the current location object, which contains information about the current URL such as the pathname, search query, hash, and state.

// Simple Definition

// useLocation is used to get information about the current URL of the application.

// Why do we use useLocation?

// We use useLocation when we want to know:

// Which page is currently open?
// What is the current URL?
// What query parameters are present?
// Was any data passed during navigation?
// Syntax
// const location = useLocation();
// What does it return?
// const location = useLocation();

// console.log(location);

// Output

// {
//   pathname: "/about",
//   search: "?id=10",
//   hash: "",
//   state: null,
//   key: "abc123"
// }
// Properties of location
// Property	Description
// pathname	Current URL path
// search	Query parameters (?id=10)
// hash	URL hash (#section1)
// state	Data passed using navigate() or Link
// key	Unique key for the current location
// Example 1 : Current Path
// import { useLocation } from "react-router-dom";

// function About() {
//   const location = useLocation();

//   return (
//     <>
//       <h1>About Page</h1>

//       <h2>{location.pathname}</h2>
//     </>
//   );
// }

// Visit

// http://localhost:5173/about

// Output

// About Page

// /about
// Example 2 : Query Parameters

// URL

// http://localhost:5173/products?id=10
// const location = useLocation();

// console.log(location.search);

// Output

// ?id=10
// Example 3 : Passing Data

// Navigate

// navigate("/profile", {
//   state: {
//     name: "Sanchay",
//     age: 22,
//   },
// });

// Receive Data

// import { useLocation } from "react-router-dom";

// function Profile() {
//   const location = useLocation();

//   console.log(location.state);

//   return (
//     <>
//       <h1>{location.state.name}</h1>

//       <h2>{location.state.age}</h2>
//     </>
//   );
// }

// Output

// Sanchay

// 22
// Where do we use useLocation?
// Active Navbar
// Breadcrumb Navigation
// Authentication Redirects
// Search Pages
// Product Filters
// Passing Data Between Pages
// Analytics
// Showing Current Route
// Multi-Step Forms
// Advantages
// Access the current URL.
// Read query parameters.
// Receive data passed during navigation.
// Detect route changes.
// Build dynamic navigation.
// Interview Questions
// What is useLocation?

// useLocation is a React Router hook that returns information about the current URL, including pathname, search parameters, hash, and navigation state.

// Why do we use useLocation?

// We use useLocation to access the current route information, query parameters, and any state passed during navigation.

// Is useLocation a built-in React Hook?

// No. useLocation is a hook provided by the react-router-dom library, not by React itself.

// Interview Points
// Belongs to react-router-dom.
// Returns the current location object.
// Provides:
// pathname
// search
// hash
// state
// key
// Useful for navigation-related logic.
// Easy Way to Remember

// Imagine your browser is currently at:

// http://localhost:5173/products?id=5#reviews

// useLocation() tells you everything about this URL:

// URL
//  │
//  ▼
// http://localhost:5173/products?id=5#reviews

// pathname → /products

// search → ?id=5

// hash → #reviews

// state → Data passed during navigation