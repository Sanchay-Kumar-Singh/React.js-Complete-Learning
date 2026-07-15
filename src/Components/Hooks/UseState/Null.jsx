import { useState } from "react";

function Null() {
  const [user, setUser] = useState(null);

  const loadUser = () => {
    setUser({
      id: 1,
      name: "Sanchay",
      age: 22,
      city: "Noida",
    });
  };

  const removeUser = () => {
    setUser(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>User Profile</h1>

      {user ? (
        <div>
          <h3>ID: {user.id}</h3>
          <h3>Name: {user.name}</h3>
          <h3>Age: {user.age}</h3>
          <h3>City: {user.city}</h3>
        </div>
      ) : (
        <h3>No User Found</h3>
      )}

      <button onClick={loadUser}>
        Load User
      </button>

      <button onClick={removeUser}>
        Remove User
      </button>
    </div>
  );
}

export default Null;