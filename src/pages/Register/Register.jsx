import { NavLink, useNavigate } from "react-router-dom";
import "./Register.css";
import { useState } from "react";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [sendingData, setSendingData] = useState({
    role: "1"
  });

  const handleChange = (e) => {
    setSendingData({
      ...sendingData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6060/api/users", sendingData);
      console.log(res.data);
      // Optional: Redirect to login after successful registration
      // navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='login-page-container'>
      <button className="back-to-home" onClick={() => navigate("/")}>
        ← Back to Home
      </button>
      {/* LEFT SIDE: Form */}
      <div className="login-form-section">
        <div className="form-content-wrapper">

          <h1 className="main-title">
            JOIN US, <br /> <span>REGISTER</span>
          </h1>
          <p className="subtitle">Create your account to start printing models.</p>

          <form onSubmit={handleSubmit} className="login-form">

            <div className="input-field-group">
              <label>Phone number</label>
              <input
                name="phone_number"
                type="text"
                placeholder="+998"
                onChange={handleChange}
                required
              />
            </div>

            {/* Row for Name */}
            <div className="form-row">
              <div className="input-field-group half">
                <label>First name</label>
                <input
                  name="first_name"
                  type="text"
                  placeholder="John"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field-group half">
                <label>Last name</label>
                <input
                  name="last_name"
                  type="text"
                  placeholder="Doe"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            {/* Row for Password */}
            <div className="form-row">
              <div className="input-field-group half">
                <label>Password</label>
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-field-group half">
                <label>Verify password</label>
                <input
                  name="verify_password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div className="input-field-group">
              <label>Role</label>
              <select name="role" onChange={handleChange} className="custom-select">
                <option value="1">Model Printer</option>
                <option value="2">Model Maker</option>
                <option value="3">Both</option>
                <option value="0">None</option>
              </select>
            </div>

            <button type="submit" className="login-submit-button">Register</button>

            <p className="register-redirect-text">
              Already have an account? <NavLink to={"/login"}>Login</NavLink>
            </p>
          </form>
        </div>
      </div>

      {/* RIGHT SIDE: Background Image */}
      <div className="login-image-section register-bg"></div>

    </div>
  );
};

export default Register;