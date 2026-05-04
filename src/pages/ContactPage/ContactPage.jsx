import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message Sent:", formData);
        alert("Xabaringiz yuborildi! Tez orada javob beramiz.");
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact_page">
            <div className='container'>
                <Header />
            </div>


            <main className="container contactCont">
                <header className="contact_header reveal-on-scroll">
                    <span className="contact_label">Contact</span>
                    <h1>Let’s build something <br /> <span className="highlight_lime">extraordinary</span> together.</h1>
                </header>

                <div className="contact_content">
                    {/* Contact Info */}
                    <div className="contact_info reveal-on-scroll">
                        <div className="info_block">
                            <h3>Email Me</h3>
                            <p>abrorbekburxonov2010@gmail.com</p>
                        </div>
                        <div className="info_block">
                            <h3>Location</h3>
                            <p>Tashkent, Uzbekistan</p>
                        </div>
                        <div className="info_block">
                            <h3>Socials</h3>
                            <div className="social_links">
                                <a href="#">Telegram</a>
                                <a href="#">Instagram</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className="contact_form reveal-on-scroll" onSubmit={handleSubmit}>
                        <div className="input_group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Ismingizni kiriting"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="input_group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Emailingizni kiriting"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="input_group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Loyiha haqida yozing..."
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit_btn">Send Message ↗</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default ContactPage;