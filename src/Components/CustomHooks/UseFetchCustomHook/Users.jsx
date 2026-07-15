import useFetch from "./useFetch";

function Users() {
  const {
    data,
    loading,
    error,
  } = useFetch("https://dummyjson.com/users");

  if (loading) return <h2>Loading...</h2>;

  if (error) return <h2>{error}</h2>;

  return (
    <div>
      {data.users.map((user) => (
        <h3 key={user.id}>
          {user.firstName}
        </h3>
      ))}
    </div>
  );
}

export default Users;