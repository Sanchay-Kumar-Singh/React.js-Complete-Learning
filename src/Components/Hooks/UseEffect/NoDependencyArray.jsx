import { useState, useEffect } from "react";

function NoDependencyArray() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        console.log("API Called");
        setUsers(data.users);
      });
  });

  return (
    <div>
      <h1>Users</h1>

      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}

export default NoDependencyArray;