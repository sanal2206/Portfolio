import React from 'react';
import { EDUCATION } from '../constants';

const Education = () => {
    return (
        <section id="education" className="section">
            <div className="container" style={{ maxWidth: '1000px' }}>
                <h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        marginBottom: '4rem',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }}
                >
                    Education
                </h2>

                <div style={{ display: 'grid', gap: '2rem' }}>
                    {EDUCATION.map((edu, index) => (
                        <div
                            key={index}
                            style={{
                                background: 'var(--surface-color)',
                                border: '1px solid var(--glass-border)',
                                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                                borderRadius: '1rem',
                                display: 'flex',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                alignItems: 'center',
                                transition: 'all 0.3s ease',
                                cursor: 'default'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 600 }}>{edu.institution}</h3>
                                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>{edu.degree}</p>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ display: 'block', color: 'var(--accent-color)', fontWeight: 600, fontSize: '1.1rem' }}>{edu.period}</span>
                                {edu.score && <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'block' }}>Score: {edu.score}</span>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
