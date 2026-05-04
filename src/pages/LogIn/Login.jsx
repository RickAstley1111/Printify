import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './Login.css' // **Ensure you create this file**

const Login = () => {

  const navigate = useNavigate();

  return (
    <div className='login-page-container'>
      <button className="back-to-home" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      {/* This is a common design pattern. The entire screen is split in two. 
        We use flexbox to align them side-by-side.
      */}

      {/* LEFT SIDE: The Form */}
      <div className="login-form-section">
        <div className="form-content-wrapper">

          {/* Corrected header to match image */}
          <h1 className="main-title">
            <span>LOGIN</span> PAGE
          </h1>
          <p className="subtitle">Welcome back! Please enter your details.</p>

          <form className="login-form">

            {/* Input field 1: EMAIL */}
            <div className="input-field-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email" // Subtle UX improvement
                required
              />
            </div>

            {/* Input field 2: PASSWORD */}
            <div className="input-field-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="••••••••" // Obscured placeholder
                required
              />
            </div>

            {/* Lime Green Submit Button */}
            <button type="submit" className="login-submit-button">Log in</button>

            {/* Link to Register Page */}
            <p className="register-redirect-text">
              Don't have an account? <NavLink to={"/Register"}>Register</NavLink>
            </p>

          </form>
        </div>
      </div>

      {/* RIGHT SIDE: The Image Background */}
      <div className="login-image-section">
        {/*
          This section is kept empty in HTML. 
          The blurry 3D printer image will be applied here using CSS `background-image`.
        */}
      </div>

    </div>
  )
}

export default Login