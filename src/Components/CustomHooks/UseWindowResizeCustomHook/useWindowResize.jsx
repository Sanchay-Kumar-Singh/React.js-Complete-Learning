import { useState, useEffect } from "react";

function useWindowResize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    console.log("✅ Component Mounted");

    function handleResize() {
      console.log("🔄 Window Resized");

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    console.log("➕ Event Listener Added");
    window.addEventListener("resize", handleResize);

    return () => {
      console.log("❌ Component Unmounted");
      console.log("➖ Event Listener Removed");

      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowResize;

// import { useState, useLayoutEffect } from "react";

// function useWindowResize() {
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useLayoutEffect(() => {
//     function handleResize() {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     }

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return windowSize;
// }

// export default useWindowResize;


// What is useWindowResize?
// Interview Definition

// useWindowResize is a custom React Hook used to detect changes in the browser window size and provide the updated width and height to components. It is not a built-in React Hook.

// Simple Definition

// useWindowResize is a custom hook that tells us whenever the browser window is resized.

// Is useWindowResize a Built-in React Hook?

// ❌ No

// It is a custom hook created by developers.

// It is usually built using:

// useState
// useEffect
// Why do we use useWindowResize?

// Imagine you want your website to behave differently on different screen sizes.

// For example:

// Desktop  → Show Sidebar

// Tablet   → Hide Sidebar

// Mobile   → Show Hamburger Menu

// To do this, React needs to know the current window size.

// Instead of writing the same resize logic in every component, we create a reusable custom hook.

// Without useWindowResize

// Every component would have:

// useState()

// useEffect()

// window.addEventListener("resize", ...)

// Repeated again and again.

// With useWindowResize
// const { width, height } = useWindowResize();

// That's it!

// How it Works
// Browser Window

//        │

// Resize Window

//        │

//        ▼

// resize Event

//        │

//        ▼

// useWindowResize Hook

//        │

//        ▼

// Update State

//        │

//        ▼

// Component Re-renders








// But which one should you use?
// ✅ useEffect (Recommended)
// useEffect(() => {
//   // Add resize listener
// }, []);

// Use this because adding an event listener doesn't need to happen before the browser paints the screen. This is the common and recommended approach.

// ⚡ useLayoutEffect
// useLayoutEffect(() => {
//   // Add resize listener
// }, []);

// useLayoutEffect runs synchronously after React updates the DOM but before the browser paints. It's useful when you need to:

// Measure an element's size (offsetWidth, getBoundingClientRect())
// Read or change the DOM before it's displayed
// Prevent visual flickering
// useEffect vs useLayoutEffect
// useEffect	useLayoutEffect
// Runs after the browser paints	Runs before the browser paints
// Doesn't block rendering	Blocks rendering until it finishes
// Best for API calls, timers, event listeners	Best for DOM measurements and layout calculations
// Preferred in most cases	Use only when necessary
// Interview Answer

// Q: Can we replace useEffect with useLayoutEffect?

// Yes, technically we can, but it is not recommended unless we need to read or modify the DOM before the browser paints. For tasks like API calls or adding event listeners, useEffect is usually the better choice because it doesn't block rendering.

// When to use which?

// Use useEffect for:

// ✅ API calls
// ✅ Fetching data
// ✅ Timers (setTimeout, setInterval)
// ✅ Event listeners
// ✅ Logging

// Use useLayoutEffect for:

// ✅ Measuring element size (offsetWidth, getBoundingClientRect)
// ✅ Updating scroll position
// ✅ DOM manipulations that must happen before paint
// ✅ Preventing visual flicker