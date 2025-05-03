import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginSignup.css'; // Use the same CSS file for consistency



function SignupPage() {
  const [userDetails, setUserDetails] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  });

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup with:', userDetails);
    // Signup logic here
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userDetails.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userDetails.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userDetails.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirm Password"
          value={userDetails.passwordConfirmation}
          onChange={handleChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default SignupPage;
