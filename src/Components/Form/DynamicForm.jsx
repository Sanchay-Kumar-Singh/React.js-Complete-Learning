import { useState } from "react";

function DynamicForm() {

  const fields = [
    {
      id: 1,
      label: "Name",
      type: "text",
    },
    {
      id: 2,
      label: "Email",
      type: "email",
    },
    {
      id: 3,
      label: "Age",
      type: "number",
    },
  ];

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>

      <h1>Dynamic Form</h1>

      {fields.map((field) => (
        <div key={field.id}>
          <label>{field.label}</label>

          <input
            type={field.type}
            name={field.label}
            onChange={handleChange}
          />
        </div>
      ))}

      <hr />

      <pre>
        {JSON.stringify(formData, null, 2)}
      </pre>

    </div>
  );
}

export default DynamicForm;