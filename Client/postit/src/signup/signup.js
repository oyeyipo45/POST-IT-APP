import React from "react";
import { Link } from "react-router-dom";

export default function Signup({history}) {

  const handleSubmit = (e) => {
      e.preventDefault();
    history.push('/dashboard')
  };

  return (
    <div className="join-container">
      <header className="join-header">
        <h1>
          <i className="fas fa-smile"></i> POST-IT
        </h1>
        <p>Welcome Guest! Thank you for registering. </p>
      </header>
      <main className="join-main">
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <label for="username">Username</label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter username..."
              required
            />
          </div>

          <div className="form-inputs">
            <label for="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email..."
              required
            />
          </div>

          <div className="form-inputs">
            <label for="username">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password..."
              required
            />
          </div>
          <button type="submit" className="button">
            Sign Up
          </button>
          <p className="mt-2">
            Already have an account? <Link to="index.html">Sign In</Link> here
          </p>
        </form>
      </main>
    </div>
  );
}
