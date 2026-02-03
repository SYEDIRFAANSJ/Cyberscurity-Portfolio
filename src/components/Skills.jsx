import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: 'Security Tools',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.121 2.121 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            ),
            skills: ['Nmap', 'Burp Suite', 'Postman', 'FFUF', 'Metasploit', 'Wireshark', 'DirBuster', 'Splunk', 'OWASP ZAP']
        },
        {
            title: 'Cloud & Enterprise',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                </svg>
            ),
            skills: ['Google Workspace Security', 'Microsoft 365 Security', 'Active Directory', 'AWS Basics', 'Azure Basics']
        },
        {
            title: 'Operating Systems',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                    <line x1="8" y1="21" x2="16" y2="21" />
                    <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
            ),
            skills: ['Kali Linux', 'Debian', 'Windows', 'Windows Server']
        },
        {
            title: 'Programming',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            ),
            skills: ['Python', 'Shell Scripting', 'React', 'Node.js']
        },
        {
            title: 'Security Domains',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
            skills: ['VAPT', 'OWASP Top 10', 'SOC Operations', 'SIEM', 'Log Analysis', 'Incident Detection', 'Network Security']
        }
    ];

    const leadershipItems = [
        {
            title: 'Student Management Committee - Head',
            organization: 'Crescent Cybertronics Security Club (CCSC)',
            period: 'June 2025 - Present',
            description: 'Actively organize events, workshops, and technical sessions. Manage club activities, coordinate between members and faculty, fostering innovation and skill development in cybersecurity.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="5" />
                    <path d="M20 21a8 8 0 1 0-16 0" />
                </svg>
            )
        },
        {
            title: 'Technical Committee Member',
            organization: 'BSACIST Cyber Security Club',
            period: 'September 2024 - Present',
            description: 'Design and conduct hands-on workshops, technical sessions, and CTF challenges. Develop technical resources and mentor peers in ethical hacking, penetration testing, and secure coding.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
            )
        },
        {
            title: 'CTF Competitions',
            organization: 'College Events',
            period: 'Ongoing',
            description: 'Organized and conducted Capture The Flag (CTF) competitions at college level, challenging participants with real-world security scenarios.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                </svg>
            )
        },
        {
            title: 'Security Workshops',
            organization: 'Student Initiatives',
            period: 'Ongoing',
            description: 'Led hands-on workshops teaching ethical hacking basics, web security, and penetration testing techniques to peers.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
            )
        }
    ];

    return (
        <section id="skills" className="skills">
            <div className="container">
                <div className="section-header">
                    <h2>Skills</h2>
                    <p>Technologies and domains I specialize in</p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="skill-category">
                            <div className="category-header">
                                <div className="category-icon">
                                    {category.icon}
                                </div>
                                <h3>{category.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {category.skills.map((skill, i) => (
                                    <span key={i} className="skill-tag" style={{ animationDelay: `${i * 0.1}s` }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Leadership & Responsibilities Section */}
                <div className="leadership-section">
                    <div className="section-header">
                        <h2>Leadership & Responsibilities</h2>
                        <p>Contributing to the cybersecurity community through events and mentorship</p>
                    </div>

                    <div className="leadership-grid">
                        {leadershipItems.map((item, index) => (
                            <div key={index} className="leadership-card">
                                <div className="leadership-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                                <span className="leadership-org">{item.organization}</span>
                                <span className="leadership-period">{item.period}</span>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
