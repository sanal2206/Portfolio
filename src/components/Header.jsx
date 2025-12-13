import React, { useEffect, useRef } from 'react';
import { NAV_LINKS, PERSONAL_INFO } from '../constants';
import { gsap } from 'gsap';

const Header = () => {
    const headerRef = useRef(null);
    const logoRef = useRef(null);
    const linksRef = useRef([]);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false); // State for mobile menu

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
                mixBlendMode: 'difference',
                color: '#fff'
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
                                    display: 'inline-block'
                                }}
                                className="hover-underline"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>

            {/* Mobile Hamburger */}
            <button
                className="mobile-toggle"
                onClick={toggleMenu}
                style={{
                    display: 'none', // Hidden on desktop via CSS, shown on mobile
                    background: 'none',
                    border: 'none',
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    zIndex: 200
                }}
            >
                ☰
            </button>

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
                                color: 'white'
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
