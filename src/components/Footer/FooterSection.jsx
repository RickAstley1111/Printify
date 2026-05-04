import "./FooterSection.css";

import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const socialIcons = [
    {
        label: "Facebook",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.93799 7.46094V10.4609H7.18799V15.7109H10.188V10.4609H12.438L13.188 7.46094H10.188V5.96094C10.188 5.76203 10.267 5.57126 10.4077 5.43061C10.5483 5.28996 10.7391 5.21094 10.938 5.21094H13.188V2.21094H10.938C9.94343 2.21094 8.9896 2.60603 8.28634 3.30929C7.58308 4.01255 7.18799 4.96638 7.18799 5.96094V7.46094H4.93799Z" stroke="#BDBDBD" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Instagram",
        icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9.5625 0C11.53 0 13.125 1.59499 13.125 3.5625V9.5625C13.125 11.53 11.53 13.125 9.5625 13.125H3.5625C1.59499 13.125 0 11.53 0 9.5625V3.5625C1.61066e-07 1.59499 1.59499 1.61065e-07 3.5625 0H9.5625ZM3.5625 1.125C2.21631 1.125 1.125 2.21631 1.125 3.5625V9.5625C1.125 10.9087 2.21631 12 3.5625 12H9.5625C10.9087 12 12 10.9087 12 9.5625V3.5625C12 2.21631 10.9087 1.125 9.5625 1.125H3.5625ZM6.5625 3.75C8.1158 3.75 9.375 5.0092 9.375 6.5625C9.375 8.1158 8.1158 9.375 6.5625 9.375C5.0092 9.375 3.75 8.1158 3.75 6.5625C3.75 5.0092 5.0092 3.75 6.5625 3.75ZM6.5625 4.875C5.63052 4.875 4.875 5.63052 4.875 6.5625C4.875 7.49448 5.63052 8.25 6.5625 8.25C7.49448 8.25 8.25 7.49448 8.25 6.5625C8.25 5.63052 7.49448 4.875 6.5625 4.875ZM9.9375 2.625C10.2482 2.625 10.5 2.87782 10.5 3.18848C10.4999 3.49903 10.2481 3.75098 9.9375 3.75098C9.62692 3.75098 9.37512 3.49903 9.375 3.18848C9.375 2.87782 9.62684 2.625 9.9375 2.625Z" fill="#BDBDBD" />
            </svg>
        ),
    },
    {
        label: "Twitter",
        icon: (
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.2271 2.92963C15.4771 3.29713 14.7421 3.44638 13.9771 3.67213C13.1363 2.72338 11.8898 2.67088 10.6921 3.11938C9.4943 3.56788 8.7098 4.66438 8.72705 5.92213V6.67213C6.2933 6.73438 4.1258 5.62588 2.72705 3.67213C2.72705 3.67213 -0.409449 9.24688 5.72705 11.9221C4.32305 12.8574 2.9228 13.4881 1.22705 13.4221C3.70805 14.7744 6.4118 15.2394 8.75255 14.5599C11.4376 13.7799 13.6441 11.7676 14.4908 8.75338C14.7434 7.83663 14.8688 6.88952 14.8636 5.93863C14.8621 5.75188 15.9961 3.85963 16.2271 2.92888V2.92963Z" stroke="#BDBDBD" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    },
    {
        label: "Email",
        icon: (
            <svg width="15" height="12" viewBox="0 0 15 12" fill="none">
                <path d="M12.5625 0C13.7016 0 14.625 0.923413 14.625 2.0625V9.5625C14.625 10.7016 13.7016 11.625 12.5625 11.625H2.0625C0.92344 11.625 0 10.7016 0 9.5625V2.0625C9.66349e-08 0.923433 0.92344 3.24056e-05 2.0625 0H12.5625ZM7.625 7.03027C7.43606 7.15621 7.18893 7.15623 7 7.03027L1.125 3.11328V9.5625C1.125 10.0802 1.54476 10.5 2.0625 10.5H12.5625C13.0803 10.5 13.5 10.0803 13.5 9.5625V3.11328L7.625 7.03027ZM2.0625 1.125C1.64015 1.12503 1.28229 1.40411 1.16504 1.78809L7.3125 5.88574L13.459 1.78809C13.3416 1.40425 12.9848 1.125 12.5625 1.125H2.0625Z" fill="#BDBDBD" />
            </svg>
        ),
    },
];

export default function FooterSection() {
    const { lang } = useLanguage();
    const t = translations[lang];

    const navLinks = [
        t.footerProjects,
        t.footerAbout,
        t.footerTeam,
        t.footerContact,
    ];

    return (
        <footer className="footer-section">
            <div className="footer-section_inner">

                <div className="footer-top">
                    <div className="footer-logo_cell">
                        PRINTIFY
                    </div>

                    <div className="footer-nav_cell">
                        <nav>
                            {navLinks.map((link) => (
                                <a key={link} href="#">{link}</a>
                            ))}
                        </nav>
                    </div>

                    <div className="footer-email_cell">
                        <a href="mailto:abrorbekburxonov2010@gmail.com">
                            abrorbekburxonov2010@gmail.com
                        </a>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">

                    <div className="footer-services_cell">
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                            <path d="..." fill="#D0D5DD" />
                        </svg>
                        <a href="#">{t.services}</a>
                    </div>

                    <div className="footer-social_cell">
                        {socialIcons.map(({ label, icon }) => (
                            <button key={label} className="footer-social_btn" aria-label={label}>
                                {icon}
                            </button>
                        ))}
                    </div>

                    <div className="footer-copy_cell">
                        <p>© 2026 Odinas Design</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}