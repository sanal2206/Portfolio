import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
    return (
        <section id="skills" className="section">
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
                    Technical Skills
                </h2>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '2rem',
                        justifyItems: 'center'
                    }}
                >
                    {SKILLS.map((skill, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem',
                                background: `linear-gradient(135deg, var(--surface-color) 0%, ${skill.color}15 100%)`, // Subtle gradient tint
                                border: `1px solid ${skill.color}40`, // Visible colored border
                                padding: '2rem',
                                borderRadius: '1rem',
                                width: '100%',
                                transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                                cursor: 'default',
                                boxShadow: `0 4px 20px -10px ${skill.color}20` // Default soft glow
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)';
                                e.currentTarget.style.borderColor = skill.color;
                                e.currentTarget.style.background = `linear-gradient(135deg, var(--surface-color) 0%, ${skill.color}30 100%)`; // Increase tint
                                e.currentTarget.style.boxShadow = `0 15px 30px -10px ${skill.color}60`; // Brighter glow
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.borderColor = `${skill.color}40`;
                                e.currentTarget.style.background = `linear-gradient(135deg, var(--surface-color) 0%, ${skill.color}15 100%)`;
                                e.currentTarget.style.boxShadow = `0 4px 20px -10px ${skill.color}20`;
                            }}
                        >
                            <div
                                style={{
                                    fontSize: '3rem',
                                    color: skill.color,
                                    filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
                                }}
                            >
                                <skill.icon />
                            </div>
                            <span
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '1rem',
                                    fontWeight: 500,
                                    color: 'var(--text-primary)'
                                }}
                            >
                                {skill.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
