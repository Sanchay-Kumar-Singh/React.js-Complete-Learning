// import React, { useState } from 'react'

// const UseState = () => {
//     const [count,setCount]=useState(5);

//    const decrease=()=>{
//         setCount(count-1);
//     }

//   return (
//     <div><h1>UseState Hooks</h1>
//     <h1>{count}</h1>
//     {/* <button onClick={()=>setCount(count+1)}>Increase</button> */}
//     <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// }

// export default UseState;


import { useState } from "react";

function UseState() {

  // Number State
  const [count, setCount] = useState(0);

  // String State
  const [name, setName] = useState("");

  // Boolean State
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Array State
  const [skills, setSkills] = useState([]);

  // Object State
  const [user, setUser] = useState({
    name: "",
    age: 0,
    city: "",
  });

  // Null State
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ padding: "20px" }}>

      <h1>React useState Examples</h1>

      <hr />

      {/* Number */}
      <h2>1. Number State</h2>

      <p>Count : {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <hr />

      {/* String */}
      <h2>2. String State</h2>

      <p>Name : {name}</p>

      <button onClick={() => setName("Sanchay")}>
        Set Name
      </button>

      <hr />

      {/* Boolean */}
      <h2>3. Boolean State</h2>

      <p>
        Login Status :
        {isLoggedIn ? " Logged In" : " Not Logged In"}
      </p>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        Toggle Login
      </button>

      <hr />

      {/* Array */}
      <h2>4. Array State</h2>

      <p>Skills</p>

      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <button
        onClick={() =>
          setSkills([...skills, "React"])
        }
      >
        Add Skill
      </button>

      <hr />

      {/* Object */}
      <h2>5. Object State</h2>

      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
      <p>City : {user.city}</p>

      <button
        onClick={() =>
          setUser({
            name: "Sanchay",
            age: 22,
            city: "Noida",
          })
        }
      >
        Set User
      </button>

      <hr />

      {/* Null */}
      <h2>6. Null State</h2>

      {selectedUser ? (
        <>
          <p>ID : {selectedUser.id}</p>
          <p>Name : {selectedUser.name}</p>
        </>
      ) : (
        <p>No User Selected</p>
      )}

      <button
        onClick={() =>
          setSelectedUser({
            id: 1,
            name: "Sanchay",
          })
        }
      >
        Select User
      </button>

      

    </div>
  );
}

export default UseState;





// | State          | Initial Value                    | Data Type | Why?                                    |
// | -------------- | -------------------------------- | --------- | --------------------------------------- |
// | `count`        | `0`                              | Number    | Counter starts from 0.                  |
// | `name`         | `""`                             | String    | Initially no name is entered.           |
// | `isLoggedIn`   | `false`                          | Boolean   | User is not logged in initially.        |
// | `skills`       | `[]`                             | Array     | No skills are available initially.      |
// | `user`         | `{ name: "", age: 0, city: "" }` | Object    | User object exists with default values. |
// | `selectedUser` | `null`                           | Null      | No user has been selected yet.          |





// 1----->>>(useState Hook)
// Definition (Interview)

// useState is a built-in React Hook that allows Functional Components to create and manage state. It returns the current state value and a setter function. Whenever the setter function is called, React updates the state and re-renders the component.



// Why do we use useState?

// We use useState because:

// To store dynamic data inside a Functional Component.
// To update the UI whenever data changes.
// To manage data that changes during user interaction.
// It replaces this.state and this.setState() used in Class Components.
// Where is useState used?

// useState is commonly used for:

// Counter applications
// Form input fields
// Login/Logout status
// Dark/Light theme
// Show/Hide password
// Modal or Popup visibility
// Shopping cart count
// Like button
// Toggle menu
// Todo applications



// Flow of useState

// Component Loads
//         │
//         ▼
// useState(0)
//         │
//         ▼
// count = 0
//         │
//         ▼
// User Clicks Button
//         │
//         ▼
// setCount(count + 1)
//         │
//         ▼
// State Updated
//         │
//         ▼
// Component Re-renders
//         │
//         ▼
// Updated UI Displayed
