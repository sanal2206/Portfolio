import React, { useEffect, useRef } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { gsap } from 'gsap';

const Header = () => {
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isDarkMode, setIsDarkMode] = React.useState(true);
    const [activeSection, setActiveSection] = React.useState('');

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of section is visible
        );

        document.querySelectorAll('section').forEach((section) => {
            observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Theme init
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            setIsDarkMode(false);
            document.body.classList.add('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (isDarkMode) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    };

    useEffect(() => {
        const tl = gsap.timeline();

        tl.fromTo(logoRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
            .fromTo(linksRef.current,
                { y: -50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power3.out' },
                '-=0.5'
            );
    }, []);

    return (
        <header
            ref={headerRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                padding: '2rem 3rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                mixBlendMode: 'normal', // Changed from difference to avoid issues with light mode
                background: 'var(--glass-bg)', // Added background for better visibility
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                transition: 'all 0.3s ease'
            }}
        >
            <a
                href="#"
                ref={logoRef}
                style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    letterSpacing: '-1px',
                    textTransform: 'uppercase'
                }}
            >
                {PERSONAL_INFO.name}
            </a>

            {/* Desktop Nav */}
            <nav className="desktop-nav">
                <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none' }}>
                    {NAV_LINKS.map((link, index) => (
                        <li key={link.name} ref={el => linksRef.current[index] = el}>
                            <a
                                href={link.href}
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    display: 'inline-block',
                                    color: activeSection === link.href.substring(1) ? 'var(--accent-color)' : 'inherit'
                                }}
                                className="hover-underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* Theme Toggle & Hamburger Container */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <button
                    onClick={toggleTheme}
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '1.2rem',
                        color: 'var(--text-primary)',
                        padding: '0.5rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        background: 'var(--surface-color)',
                        border: '1px solid var(--glass-border)'
                    }}
                    title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {isDarkMode ? '☀️' : '🌙'}
                </button>

                {/* Mobile Hamburger */}
                <button
                    className="mobile-toggle"
                    onClick={toggleMenu}
                    style={{
                        display: 'none',
                        background: 'none',
                        border: 'none',
                        color: 'var(--text-primary)',
                        fontSize: '1.5rem',
                        cursor: 'pointer'
                    }}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(11, 17, 32, 0.98)',
                        zIndex: 150,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: '2rem'
                    }}
                >
                    <button
                        onClick={toggleMenu}
                        style={{
                            position: 'absolute',
                            top: '2rem',
                            right: '2rem',
                            background: 'none',
                            border: 'none',
                            color: 'white',
                            fontSize: '2rem',
                            cursor: 'pointer'
                        }}
                    >
                        ✕
                    </button>
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={toggleMenu}
                            style={{
                                fontFamily: 'var(--font-display)',
                                fontSize: '2rem',
                                fontWeight: 700,
                                textTransform: 'uppercase',
                                color: activeSection === link.href.substring(1) ? 'var(--accent-color)' : 'white'
                            }}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav { display: none; }
                    .mobile-toggle { display: block !important; }
                }
            `}</style>
        </header>
    );
};

export default Header;
