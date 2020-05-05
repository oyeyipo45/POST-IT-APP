import React from 'react'
import { Link } from "react-router-dom";


export default function Signin({history}) {
    const handleSubmit = (e) => {
      e.preventDefault();
      history.push('/dashboard')
    };

  return (
    <div className="join-container">
        <header className="join-header">
            <h1><i className="fas fa-smile"></i> POST-IT</h1>
            <p>Hello there! Please login with your Username or Email </p>
        </header>
        <main className="join-main">
            <form onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <label htmlFor="username">Username or Email</label>
                    <input type="text" name="username" id="username" placeholder="Enter username or email..."
                        required />
                </div>

                <div className="form-inputs">
                    <label htmlFor="username">Password</label>
                    <input type="password" name="password" id="password" placeholder="Enter password..." required />
                </div>
                <button type="submit" className="button">Sign In</button>
                <p className="mt-2">Don't have an account? <Link to="/signup">Sign Up</Link> here</p>
            </form>
        </main>
    </div>
  )
}

