import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const SignIn = () => {
  const [signinemail, setsigninemail] = useState('');
  const [signinpass, setsigninpass] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:5000/sigin/sigin", {
        email: signinemail,
        pass: signinpass,
      });

      if (result.data.message === "LOGIN OR SIGN-IN SUCCESSFUL") {
        console.log("LOGIN SUCCESSFUL!");
        navigate("/"); // Navigate to home page
      } else {
        console.log("Server response:", result.data);
        alert(result.data); // Display any error message returned from the server
      }
    } catch (error) {
      console.error("Login failed:", error.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="login-container">
      <h1>SIGN-IN</h1>
      <form id="loginForm" onSubmit={handleSignIn}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signinemail}
          onChange={(e) => setsigninemail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signinpass}
          onChange={(e) => setsigninpass(e.target.value)}
          required
        />
        <button type="submit">SIGN-IN</button>
      </form>
    </div>
  );
};

export default SignIn;
