// What is react-router-dom?
// Interview Definition

// react-router-dom is a routing library for React that enables client-side routing. It allows users to navigate between different pages (components) in a Single Page Application (SPA) without reloading the browser.


// 1. Basic Routing (Most Common for Beginners)
// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/about" element={<About />} />
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;

// ✅ Best for small projects.

// 2. Routing with Layout (Navbar/Footer Shared)

// Suppose every page should have a Navbar and Footer.

// App.jsx
// import { Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="about" element={<About />} />
//         <Route path="contact" element={<Contact />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
// Layout.jsx
// import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// function Layout() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default Layout;

// ✅ Used in most real-world applications.

// 3. Protected Routes

// When only logged-in users can access certain pages.

// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import ProtectedRoute from "./ProtectedRoute";

// function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />} />

//       <Route
//         path="/dashboard"
//         element={
//           <ProtectedRoute>
//             <Dashboard />
//           </ProtectedRoute>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;
// ProtectedRoute.jsx
// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children }) {
//   const isLoggedIn = true;

//   return isLoggedIn ? children : <Navigate to="/" />;
// }

// export default ProtectedRoute;

// ✅ Common in authentication systems.

// 4. Nested Routes
// import { Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import Profile from "./Profile";
// import Settings from "./Settings";

// function App() {
//   return (
//     <Routes>
//       <Route path="/dashboard" element={<Dashboard />}>
//         <Route path="profile" element={<Profile />} />
//         <Route path="settings" element={<Settings />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
// Dashboard.jsx
// import { Outlet } from "react-router-dom";

// function Dashboard() {
//   return (
//     <>
//       <h1>Dashboard</h1>
//       <Outlet />
//     </>
//   );
// }

// export default Dashboard;

// Visiting:

// /dashboard/profile

// shows Dashboard + Profile.

// 5. Routes from an Array (Scalable)

// Instead of writing many <Route> components manually:

// const routes = [
//   { path: "/", element: <Home /> },
//   { path: "/about", element: <About /> },
//   { path: "/contact", element: <Contact /> },
// ];

// Then:

// import { Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Routes>
//       {routes.map((route) => (
//         <Route
//           key={route.path}
//           path={route.path}
//           element={route.element}
//         />
//       ))}
//     </Routes>
//   );
// }

// export default App;

// ✅ Helpful when your app has many routes.

// Bonus: Using createBrowserRouter (React Router v6.4+)

// This is the modern approach for larger applications.

// router.jsx
// import { createBrowserRouter } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
// ]);

// export default router;
// main.jsx
// import ReactDOM from "react-dom/client";
// import { RouterProvider } from "react-router-dom";
// import router from "./router";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

// ✅ Recommended for new applications because it supports features like data loaders and actions.

// Which one should you use?
// Method	Best For
// Basic Routes	Learning, small apps
// Layout + Outlet	Most production apps
// Protected Routes	Login/authentication
// Nested Routes	Dashboards, admin panels
// Routes Array	Large apps with many routes
// createBrowserRouter + RouterProvider	Modern React Router (v6.4+) and new projects
// For interviews

// You should be comfortable with:

// ✅ BrowserRouter
// ✅ Routes
// ✅ Route
// ✅ Link
// ✅ NavLink
// ✅ useNavigate
// ✅ useParams
// ✅ Outlet
// ✅ Protected Routes
// ✅ Nested Routes
// ✅ createBrowserRouter and RouterProvider (modern React Router)

// Knowing these covers the vast majority of React Router questions you'll encounter in interviews.