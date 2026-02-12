import { useState } from "react";
import "./Signup.css";

function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Handle input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data Object:", formData);
    console.log("Form Data JSON:", JSON.stringify(formData, null, 2));

    // Optional: clear form after submit
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="signup-card">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />

        <label>Last Name</label>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
