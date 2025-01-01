import React, { useState } from 'react';
import '../Components/Reg.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Reg = () => {
  const [signupemail, setsignupemail] = useState('');
  const [signuppass, setsignuppass] = useState('');

  const handleReg = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/reg/reg', {
        email: signupemail,
        pass: signuppass,
      });
      console.log('Response:', res.data);
      console.log('Email:', signupemail);
      console.log('Password:', signuppass);
    } catch (error) {
      alert('Error:', error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>REGISTRATION</h1>
      <form id="loginForm" onSubmit={handleReg}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupemail}
          onChange={(e) => setsignupemail(e.target.value)}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signuppass}
          onChange={(e) => setsignuppass(e.target.value)}
          required
        />
        <button type="submit">REGISTRATION</button>
      </form>

      <button className="signup-button" style={{ marginTop: '20px' }}>
        <Link to="/login">LOGIN</Link>
      </button>
    </div>
  );
};

export default Reg;
