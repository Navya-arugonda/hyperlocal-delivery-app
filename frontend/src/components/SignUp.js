import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword } from "../firebase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setSuccessMessage("User successfully created!"); // Success message
      setError(""); // Clear error if any
      navigate("/login"); // Redirect to login page after successful sign-up
    } catch (error) {
      setError(error.message); // Set error message if sign up fails
      setSuccessMessage(""); // Clear success message if an error occurs
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Password input field */}
        <div style={{ marginBottom: "15px" }}>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Confirm password input field */}
        <div style={{ marginBottom: "20px" }}>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>

      {/* Display error message */}
      {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

      {/* Display success message */}
      {successMessage && (
        <p style={{ color: "green", marginTop: "10px" }}>{successMessage}</p>
      )}
    </div>
  );
};

export default SignUp;
