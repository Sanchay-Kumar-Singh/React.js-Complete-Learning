import useWindowResize from "./useWindowResize";

function WindowSize() {
  const { width, height } = useWindowResize();

  return (
    <div>
      <h2>Width : {width}</h2>
      <h2>Height : {height}</h2>
    </div>
  );
}

export default WindowSize;




// import { useState } from "react";
// import WindowSize from "./components/UseWindowResizeCustomHook/WindowSize";

// function App() {
//   const [show, setShow] = useState(true);

//   return (
//     <div>
//       <button onClick={() => setShow(!show)}>
//         {show ? "Hide Component" : "Show Component"}
//       </button>

//       <hr />

//       {show && <WindowSize/>}
//     </div>
//   );
// }

// export default App;

