import { useState, useEffect } from "react";

function RunOnDependencyChange() {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/search?q=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Searching...");
        setUsers(data.users);
      });
  }, [search]);

  return (
    <div>
      <h1>User Search</h1>

      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <hr />

      {users.map((user) => (
        <p key={user.id}>{user.firstName}</p>
      ))}
    </div>
  );
}

export default RunOnDepedencyChange;