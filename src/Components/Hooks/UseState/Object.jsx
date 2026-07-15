import { useState } from "react";

function Object() {
  const [student, setStudent] = useState({
    name: "",
    age: 0,
    city: "",
  });

  const loadStudent = () => {
    setStudent({
      name: "Sanchay",
      age: 22,
      city: "Noida",
    });
  };

  const resetStudent = () => {
    setStudent({
      name: "",
      age: 0,
      city: "",
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Student Profile</h1>

      <h3>Name: {student.name}</h3>
      <h3>Age: {student.age}</h3>
      <h3>City: {student.city}</h3>

      <button onClick={loadStudent}>
        Load Student
      </button>

      <button onClick={resetStudent}>
        Reset
      </button>
    </div>
  );
}

export default Object;