import ctaBg from "../../assets/CTABG.png";
import "./CTASection.css";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

export default function CTASection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="cta-section">
      <div className="container"> {/* Markazlashtirish uchun container qo'shildi */}
        <div className="cta-section_box">
          <img className="cta-section_bg" src={ctaBg} alt="Background" />

          <div className="cta-section_content">
            <h2 className="cta-section_heading">{t.ctaTitle}</h2>
            <p className="cta-section_sub">{t.ctaDesc}</p>

            <button className="cta-section_btn">
              {t.donate}
              <span style={{ fontSize: '20px' }}>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}