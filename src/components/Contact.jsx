import React from 'react';
import { SOCIALS, PERSONAL_INFO } from '../constants';
import { FiGithub, FiLinkedin, FiMail, FiArrowUpRight } from 'react-icons/fi';

const Contact = () => {
    const getIcon = (name) => {
        switch (name.toLowerCase()) {
            case 'github': return <FiGithub />;
            case 'linkedin': return <FiLinkedin />;
            case 'email': return <FiMail />;
            default: return <FiArrowUpRight />;
        }
    };

    return (
        <section id="contact" className="section" style={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="container">
                <h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        lineHeight: 1,
                        marginBottom: '4rem',
                        textAlign: 'center',
                        textTransform: 'uppercase',
                    }}
                >
                    Let's Work<br /><span style={{ color: 'var(--text-secondary)' }}>Together</span>
                </h2>

                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '2rem',
                    flexWrap: 'wrap',
                    maxWidth: '800px',
                    margin: '0 auto'
                }}>
                    {SOCIALS.map((social, index) => (
                        <a
                            key={social.name}
                            href={social.url}
                            className="social-card"
                            style={{
                                flex: '1 1 200px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '3rem 2rem',
                                background: 'var(--surface-color)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '1rem',
                                textDecoration: 'none',
                                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.boxShadow = '0 15px 30px -10px var(--accent-glow)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}>
                                {getIcon(social.name)}
                            </div>
                            <span style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: 'var(--text-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}>
                                {social.name}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Contact;
