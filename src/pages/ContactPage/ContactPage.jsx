import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import { useLanguage } from '../../LanguageContext';
import { translations } from '../../i18n';
import './ContactPage.css';

const ContactPage = () => {
    const { lang } = useLanguage();
    const t = translations[lang];
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('is-visible');
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = t.fillField;
        if (!formData.email.trim()) newErrors.email = t.fillField;
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = t.invalidEmail;
        if (!formData.message.trim()) newErrors.message = t.fillField;
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert(t.messageSent);
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field]) setErrors({ ...errors, [field]: null });
    };

    return (
        <div className="contact_page">
            <div className='container'><Header /></div>

            <main className="container contactCont">
                <header className="contact_header reveal-on-scroll">
                    <span className="contact_label">{t.contactLabel}</span>
                    <h1>{t.contactTitle1} <br /> <span className="highlight_lime">{t.contactTitle2}</span> {t.contactTitle3}</h1>
                </header>

                <div className="contact_content">
                    <div className="contact_info reveal-on-scroll">
                        <div className="info_card">
                            <div className="info_icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                            </div>
                            <div className="info_text">
                                <h3>{t.emailMe}</h3>
                                <p>abrorbekburxonov2010@gmail.com</p>
                            </div>
                        </div>
                        <div className="info_card">
                            <div className="info_icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                            </div>
                            <div className="info_text">
                                <h3>{t.location}</h3>
                                <p>Tashkent, Uzbekistan</p>
                            </div>
                        </div>
                        <div className="info_card">
                            <div className="info_icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                            </div>
                            <div className="info_text">
                                <h3>{t.socials}</h3>
                                <div className="social_links">
                                    <a href="#">Telegram</a>
                                    <a href="#">Instagram</a>
                                    <a href="#">LinkedIn</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact_form reveal-on-scroll" onSubmit={handleSubmit} noValidate>
                        <div className="input_group">
                            <label>{t.fullName}</label>
                            <input
                                type="text"
                                placeholder={t.enterName}
                                value={formData.name}
                                onChange={(e) => handleChange(e, 'name')}
                                className={errors.name ? 'error_input' : ''}
                            />
                            {errors.name && <span className="error_message">{errors.name}</span>}
                        </div>
                        <div className="input_group">
                            <label>{t.email}</label>
                            <input
                                type="email"
                                placeholder={t.enterEmailAddr}
                                value={formData.email}
                                onChange={(e) => handleChange(e, 'email')}
                                className={errors.email ? 'error_input' : ''}
                            />
                            {errors.email && <span className="error_message">{errors.email}</span>}
                        </div>
                        <div className="input_group">
                            <label>{t.message}</label>
                            <textarea
                                rows="5"
                                placeholder={t.writeMessage}
                                value={formData.message}
                                onChange={(e) => handleChange(e, 'message')}
                                className={errors.message ? 'error_input' : ''}
                            ></textarea>
                            {errors.message && <span className="error_message">{errors.message}</span>}
                        </div>
                        <button type="submit" className="submit_btn">{t.sendMessage}</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;