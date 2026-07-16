function UserCard({ user }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginBottom: "15px",
        borderRadius: "8px",
      }}
    >
      <img
        src={user.image}
        alt={user.firstName}
        width="80"
      />

      <h2>
        {user.firstName} {user.lastName}
      </h2>

      <p>
        <strong>Email:</strong> {user.email}
      </p>

      <p>
        <strong>Age:</strong> {user.age}
      </p>

      <p>
        <strong>Phone:</strong> {user.phone}
      </p>

      <p>
        <strong>City:</strong> {user.address.city}
      </p>

      <p>
        <strong>Company:</strong> {user.company.name}
      </p>
    </div>
  );
}

export default UserCard;