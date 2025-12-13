import React, { useRef, useEffect } from 'react';
import { EXPERIENCE } from '../constants';
import { gsap } from 'gsap';

const Experience = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.experience-item',
            { y: 30, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 75%'
                }
            }
        );
    }, []);

    return (
        <section id="experience" className="section" ref={containerRef}>
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
                    Experience
                </h2>

                <div>
                    {EXPERIENCE.map((job, index) => (
                        <div
                            key={index}
                            className="experience-item"
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: '1rem',
                                marginBottom: '2rem',
                                background: 'var(--surface-color)',
                                padding: '2.5rem',
                                borderRadius: '1rem',
                                border: '1px solid var(--glass-border)',
                                transition: 'transform 0.3s ease',
                                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-5px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                            }}
                        >
                            <div>
                                <span
                                    style={{
                                        fontFamily: 'var(--font-display)',
                                        fontSize: '1.2rem',
                                        color: 'var(--text-secondary)',
                                        fontWeight: 500,
                                        minWidth: '150px',
                                        display: 'inline-block'
                                    }}
                                >
                                    {job.period}
                                </span>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{job.role}</h3>
                                <h4 style={{ fontSize: '1.1rem', color: 'var(--accent-color)', marginBottom: '1rem' }}>{job.company}</h4>
                                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>{job.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
