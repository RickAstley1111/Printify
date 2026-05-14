import abror from "../../assets/Abror.png";
import toxirov from "../../assets/Sheeevaa.png";
import adash from "../../assets/sheva.png"
import "./OurTeam.css";

import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const teamMembers = [
    {
        name: "Toxirov MuhammadYusuf",
        role: "Front-End developer",
        image: toxirov,
        telegram: "https://t.me/txrv_0",
        instagram: "https://www.instagram.com/tox1rov_3/",
        github: "https://github.com/MuhammadYusuf77",
    },
    {
        name: "Abrorbek Burxonov",
        role: "Founder & CEO",
        image: abror,
        telegram: "https://t.me/AbrorbekBurxonov159",
        instagram: "https://www.instagram.com/abrorbekburhonov/",
        github: "https://github.com/RickAstley1111",
    },
    {
        name: "Murodov MuhammadYusuf",
        role: "Back-End developer",
        image: adash,
        telegram: "https://t.me/MuhammadYusuf_106",
        instagram: "https://www.instagram.com/muhammadyusuf_106/",
        github: "https://github.com/MuhammadYusuf-creator",
    },
];

export default function TeamSection() {
    const { lang } = useLanguage();
    const t = translations[lang];

    return (
        <section className="team-section">
            <div className="team-section_inner">

                <div className="team-section_label">
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g clipPath="url(#clip0_team)">
                            <path
                                d="M7.9987 7.99707L7.9987 15.9971C7.9987 17.0579 8.42013 18.0754 9.17027 18.8255C9.92042 19.5756 10.9378 19.9971 11.9987 19.9971L25.332 19.9971M25.332 19.9971L19.9987 14.6637M25.332 19.9971L19.9987 25.3304"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_team">
                                <rect width="32" height="32" fill="white" transform="matrix(-1 8.74228e-08 8.74228e-08 1 32 0)" />
                            </clipPath>
                        </defs>
                    </svg>

                    <p>{t.ourTeam}</p>
                </div>

                <h2 className="team-section_heading">
                    {t.teamDesc}
                </h2>

                <div className="team-section_grid">
                    {teamMembers.map((member) => (
                        <div key={member.name} className="team-card">
                            <div className="team-card_img-box">
                                <img
                                    className="team-card_img"
                                    src={member.image}
                                    alt={member.name}
                                />
                                <div className="team-card_overlay">
                                    <p className="team-card_overlay-role">{member.role}</p>
                                    <div className="team-card_socials">
                                        <a href={member.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" /></svg>
                                        </a>
                                        <a href={member.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
                                        </a>
                                        <a href={member.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.69 5.41-5.25 5.69.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.73 18.27.5 12 .5z" /></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="team-card_info">
                                <p className="team-card_name">{member.name}</p>
                                <p className="team-card_role">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>



            </div>
        </section>
    );
}