import ServiceItem from "./ServicesItem";
import bottomRightIcon from "../../assets/bottomR.png";
import hero1 from "../../assets/hero-1.png";
import hero2 from "../../assets/hero-2.png";
import hero3 from "../../assets/hero-3.png";
import hero4 from "../../assets/hero-4.png";
import hero5 from "../../assets/hero-5.png";
import "./ServicesSection.css";

import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

export default function ServicesSection() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const services = [
    { id: 1, image: hero1, title: t.service1, description: t.service1desc },
    { id: 2, image: hero2, title: t.service2, description: t.service2desc },
    { id: 3, image: hero3, title: t.service3, description: t.service3desc },
    { id: 4, image: hero4, title: t.service4, description: t.service4desc },
    { id: 5, image: hero5, title: t.service5, description: t.service5desc },
  ];

  return (
    <section className="services-section">

      <div className="services-header">
        <div className="services-header_inner">
          <img src={bottomRightIcon} alt="" width="32" height="32" />
          <p className="services-header_title">{t.ourServices}</p>
        </div>
      </div>

      <div className="services-list">
        {services.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>

    </section>
  );
}