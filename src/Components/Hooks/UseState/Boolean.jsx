import { useState } from "react";

function Boolean() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Login System</h1>

      <h2>
        {isLoggedIn ? "Welcome, Sanchay 😊" : "Please Login"}
      </h2>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default Boolean;