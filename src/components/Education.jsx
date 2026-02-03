import './Education.css';

const Education = () => {
    const education = [
        {
            degree: 'Bachelor of Technology in Cybersecurity',
            institution: 'B.S. Abdur Rahaman Crescent Institute of Science and Technology',
            period: '2022 - 2026 (Present)',
            status: 'In Progress',
            icon: '🎓'
        },
        {
            degree: 'Certified Penetration Tester Training',
            institution: 'Red Team Hacker Academy',
            period: 'July 2024 - December 2024',
            status: 'Completed',
            description: 'Focused training in penetration testing, ethical hacking, and advanced security techniques. Hands-on experience with vulnerability identification, security assessments, and exploitation techniques.',
            icon: '🛡️'
        },
        {
            degree: 'Matriculation & Higher Secondary',
            institution: "St. Joseph's Matriculation Higher Secondary School, Acharapakkam",
            period: 'Completed',
            status: 'Completed',
            icon: '🏫'
        }
    ];

    const certifications = [
        {
            name: 'Certified Penetration Tester (CPT)',
            issuer: 'Red Team Hacker Academy',
            icon: '🛡️',
            link: 'https://drive.google.com/file/d/1zUy3HglFB5c_rA_TsJ8ZQjmz1k9rNVAd/view'
        },
        {
            name: 'Network Basics',
            issuer: 'Cisco Networking Academy',
            icon: '🌐',
            link: 'https://www.credly.com/earner/earned/badge/e9b9a3ad-5bcc-485f-a5eb-ba6e09f11d7e'
        },
        {
            name: 'EC-Council Dark Web, Anonymity, and Cryptocurrency',
            issuer: 'EC-Council',
            icon: '🔐',
            link: 'https://codered.eccouncil.org/certificate/5d10c5ce-443d-448e-b13b-d0c490235c80?logged=true'
        },
        {
            name: 'Tata Cybersecurity Analyst Job Simulation',
            issuer: 'Tata Group',
            icon: '💼',
            link: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_sy3N5DDrkctiKYDHz_1753858904767_completion_certificate.pdf'
        }
    ];

    return (
        <section id="education" className="education">
            <div className="container">
                <div className="section-header">
                    <h2>Education & Certifications</h2>
                    <p>My academic background and credentials</p>
                </div>

                <div className="education-grid">
                    <div className="education-section">
                        <h3 className="subsection-title">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                                <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                            </svg>
                            Education
                        </h3>
                        {education.map((edu, index) => (
                            <div key={index} className="education-card">
                                <div className="edu-icon">
                                    <span>{edu.icon}</span>
                                </div>
                                <div className="edu-content">
                                    <h4>{edu.degree}</h4>
                                    <p className="institution">{edu.institution}</p>
                                    {edu.description && (
                                        <p className="edu-description">{edu.description}</p>
                                    )}
                                    <div className="edu-meta">
                                        <span className="period">{edu.period}</span>
                                        <span className={`status ${edu.status === 'In Progress' ? 'in-progress' : 'completed'}`}>
                                            {edu.status}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="certifications-section">
                        <h3 className="subsection-title">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="8" r="7" />
                                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                            </svg>
                            Certifications
                        </h3>
                        <div className="cert-grid">
                            {certifications.map((cert, index) => (
                                <a
                                    key={index}
                                    href={cert.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card"
                                >
                                    <div className="cert-icon">{cert.icon}</div>
                                    <div className="cert-content">
                                        <h4>{cert.name}</h4>
                                        <p>{cert.issuer}</p>
                                    </div>
                                    <div className="cert-arrow">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M7 17L17 7" />
                                            <path d="M7 7h10v10" />
                                        </svg>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
