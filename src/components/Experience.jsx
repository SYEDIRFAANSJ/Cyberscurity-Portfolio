import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            title: 'Research Security Intern',
            company: 'DigiAlert',
            period: 'July 2025 - September 2025',
            description: 'Conducted web application and network penetration testing using Burp Suite, Nmap, and Postman. Assisted in red team assessments, vulnerability analysis, and remediation validation. Developed Google Workspace security monitoring solution.',
            type: 'work',
            link: 'https://www.linkedin.com/posts/syedirfaan_internshipcompletion-cybersecurity-ctf-activity-7373793809111072768-E2vA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeSUkcBEWjINflXPMC2fCmz5GePIcLIrMA'
        },
        {
            title: 'Cyber Security Specialist Intern',
            company: 'Intrainz Innovation',
            period: 'May 2024 - July 2024',
            description: 'Conducted vulnerability scans and penetration testing. Identified and reported security flaws in web applications and network endpoints. Gained expertise with Kali Linux and Burp Suite.',
            type: 'work'
        }
    ];

    const getTypeIcon = (type) => {
        switch (type) {
            case 'work':
                return (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <section id="experience" className="experience">
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p>My professional journey in cybersecurity</p>
                </div>

                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className={`timeline-item ${exp.type}`}>
                            <div className="timeline-marker">
                                <div className="marker-icon">
                                    {getTypeIcon(exp.type)}
                                </div>
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    {exp.link ? (
                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} onMouseEnter={(e) => e.target.style.color = 'var(--cyber-green)'} onMouseLeave={(e) => e.target.style.color = 'inherit'}>{exp.title}</h3>
                                        </a>
                                    ) : (
                                        <h3>{exp.title}</h3>
                                    )}
                                    <span className="timeline-period">{exp.period}</span>
                                </div>
                                <span className="timeline-company">{exp.company}</span>
                                <p className="timeline-description">{exp.description}</p>
                                <span className={`timeline-type-badge ${exp.type}`}>
                                    {exp.type.charAt(0).toUpperCase() + exp.type.slice(1)}
                                </span>
                            </div>
                        </div>
                    ))}
                    {/* Timeline End Marker */}
                    <div className="timeline-end">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z" />
                            <path d="M2 17l10 5 10-5" />
                            <path d="M2 12l10 5 10-5" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
