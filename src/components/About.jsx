import React from 'react';
import { PERSONAL_INFO } from '../constants';

const About = () => {
    return (
        <section id="about" className="section" style={{ position: 'relative' }}>
            <div className="container">
                <div
                    className="glass"
                    style={{
                        padding: 'clamp(1.5rem, 5vw, 4rem)',
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 'clamp(2rem, 5vw, 4rem)',
                        maxWidth: '1000px',
                        margin: '0 auto',
                        flexWrap: 'wrap'
                    }}
                >
                    {/* Profile Image / Abstract Shape */}
                    <div
                        style={{
                            flex: '1 1 300px',
                            height: '300px',
                            background: 'linear-gradient(45deg, var(--accent-color), #818cf8)',
                            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 40px rgba(56, 189, 248, 0.4)',
                            animation: 'float 6s ease-in-out infinite'
                        }}
                    >
                        {/* Placeholder for real image later */}
                        <span style={{ fontSize: '5rem', color: 'rgba(255,255,255,0.8)' }}>
                            {PERSONAL_INFO.name.charAt(0)}
                        </span>
                    </div>

                    <div style={{ flex: '2 1 400px' }}>
                        <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>About Me</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            {PERSONAL_INFO.bio}
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            I focus on delivering high-quality, robust solutions that solve real-world problems.
                            With a strong foundation in modern web technologies, I love tackling complex challenges
                            and turning ideas into reality.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
