import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <span className="logo-bracket">&lt;</span>
                            <span className="logo-text">IRFAAN</span>
                            <span className="logo-bracket">/&gt;</span>
                        </a>
                        <p>Offensive Security Engineer & Penetration Tester</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-column">
                            <h4>Navigation</h4>
                            <a href="#about">About</a>
                            <a href="#experience">Experience</a>
                            <a href="#projects">Projects</a>
                        </div>
                        <div className="footer-column">
                            <h4>More</h4>
                            <a href="#skills">Skills</a>
                            <a href="#education">Education</a>
                            <a href="#contact">Contact</a>
                        </div>
                        <div className="footer-column">
                            <h4>Connect</h4>
                            <a href="mailto:Syedirfaan643@gmail.com">Email</a>
                            <a href="https://www.linkedin.com/in/syedirfaan" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://github.com/syedirfaan" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-divider"></div>
                    <div className="footer-info">
                        <p className="copyright">
                            <span className="code-comment">// </span>
                            &copy; {currentYear} Syed Irfaan S J. All rights reserved.
                        </p>
                        <p className="footer-tagline">
                            <span className="terminal-cursor">$</span> Securing the digital world, one vulnerability at a time.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
