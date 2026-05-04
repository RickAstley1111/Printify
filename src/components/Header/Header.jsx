import { useState } from "react";
import logo from "../../assets/logo.svg";
import pencil from "../../assets/pencil.svg";
import calendar from "../../assets/calendar.svg";
import burger from "../../assets/burger-btn.svg";
import "./Header.css";
import { NavLink } from "react-router-dom";

import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

export default function Header() {
    const [isOpen, setIsOpen] = useState(true);

    const { lang, setLang } = useLanguage();
    const t = translations[lang];

    return (
        <header className="header-wrapper">

            <div className="header-logo_box">
                <img className="header-logo_img" src={logo} alt="" />
            </div>

            <div className="header-top">

                <div className="header-logo_box_res">
                    <img className="header-logo_img" src={logo} alt="" />
                    <span>PRINTIFY</span>
                </div>

                <div className="header-top_buttons">
                    <ul className={`header-top_buttons-list ${isOpen ? "active" : ""}`}>
                        <NavLink to="/" className="header-top_buttons-item">{t.menu}</NavLink>
                        <NavLink to="/profile" className="header-top_buttons-item">{t.profile}</NavLink>
                        <NavLink to="/shop" className="header-top_buttons-item">{t.products}</NavLink>
                        <NavLink to="/contacts" className="header-top_buttons-item">{t.contacts}</NavLink>
                    </ul>
                </div>

                <div className="header-top_burger-box" onClick={() => setIsOpen(!isOpen)}>
                    <img className="header-top_burger-img" src={burger} alt="" />
                </div>

                <div className="header-top_lang">
                    <select
                        className="header-top_lang-select"
                        value={lang}
                        onChange={(e) => setLang(e.target.value)}
                    >
                        <option value="en">   EN   </option>
                        <option value="uz">   UZ   </option>
                        <option value="ru">   RU   </option>
                    </select>
                </div>

            </div>

            <div className="header-bottom">

                <div className="header-bottom_services">
                    <div className="header-bottom_services-box">
                        <img className="header-bottom_services-img" src={pencil} alt="" />
                        <p className="header-bottom_services-text">{t.services}</p>
                    </div>
                </div>

                <div className="header-bottom_touch">
                    <div className="header-bottom_touch-box">
                        <img className="header-bottom_touch-img" src={calendar} alt="" />
                        <p className="header-bottom_touch-text">{t.getInTouch}</p>
                    </div>
                </div>

            </div>

        </header>
    );
}