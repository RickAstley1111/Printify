import { useNavigate } from "react-router-dom";
import "./Hero.css";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const Hero = () => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <div className="hero">
      {/* Background Stripes with staggered animation delay */}
      <div className="stripes">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="stripe"
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>

      {/* Main Title Section */}
      <h1 className="title">
        {t.heroTitle1} <br />
        {t.heroTitle2}
        <br />
        <span>PRINTIFY</span>
      </h1>

      {/* Glassmorphism Content Panel */}
      <div className="glass-panel">
        <div className="glass-panel-inner">
          <div className="glass-panel-content">
            <p>{t.heroDesc}</p>

            <div className="panel-buttons">
              <button
                className="panel-btn primary"
                onClick={() => navigate("/login")}
              >
                {t.login}
              </button>

              <button
                className="panel-btn secondary"
                onClick={() => navigate("/register")}
              >
                {t.register}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;