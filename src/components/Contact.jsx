import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus('');

        // EmailJS Configuration - Replace with your credentials
        // Sign up at https://www.emailjs.com/ (free 200 emails/month)
        const SERVICE_ID = 'service_Portfolio';      // Get from EmailJS Dashboard
        const TEMPLATE_ID = 'template_dka9pzo';    // Get from EmailJS Dashboard  
        const PUBLIC_KEY = 'x4AySbig4nrhA5u83';      // Get from EmailJS Dashboard

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setIsSubmitting(false);
            })
            .catch((error) => {
                console.error('Email failed:', error.text);
                setStatus('error');
                setIsSubmitting(false);
            });
    };

    const contactInfo = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email',
            value: 'Syedirfaan643@gmail.com',
            link: 'mailto:Syedirfaan643@gmail.com'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'linkedin.com/in/syedirfaan',
            link: 'https://www.linkedin.com/in/syedirfaan'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
            ),
            label: 'GitHub',
            value: 'GitHub Profile',
            link: 'https://github.com/SYEDIRFAANSJ'
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                </svg>
            ),
            label: 'Location',
            value: 'Chennai, Tamil Nadu',
            link: null
        }
    ];

    return (
        <section id="contact" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Get In Touch</h2>
                    <p>Let's discuss security projects, opportunities, or collaboration</p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities in cybersecurity.</p>

                        <div className="contact-items">
                            {contactInfo.map((item, index) => (
                                <div key={index} className="contact-item">
                                    <div className="contact-icon">
                                        {item.icon}
                                    </div>
                                    <div className="contact-details">
                                        <span className="contact-label">{item.label}</span>
                                        {item.link ? (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span>{item.value}</span>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="contact-decorations">
                            <div className="decoration-line"></div>
                            <div className="decoration-dot"></div>
                            <div className="decoration-line"></div>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">
                                    <span className="label-text">Name</span>
                                    <span className="label-required">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">
                                    <span className="label-text">Email</span>
                                    <span className="label-required">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">
                                    <span className="label-text">Message</span>
                                    <span className="label-required">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="22" y1="2" x2="11" y2="13" />
                                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                                </svg>
                            </button>

                            {status === 'success' && (
                                <div className="form-status success">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="form-status error">
                                    ✗ Failed to send message. Please try again or email directly.
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
