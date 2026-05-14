import { useState } from "react";
import { createPortal } from "react-dom";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import pencil from "../../assets/pencil.svg";
import calendar from "../../assets/calendar.svg";
import burger from "../../assets/burger-btn.svg";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";
import "./Header.css";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { lang, setLang } = useLanguage();
    const t = translations[lang];

    return (
        <>
            {/* Sidebar rendered via Portal to stay on top of all layers */}
            {createPortal(
                <div className={`header_sidebar ${isOpen ? "open" : ""}`}>
                    <button className="BurgerCancel" onClick={() => setIsOpen(false)}>
                        Close
                    </button>
                    <div className="BurgerLinkList">
                        <NavLink to="/" className="burger_menu_link" onClick={() => setIsOpen(false)}>
                            {t.menu}
                        </NavLink>
                        <NavLink to="/profile" className="burger_menu_link" onClick={() => setIsOpen(false)}>
                            {t.profile}
                        </NavLink>
                        <NavLink to="/shop" className="burger_menu_link" onClick={() => setIsOpen(false)}>
                            {t.products}
                        </NavLink>
                        <NavLink to="/contacts" className="burger_menu_link" onClick={() => setIsOpen(false)}>
                            {t.contacts}
                        </NavLink>
                    </div>
                </div>,
                document.body
            )}

            <header className="header-wrapper">
                {/* Desktop Logo */}
                <div className="header-logo_box">
                    <img className="header-logo_img" src={logo} alt="Printify Logo" />
                </div>

                <div className="header-top">
                    {/* Mobile Logo Row */}
                    <div className="header-logo_box_res">
                        <img className="header-logo_img" src={logo} alt="Printify Logo" />
                        <span>PRINTIFY</span>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="header-top_buttons">
                        <ul className="header-top_buttons-list">
                            <NavLink to="/" className="header-top_buttons-item">{t.menu}</NavLink>
                            <NavLink to="/profile" className="header-top_buttons-item">{t.profile}</NavLink>
                            <NavLink to="/shop" className="header-top_buttons-item">{t.products}</NavLink>
                            <NavLink to="/contacts" className="header-top_buttons-item">{t.contacts}</NavLink>
                        </ul>
                    </div>

                    {/* Burger Toggle */}
                    <div className="header-top_burger-box" onClick={() => setIsOpen(!isOpen)}>
                        <img className="header-top_burger-img" src={burger} alt="Menu" />
                    </div>

                    {/* Language Selector */}
                    <div className="header-top_lang">
                        <select
                            className="header-top_lang-select"
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                        >
                            <option value="en">EN</option>
                            <option value="uz">UZ</option>
                            <option value="ru">RU</option>
                        </select>
                    </div>
                </div>

                {/* Bottom Row */}
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
        </>
    );
}