import { useLocation } from "react-router-dom";

function Profile() {
  const location = useLocation();

  return (
    <div>
      <h1>Profile Page</h1>

      <hr />

      <h2>pathname</h2>
      <p>{location.pathname}</p>

      <hr />

      <h2>search</h2>
      <p>{location.search}</p>

      <hr />

      <h2>hash</h2>
      <p>{location.hash}</p>

      <hr />

      <h2>state</h2>

      <p>Name : {location.state?.name}</p>

      <p>Age : {location.state?.age}</p>

      <p>City : {location.state?.city}</p>

      <hr />

      <h2>Complete Location Object</h2>

      <pre>
        {JSON.stringify(location, null, 2)}
      </pre>
    </div>
  );
}

export default Profile;