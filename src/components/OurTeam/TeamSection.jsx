import abror from "../../assets/Abror.png";
import toxirov from "../../assets/Sheeevaa.png";
import adash from "../../assets/sheva.png"
import "./OurTeam.css";

import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const teamMembers = [
    { name: "Toxirov MuhammadYusuf", role: "Front-End developer", image: toxirov },
    { name: "Abrorbek Burxonov", role: "Founder & CEO", image: abror },
    { name: "Murodov MuhammadYusuf", role: "Back-End developer", image:  adash },
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