import { BrowserRouter, useRoutes } from "react-router-dom";
import Home from "./Home";
import About from "./About";

function AppRoutes() {

  const routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ]);

  return routes;
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}


// What is useRoutes?
// Interview Definition

// useRoutes is a hook provided by react-router-dom that allows developers to define all application routes using a JavaScript route configuration object instead of JSX <Routes> and <Route> components.

// Simple Definition

// useRoutes is a hook used to create routing using an array of route objects instead of writing multiple <Route> components.

// Why do we use useRoutes?

// Normally we write routes like this:

// <Routes>
//   <Route path="/" element={<Home />} />
//   <Route path="/about" element={<About />} />
//   <Route path="/contact" element={<Contact />} />
// </Routes>

// If there are 50 pages,

// <Route ... />
// <Route ... />
// <Route ... />
// <Route ... />
// <Route ... />

// The file becomes very long.

// Instead,

// we create one array.

// const routes = [
//    {
//       path: "/",
//       element: <Home/>
//    },
//    {
//       path: "/about",
//       element: <About/>
//    }
// ];