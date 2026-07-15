import { useState } from "react";

function String() {
  const [name, setName] = useState("");

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Name App</h1>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello, {name || "Guest"} 👋</h2>

      <button onClick={() => setName("")}>
        Clear
      </button>
    </div>
  );
}

export default  String;