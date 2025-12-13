import React, { useEffect, useRef, useState } from 'react';
import { PERSONAL_INFO } from '../constants';
import { gsap } from 'gsap';

const ScrambleText = ({ text, delay = 0 }) => {
    const [display, setDisplay] = useState('');
    const chars = '!<>-_\\/[]{}—=+*^?#________';

    useEffect(() => {
        let interval;
        let counter = 0;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplay(
                    text
                        .split('')
                        .map((char, index) => {
                            if (index < counter) return text[index];
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('')
                );

                counter += 1 / 3;

                if (counter >= text.length) {
                    clearInterval(interval);
                    setDisplay(text);
                }
            }, 30);
        };

        const timer = setTimeout(startScramble, delay * 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [text, delay]);

    return <span>{display}</span>;
}

const Hero = () => {
    const containerRef = useRef(null);
    const subRef = useRef(null);
    const cursorRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(subRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, delay: 1.5, ease: 'power2.out' }
        );

        gsap.to(cursorRef.current, {
            opacity: 0,
            repeat: -1,
            yoyo: true,
            duration: 0.5,
            ease: 'steps(1)'
        });

        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            const x = (clientX / window.innerWidth - 0.5) * 20;
            const y = (clientY / window.innerHeight - 0.5) * 20;

            gsap.to(containerRef.current, {
                x: x,
                y: y,
                duration: 2,
                ease: 'power2.out'
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section
            style={{
                minHeight: '100vh',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                padding: 'clamp(6rem, 10vh, 8rem) clamp(1.5rem, 5vw, 4rem) 2rem' // Responsive padding
            }}
        >
            <div ref={containerRef} style={{ textAlign: 'center', zIndex: 2, width: '100%', maxWidth: '1400px' }}>
                <h1
                    style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(2.5rem, 8vw, 8rem)', // Reduced from 4rem/12vw/10rem to better fit laptops
                        fontWeight: 800,
                        lineHeight: 1.1, // Increased line height slightly
                        textTransform: 'uppercase',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%'
                    }}
                >
                    <div style={{ overflow: 'hidden' }}>
                        <span style={{ display: 'block' }}>
                            <ScrambleText text="SOFTWARE" delay={0.2} />
                        </span>
                    </div>

                    <div style={{
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.2em', // Use em for responsive gap
                        flexWrap: 'wrap', // Allow wrap on very small screens
                        justifyContent: 'center'
                    }}>
                        <span
                            style={{
                                display: 'block',
                                color: 'transparent',
                                WebkitTextStroke: '1px var(--accent-color)', // Reduced stroke width for cleaner look on small screens
                                opacity: 0.8
                            }}
                        >
                            <ScrambleText text="DEVELOPER" delay={0.8} />
                        </span>
                        <span
                            ref={cursorRef}
                            style={{
                                display: 'inline-block',
                                width: '0.15em', // Responsive width
                                height: '0.8em', // Responsive height
                                backgroundColor: 'var(--accent-color)',
                                marginTop: '0.1em'
                            }}
                        />
                    </div>
                </h1>

                <div
                    ref={subRef}
                    style={{
                        marginTop: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '0 1rem'
                    }}
                >
                    <p
                        style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)', // Responsive font size
                            color: 'var(--text-secondary)',
                            maxWidth: '600px',
                            lineHeight: 1.6,
                            textAlign: 'center'
                        }}
                    >
                        {PERSONAL_INFO.bio}
                    </p>

                    {/* Resume Button */}
                    <a
                        href={PERSONAL_INFO.resume}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            marginTop: '1.5rem',
                            padding: '0.8rem 2rem',
                            borderRadius: '50px',
                            background: 'transparent',
                            border: '1px solid var(--accent-color)',
                            color: 'var(--accent-color)',
                            fontSize: '1rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            transition: 'all 0.3s ease',
                            cursor: 'pointer',
                            textDecoration: 'none',
                            display: 'inline-block'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'var(--accent-color)';
                            e.currentTarget.style.color = '#fff';
                            e.currentTarget.style.boxShadow = '0 0 20px var(--accent-glow)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--accent-color)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        Download Resume
                    </a>

                    <div
                        style={{
                            width: '1px',
                            height: '80px', // Slightly shorter line
                            background: 'linear-gradient(to bottom, var(--accent-color), transparent)',
                            marginTop: '2rem'
                        }}
                    />
                </div>
            </div>

            {/* Decorative Gradient Blob */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '80vw', // Responsive width
                    height: '80vw', // Responsive height
                    maxWidth: '600px', // Max size constraint
                    maxHeight: '600px',
                    background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)',
                    zIndex: 1,
                    opacity: 0.4,
                    filter: 'blur(60px)',
                    pointerEvents: 'none'
                }}
            />
        </section>
    );
};

export default Hero;
