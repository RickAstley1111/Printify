import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [sendingData, setSendingData] = useState({ role: "1" });

  const handleChange = (e) => {
    setSendingData({ ...sendingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:6060/api/users", sendingData);
      console.log(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='login-page-container'>
      <button className="back-to-home" onClick={() => navigate("/")}>
        {t.backHome}
      </button>

      <div className="login-form-section">
        <div className="form-content-wrapper">
          <h1 className="main-title">
            {t.joinUs} <br /> <span>{t.registerTitle}</span>
          </h1>
          <p className="subtitle">{t.registerSubtitle}</p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-field-group">
              <label>{t.phoneNumber}</label>
              <input name="phone_number" type="text" placeholder="+998" onChange={handleChange} required />
            </div>

            <div className="form-row">
              <div className="input-field-group half">
                <label>{t.firstName}</label>
                <input name="first_name" type="text" placeholder="John" onChange={handleChange} required />
              </div>
              <div className="input-field-group half">
                <label>{t.lastName}</label>
                <input name="last_name" type="text" placeholder="Doe" onChange={handleChange} required />
              </div>
            </div>

            <div className="form-row">
              <div className="input-field-group half">
                <label>{t.password}</label>
                <input name="password" type="password" placeholder="••••••••" onChange={handleChange} required />
              </div>
              <div className="input-field-group half">
                <label>{t.verifyPassword}</label>
                <input name="verify_password" type="password" placeholder="••••••••" required />
              </div>
            </div>

            <div className="input-field-group">
              <label>{t.role}</label>
              <select name="role" onChange={handleChange} className="custom-select" defaultValue="1">
                <option value="1">{t.rolePrinter}</option>
                <option value="2">{t.roleMaker}</option>
                <option value="3">{t.roleBoth}</option>
                <option value="0">{t.roleNone}</option>
              </select>
            </div>

            <button type="submit" className="login-submit-button">{t.register}</button>

            <p className="register-redirect-text">
              {t.haveAccount} <NavLink to={"/login"}>{t.login}</NavLink>
            </p>
          </form>
        </div>
      </div>

      <div className="login-image-section register-bg"></div>
    </div>
  );
};

export default Register;
