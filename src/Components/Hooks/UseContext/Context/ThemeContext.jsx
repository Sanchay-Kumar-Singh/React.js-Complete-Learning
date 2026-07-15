import { createContext,useState } from "react";
import React from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
  const [theme, setTheme] = useState({
    background: "white",
    color: "black",
    fontSize: 16,
  });

  // Function to toggle theme
  const toggleTheme = () => {
    setTheme((prev) => ({
      background: prev.background === "white" ? "black" : "white",
      color: prev.color === "black" ? "yellow" : "black",
      fontSize: prev.fontSize === 16 ? 24 : 16,
    }));
  };

    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

// What is useContext?
// Interview Definition

// useContext is a built-in React Hook that allows Functional Components to access data from a React Context without passing props manually through multiple levels of components (known as prop drilling).

// What is Prop Drilling?
// Interview Definition

// Prop drilling is the process of passing data from a parent component to deeply nested child components through intermediate components that do not use the data themselves.

// Example:

// App
//  │
//  ▼
// Dashboard
//  │
//  ▼
// Profile
//  │
//  ▼
// UserInfo

// Solution: useContext

// Instead of passing props through every component:

// App
//  │
//  │
//  ▼
// Context
//  │
//  ├──────────────► Navbar
//  │
//  ├──────────────► Dashboard
//  │
//  ├──────────────► Profile
//  │
//  └──────────────► UserInfo


// Where is useContext used?
// Dark / Light Theme
// Logged-in User
// Language (English, Hindi, etc.)
// Authentication
// Shopping Cart
// Currency
// Global Settings
// User Profile