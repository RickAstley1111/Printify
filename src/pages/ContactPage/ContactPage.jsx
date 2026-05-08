import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
import './ContactPage.css';

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
<<<<<<< HEAD
=======
    const [errors, setErrors] = useState({});
>>>>>>> 93dbea5 (Updated project files)

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

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Message Sent:", formData);
        alert("Xabaringiz yuborildi! Tez orada javob beramiz.");
        setFormData({ name: '', email: '', message: '' });
=======
    const validateForm = () => {
        let newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Please fill out this field.";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Please fill out this field.";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Please fill out this field.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Message Sent:", formData);
            alert("Xabaringiz yuborildi! Tez orada javob beramiz.");
            setFormData({ name: '', email: '', message: '' });
            setErrors({});
        }
    };

    const handleChange = (e, field) => {
        setFormData({ ...formData, [field]: e.target.value });
        if (errors[field]) {
            setErrors({ ...errors, [field]: null });
        }
>>>>>>> 93dbea5 (Updated project files)
    };

    return (
        <div className="contact_page">
            <div className='container'>
                <Header />
            </div>

<<<<<<< HEAD

=======
>>>>>>> 93dbea5 (Updated project files)
            <main className="container contactCont">
                <header className="contact_header reveal-on-scroll">
                    <span className="contact_label">Contact</span>
                    <h1>Let’s build something <br /> <span className="highlight_lime">extraordinary</span> together.</h1>
                </header>

                <div className="contact_content">
<<<<<<< HEAD
                    {/* Contact Info */}
=======

>>>>>>> 93dbea5 (Updated project files)
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

<<<<<<< HEAD
                    {/* Contact Form */}
                    <form className="contact_form reveal-on-scroll" onSubmit={handleSubmit}>
=======
                    <form className="contact_form reveal-on-scroll" onSubmit={handleSubmit} noValidate>
>>>>>>> 93dbea5 (Updated project files)
                        <div className="input_group">
                            <label>Full Name</label>
                            <input
                                type="text"
                                placeholder="Ismingizni kiriting"
                                value={formData.name}
<<<<<<< HEAD
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
=======
                                onChange={(e) => handleChange(e, 'name')}
                                className={errors.name ? 'error_input' : ''}
                            />
                            {errors.name && <span className="error_message">{errors.name}</span>}
>>>>>>> 93dbea5 (Updated project files)
                        </div>
                        <div className="input_group">
                            <label>Email Address</label>
                            <input
                                type="email"
                                placeholder="Emailingizni kiriting"
                                value={formData.email}
<<<<<<< HEAD
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
=======
                                onChange={(e) => handleChange(e, 'email')}
                                className={errors.email ? 'error_input' : ''}
                            />
                            {errors.email && <span className="error_message">{errors.email}</span>}
>>>>>>> 93dbea5 (Updated project files)
                        </div>
                        <div className="input_group">
                            <label>Message</label>
                            <textarea
                                rows="5"
                                placeholder="Loyiha haqida yozing..."
                                value={formData.message}
<<<<<<< HEAD
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                            ></textarea>
=======
                                onChange={(e) => handleChange(e, 'message')}
                                className={errors.message ? 'error_input' : ''}
                            ></textarea>
                            {errors.message && <span className="error_message">{errors.message}</span>}
>>>>>>> 93dbea5 (Updated project files)
                        </div>
                        <button type="submit" className="submit_btn">Send Message ↗</button>
                    </form>
                </div>
            </main>
        </div>
    );
};

<<<<<<< HEAD
export default ContactPage;
=======
export default ContactPage;
>>>>>>> 93dbea5 (Updated project files)
