import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'AI-Integrated Active Directory Security Monitoring',
            description: 'Built an Active Directory lab environment to simulate enterprise authentication and security events. Integrated ML-based anomaly detection and LLM-assisted log analysis with automated response recommendations.',
            technologies: ['Windows Server', 'Active Directory', 'Python', 'ML', 'LLM', 'Linux'],
            features: [
                'Enterprise authentication simulation',
                'Windows security log processing with Winlogbeat',
                'MCP server for ML orchestration',
                'Automated alert triage and response'
            ],
            icon: '🔐',
            color: 'green',
            gradient: 'linear-gradient(135deg, #00ff41 0%, #00cc33 100%)'
        },
        {
            title: 'Google Workspace Security Automation Tool',
            description: 'Developed a centralized dashboard to monitor configurations, MFA compliance, phishing alerts, and email security settings across Google Workspace.',
            technologies: ['React', 'Node.js', 'Google Admin SDK', 'OAuth 2.0', 'Tailwind CSS'],
            features: [
                'Real-time configuration monitoring',
                'MFA compliance tracking',
                'Phishing alert detection',
                'Email security analysis'
            ],
            icon: '☁️',
            color: 'blue',
            gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)'
        },
        {
            title: 'Honeypot Integrated with SIEM',
            description: 'Deployed Cowrie honeypot to capture attacker activity and forwarded logs into Splunk SIEM for centralized monitoring, analysis, and threat intelligence gathering.',
            technologies: ['Cowrie', 'Splunk', 'Linux', 'Python'],
            features: [
                'SSH/Telnet honeypot deployment',
                'Attacker behavior logging',
                'Splunk SIEM integration',
                'Threat pattern analysis'
            ],
            icon: '🍯',
            color: 'purple',
            gradient: 'linear-gradient(135deg, #b347ff 0%, #9333ea 100%)'
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="projects-bg">
                <div className="projects-gradient"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-tag">// MY WORK</span>
                    <h2>Featured Projects</h2>
                    <p>Security solutions I've built from scratch</p>
                </div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className={`project-card ${project.color}`}>
                            <div className="project-card-inner">
                                {/* Card Background Effects */}
                                <div className="card-bg-pattern"></div>
                                <div className="card-gradient-overlay" style={{ background: project.gradient }}></div>

                                {/* Card Header */}
                                <div className="project-header">
                                    <div className="project-icon" style={{ background: project.gradient }}>
                                        <span>{project.icon}</span>
                                    </div>
                                    <div className="project-number">
                                        <span>0{index + 1}</span>
                                    </div>
                                </div>

                                {/* Card Content */}
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                {/* Features */}
                                <div className="project-features">
                                    <h4>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="9 11 12 14 22 4" />
                                            <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                                        </svg>
                                        Key Features
                                    </h4>
                                    <ul>
                                        {project.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="feature-bullet">▹</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Tech Stack */}
                                <div className="project-tech">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="tech-tag">{tech}</span>
                                    ))}
                                </div>

                                {/* Card Decorations */}
                                <div className="card-corner top-left"></div>
                                <div className="card-corner top-right"></div>
                                <div className="card-corner bottom-left"></div>
                                <div className="card-corner bottom-right"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
