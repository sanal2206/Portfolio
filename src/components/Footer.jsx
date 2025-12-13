import React from 'react';
import { PERSONAL_INFO } from '../constants';

const Footer = () => {
    return (
        <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
