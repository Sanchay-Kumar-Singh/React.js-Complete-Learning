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



// What is Redux?
// Interview Definition

// Redux is a predictable state management library used to manage and share global state across an application using a centralized store.

// Simple Definition

// Redux is a library that stores global data in one central place called the Store.

// What is Redux Toolkit (RTK)?
// Interview Definition

// Redux Toolkit is the official and recommended way to write Redux. It simplifies Redux by reducing boilerplate code and providing built-in utilities like configureStore() and createSlice().

// Simple Definition

// Redux Toolkit is an easier and modern version of Redux.

// Why Redux?

// Suppose you have

// App
// │
// ├── Navbar
// ├── Sidebar
// ├── Product
// ├── Cart
// ├── Profile
// └── Footer

// All need

// User

// Cart

// Theme

// Passing props becomes difficult.

// Redux stores all global data in one place.

// Real World
// Amazon

// ↓

// Products

// Cart

// Wishlist

// Orders

// User

// Payment

// Address

// All these use global state.

// Without Redux
// App
//  │
//  ├── Navbar(cart)
//  │
//  ├── Product(addToCart)
//  │
//  └── Cart(cart)

// Lots of props.

// With Redux
// Navbar
//      │
// Cart │
//      │
// Profile
//      │
// Product
//      │
//      ▼
//  Redux Store

// Everyone talks directly to the Store.

// Redux Flow
// Component

// ↓

// Dispatch Action

// ↓

// Reducer

// ↓

// Store Updates

// ↓

// Component Re-renders




// Redux Important Terms
// 1 Store

// Definition

// Store is the central place where all global state is stored.

// Example

// Store

// {

// user

// cart

// theme

// products

// }
// 2 State

// Definition

// State is the data stored inside the Redux Store.

// Example

// cart: []
// 3 Action

// Definition

// An Action is an object that describes what happened.

// Example

// {
//    type: "cart/addItem"
// }

// Meaning

// Add item into cart.
// 4 Reducer

// Definition

// A Reducer is a function that updates the state based on an action.

// Example

// function reducer(state,action){

// }
// 5 Dispatch

// Definition

// Dispatch sends an action to the reducer.

// Example

// dispatch(addItem())
// Redux Toolkit Important Terms
// configureStore()

// Definition

// Creates the Redux Store.

// createSlice()

// Definition

// Creates state, reducers, and actions together.

// useSelector()

// Definition

// Reads data from the Redux Store.

// useDispatch()

// Definition

// Sends actions to update the Redux Store.


// | Redux            | Redux Toolkit    |
// | ---------------- | ---------------- |
// | Old              | Modern           |
// | More Code        | Less Code        |
// | Difficult        | Easy             |
// | Separate Actions | Built-in Actions |
// | More Boilerplate | Less Boilerplate |

// | Zustand          | Redux Toolkit                              |
// | ---------------- | ------------------------------------------ |
// | Very Simple      | Structured                                 |
// | Small Projects   | Medium/Large Projects                      |
// | No Provider      | Provider Required                          |
// | Less Boilerplate | More than Zustand, less than classic Redux |
// | Easy to Learn    | Slightly Harder                            |

// | Context API        | Redux Toolkit        |
// | ------------------ | -------------------- |
// | Small Global State | Large Global State   |
// | Theme              | Cart                 |
// | Language           | Authentication       |
// | Less Features      | DevTools, Middleware |


// First, What is Redux?

// Imagine it's 2018.

// If you wanted to use Redux, you had to create many files.

// src

// actions
//     counterAction.js

// reducers
//     counterReducer.js

// constants
//     actionTypes.js

// store
//     store.js

// App.jsx

// You had to write:

// Action Types
// Actions
// Reducers
// Store

// Lots of code.

// Old Redux Example
// actionTypes.js
// export const INCREMENT = "INCREMENT";
// counterAction.js
// import { INCREMENT } from "./actionTypes";

// export const increment = () => {
//   return {
//     type: INCREMENT,
//   };
// };
// counterReducer.js
// import { INCREMENT } from "./actionTypes";

// const initialState = {
//   count: 0,
// };

// export default function reducer(state = initialState, action) {

//   switch (action.type) {

//     case INCREMENT:
//       return {
//         count: state.count + 1,
//       };

//     default:
//       return state;
//   }

// }

// See?

// Three files just for one button.

// Then Redux Team Thought...

// People complained.

// "Redux is powerful but there is too much boilerplate."

// So the Redux team created Redux Toolkit.

// Redux Toolkit

// Instead of

// Action

// ↓

// Reducer

// ↓

// Action Types

// ↓

// Store

// You simply write

// Slice

// ↓

// Store

// Done.

// Redux Toolkit Example
// const counterSlice = createSlice({

//   name: "counter",

//   initialState: {
//     count: 0,
//   },

//   reducers: {

//     increment(state) {
//       state.count++;
//     },

//   },

// });

// That's it.

// No action file.

// No constants.

// No switch statement.

// No action types.

// Everything is inside one file.

// Visual Comparison
// Old Redux
// Counter

// │

// ├── Action Type

// ├── Action Creator

// ├── Reducer

// └── Store

// 4 different concepts.

// Redux Toolkit
// Counter

// │

// └── Slice

// Everything inside one file.

// Why Redux Toolkit was created?

// Because Redux required lots of repetitive code.

// Redux Toolkit removes that repetition.

// Simple Example

// Suppose you want to increase count.

// Redux
// Create Action Type

// ↓

// Create Action

// ↓

// Dispatch Action

// ↓

// Reducer

// ↓

// Store Updated
// Redux Toolkit
// Create Slice

// ↓

// Dispatch Action

// ↓

// Store Updated

// Much easier.

// Interview Definition
// What is Redux?

// Redux is a predictable state management library used to manage global state through a centralized store.

// What is Redux Toolkit?

// Redux Toolkit is the official and recommended way to write Redux because it reduces boilerplate code and simplifies Redux development.

// Real Difference
// Redux	Redux Toolkit
// Old library	Modern way to use Redux
// More boilerplate	Less boilerplate
// Separate Actions	Actions generated automatically
// Separate Reducers	Reducers inside Slice
// Separate Action Types	No manual action types
// More files	Fewer files
// Harder for beginners	Easier for beginners
// Think Like Java

// This is similar to Java.

// Without Lombok:

// class Student {

//    private String name;

//    public String getName(){}

//    public void setName(){}
// }

// Lots of repetitive code.

// With Lombok:

// @Data
// class Student {
//    private String name;
// }

// Less code, same result.

// Redux vs Redux Toolkit is the same idea.

// Redux Toolkit doesn't replace Redux—it is built on top of Redux. It uses the same Redux principles (store, actions, reducers) but provides better APIs like configureStore() and createSlice() so you write much less code.

// The most important interview point

// Redux is the core state management library. Redux Toolkit is the official package built on top of Redux that simplifies Redux development. Today, almost all new React projects use Redux Toolkit instead of writing classic Redux manually.