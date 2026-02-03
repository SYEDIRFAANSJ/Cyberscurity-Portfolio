import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [displayText, setDisplayText] = useState('');
    const [showCursor, setShowCursor] = useState(true);
    const fullText = 'Offensive Security Engineer & Penetration Tester';

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index <= fullText.length) {
                setDisplayText(fullText.slice(0, index));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        const cursorTimer = setInterval(() => {
            setShowCursor((prev) => !prev);
        }, 500);

        return () => {
            clearInterval(timer);
            clearInterval(cursorTimer);
        };
    }, []);

    return (
        <section id="hero" className="hero">
            {/* Floating particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${10 + Math.random() * 20}s`
                    }}></div>
                ))}
            </div>

            {/* Glowing orbs */}
            <div className="glow-orb orb-1"></div>
            <div className="glow-orb orb-2"></div>
            <div className="glow-orb orb-3"></div>

            <div className="hero-container">
                {/* Profile Image Section */}
                <div className="hero-image-section">
                    <div className="image-wrapper">
                        <div className="avatar-circle"></div>
                        <img
                            src="/profile.png"
                            alt="Syed Irfaan S J"
                            className="profile-photo"
                        />
                    </div>
                    {/* Rotating rings */}
                    <div className="orbit-ring ring-1"></div>
                    <div className="orbit-ring ring-2"></div>
                    <div className="orbit-ring ring-3"></div>
                </div>

                {/* Hero Content */}
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        <span>Available for Opportunities</span>
                        <span className="badge-icon"></span>
                    </div>

                    <h1 className="hero-name">
                        <span className="greeting">Hello, I'm</span>
                        <span className="name-highlight">
                            SYED IRFAAN
                            <span className="name-underline"></span>
                        </span>
                    </h1>

                    <div className="hero-title">
                        <span className="terminal-prompt">$</span>
                        <span className="typing-text">{displayText}</span>
                        <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
                    </div>

                    <p className="hero-description">
                        Cybersecurity professional with hands-on experience in penetration testing,
                        vulnerability analysis, and security automation. Focused on improving
                        organizational security posture through practical and scalable solutions.
                    </p>

                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">3</span>
                            <span className="stat-label">PROJECTS</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">2</span>
                            <span className="stat-label">INTERNSHIPS</span>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number">CPT</span>
                            <span className="stat-label">CERTIFIED</span>
                        </div>
                    </div>

                    <div className="hero-cta">
                        <a href="#projects" className="btn btn-primary btn-glow">
                            <span>View Projects</span>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        <a href="/SYEDIRFAAN-RESUME (2).pdf" download="SyedIrfaan_Resume.pdf" className="btn btn-secondary btn-resume">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                <polyline points="7 10 12 15 17 10" />
                                <line x1="12" y1="15" x2="12" y2="3" />
                            </svg>
                            <span>Download Resume</span>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <span>Get In Touch</span>
                        </a>
                        <a href="https://www.linkedin.com/in/syedirfaan" target="_blank" rel="noopener noreferrer" className="btn btn-icon">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect x="2" y="9" width="4" height="12" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <span>Scroll to explore</span>
                <div className="scroll-arrow">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M19 12l-7 7-7-7" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
