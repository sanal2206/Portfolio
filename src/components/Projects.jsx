import React, { useRef, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const Projects = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo('.project-card',
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 80%'
                }
            }
        );
    }, []);

    return (
        <section id="projects" className="section" ref={containerRef}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <h2
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                        marginBottom: '4rem',
                        textAlign: 'center',
                        textTransform: 'uppercase'
                    }}
                >
                    Selected Works
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                    }}
                >
                    {PROJECTS.map((project, index) => (
                        <div
                            key={index}
                            className="project-card"
                            style={{
                                background: 'var(--surface-color)',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '1rem',
                                padding: '2rem',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                transition: 'all 0.3s ease',
                                height: '100%'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-10px)';
                                e.currentTarget.style.borderColor = 'var(--accent-color)';
                                e.currentTarget.style.boxShadow = '0 20px 40px -15px rgba(0,0,0,0.3)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = 'var(--glass-border)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <h3
                                        style={{
                                            fontFamily: 'var(--font-display)',
                                            fontSize: '1.5rem',
                                            fontWeight: 600,
                                            lineHeight: 1.2
                                        }}
                                    >
                                        {project.title}
                                    </h3>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            fontSize: '1.5rem',
                                            color: 'var(--text-secondary)',
                                            transition: 'color 0.3s'
                                        }}
                                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
                                        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                                    >
                                        <FiGithub />
                                    </a>
                                </div>

                                <p
                                    style={{
                                        color: 'var(--text-secondary)',
                                        fontSize: '1rem',
                                        marginBottom: '1.5rem',
                                        lineHeight: 1.6
                                    }}
                                >
                                    {project.description}
                                </p>
                            </div>

                            <div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tags.map(tag => (
                                        <span
                                            key={tag}
                                            style={{
                                                fontSize: '0.85rem',
                                                background: 'rgba(56, 189, 248, 0.1)',
                                                color: 'var(--accent-color)',
                                                padding: '0.4rem 0.8rem',
                                                borderRadius: '50px',
                                                fontWeight: 500
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
