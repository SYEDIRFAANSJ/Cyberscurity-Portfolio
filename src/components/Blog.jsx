import './Blog.css';

const Blog = () => {
    const blogPosts = [
        {
            title: 'Understanding OWASP Top 10 Vulnerabilities in 2024',
            excerpt: 'A comprehensive guide to the most critical web application security risks and how to prevent them in modern applications.',
            date: 'Jan 15, 2026',
            readTime: '8 min read',
            category: 'Web Security',
            image: '🌐',
            color: 'green'
        },
        {
            title: 'Setting Up Your First Penetration Testing Lab',
            excerpt: 'Step-by-step guide to building a safe and effective home lab for practicing ethical hacking and security testing.',
            date: 'Jan 10, 2026',
            readTime: '12 min read',
            category: 'Tutorials',
            image: '🔧',
            color: 'blue'
        },
        {
            title: 'Active Directory Security: Common Misconfigurations',
            excerpt: 'Exploring the most common Active Directory security issues and how attackers exploit them in enterprise environments.',
            date: 'Jan 5, 2026',
            readTime: '10 min read',
            category: 'Enterprise Security',
            image: '🏢',
            color: 'purple'
        },
        {
            title: 'Introduction to Cloud Security Posture Management',
            excerpt: 'Learn how to monitor and secure your cloud infrastructure across AWS, Azure, and Google Cloud platforms.',
            date: 'Dec 28, 2025',
            readTime: '7 min read',
            category: 'Cloud Security',
            image: '☁️',
            color: 'cyan'
        }
    ];

    return (
        <section id="blog" className="blog">
            <div className="blog-bg">
                <div className="blog-gradient"></div>
            </div>

            <div className="container">
                <div className="section-header">
                    <span className="section-tag">// INSIGHTS</span>
                    <h2>Blog & Articles</h2>
                    <p>Sharing knowledge on cybersecurity, hacking techniques, and security best practices</p>
                    <p className="blog-disclaimer">📚 Articles are based on hands-on labs, projects, and learning experiments.</p>
                </div>

                <div className="blog-grid">
                    {blogPosts.map((post, index) => (
                        <article key={index} className={`blog-card ${post.color}`}>
                            <div className="blog-card-inner">
                                <div className="blog-image">
                                    <span className="blog-emoji">{post.image}</span>
                                    <div className="blog-category">{post.category}</div>
                                </div>

                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <span className="blog-date">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                                <line x1="16" y1="2" x2="16" y2="6" />
                                                <line x1="8" y1="2" x2="8" y2="6" />
                                                <line x1="3" y1="10" x2="21" y2="10" />
                                            </svg>
                                            {post.date}
                                        </span>
                                        <span className="blog-read-time">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="12" r="10" />
                                                <polyline points="12 6 12 12 16 14" />
                                            </svg>
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>

                                    <a href="#" className="blog-link">
                                        <span>Read More</span>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <line x1="5" y1="12" x2="19" y2="12" />
                                            <polyline points="12 5 19 12 12 19" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="blog-cta">
                    <a href="#" className="btn btn-secondary">
                        <span>View All Articles</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
