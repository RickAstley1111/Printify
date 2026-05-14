import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useLanguage } from '../../LanguageContext'
import { translations } from '../../i18n'
import './Login.css'

const Login = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className='login-page-container'>
      <button className="back-to-home" onClick={() => navigate("/")}>
        {t.backHome}
      </button>

      <div className="login-form-section">
        <div className="form-content-wrapper">
          <h1 className="main-title">
            <span>{t.loginTitle}</span> {t.pageWord}
          </h1>
          <p className="subtitle">{t.welcomeBack}</p>

          <form className="login-form">
            <div className="input-field-group">
              <label htmlFor="email">{t.email}</label>
              <input id="email" type="email" placeholder={t.enterEmail} required />
            </div>

            <div className="input-field-group">
              <label htmlFor="password">{t.password}</label>
              <input id="password" type="password" placeholder="••••••••" required />
            </div>

            <button type="submit" className="login-submit-button">{t.logIn}</button>

            <p className="register-redirect-text">
              {t.noAccount} <NavLink to={"/Register"}>{t.register}</NavLink>
            </p>
          </form>
        </div>
      </div>

      <div className="login-image-section"></div>
    </div>
  )
}

export default Login