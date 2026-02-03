import './About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about-bg-elements">
                <div className="bg-gradient"></div>
                <div className="bg-grid"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-tag">// ABOUT ME</span>
                    <h2>About Me</h2>
                    <p>Passionate about breaking and securing systems</p>
                </div>

                <div className="about-content">
                    <div className="about-terminal">
                        <div className="terminal-header">
                            <div className="terminal-buttons">
                                <span className="terminal-btn red"></span>
                                <span className="terminal-btn yellow"></span>
                                <span className="terminal-btn green"></span>
                            </div>
                            <span className="terminal-title">irfaan@security:~</span>
                            <div className="terminal-controls">
                                <span className="control-icon">_</span>
                                <span className="control-icon">□</span>
                                <span className="control-icon">×</span>
                            </div>
                        </div>
                        <div className="terminal-body">
                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">whoami</span>
                            </div>
                            <div className="terminal-output large">
                                <span className="output-text cyber-green">SYED IRFAAN S J</span>
                            </div>
                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">cat about.txt</span>
                            </div>
                            <div className="terminal-output">
                                <p>
                                    I'm a passionate <span className="highlight">Cybersecurity Student</span> with
                                    hands-on experience in <span className="highlight blue">Offensive Security Engineering</span>,
                                    <span className="highlight purple">Red Teaming</span>, and <span className="highlight">Web Application Penetration Testing</span>.
                                </p>
                                <p>
                                    I specialize in identifying vulnerabilities and simulating real-world attack
                                    scenarios to help organizations strengthen their defenses.
                                </p>
                            </div>
                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="command">./show_expertise.sh</span>
                            </div>
                            <div className="terminal-output">
                                <div className="expertise-grid">
                                    <p className="list-item"><span className="arrow">→</span> Certified Penetration Tester (CPT)</p>
                                    <p className="list-item"><span className="arrow">→</span> Burp Suite, Nmap, Wireshark, Metasploit</p>
                                    <p className="list-item"><span className="arrow">→</span> Python scripting and automation</p>
                                    <p className="list-item"><span className="arrow">→</span> OWASP Top 10 vulnerabilities</p>
                                </div>
                            </div>
                            <div className="terminal-line">
                                <span className="prompt">$</span>
                                <span className="cursor">_</span>
                            </div>
                        </div>
                    </div>

                    <div className="about-cards">
                        <div className="about-card card-green">
                            <div className="card-glow"></div>
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <h3>Offensive Security</h3>
                            <p>Penetration testing, red team operations, and vulnerability exploitation</p>
                            <div className="card-footer">
                                <span className="card-tag">VAPT</span>
                                <span className="card-tag">Red Team</span>
                            </div>
                        </div>

                        <div className="about-card card-blue">
                            <div className="card-glow"></div>
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                    <line x1="8" y1="21" x2="16" y2="21" />
                                    <line x1="12" y1="17" x2="12" y2="21" />
                                </svg>
                            </div>
                            <h3>Web Security</h3>
                            <p>Web application testing, API security, and authentication bypass</p>
                            <div className="card-footer">
                                <span className="card-tag">OWASP</span>
                                <span className="card-tag">APIs</span>
                            </div>
                        </div>

                        <div className="about-card card-purple">
                            <div className="card-glow"></div>
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                                </svg>
                            </div>
                            <h3>Cloud Security</h3>
                            <p>Google Workspace, Microsoft 365, AWS and Azure security</p>
                            <div className="card-footer">
                                <span className="card-tag">GCP</span>
                                <span className="card-tag">Azure</span>
                            </div>
                        </div>

                        <div className="about-card card-red">
                            <div className="card-glow"></div>
                            <div className="card-icon">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="16 18 22 12 16 6" />
                                    <polyline points="8 6 2 12 8 18" />
                                </svg>
                            </div>
                            <h3>Automation</h3>
                            <p>Python scripting, security tools, and SIEM integration</p>
                            <div className="card-footer">
                                <span className="card-tag">Python</span>
                                <span className="card-tag">SIEM</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
