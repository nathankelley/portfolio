// src/components/Header.js

import { Link } from 'react-router-dom';

export default function Header() {
    const isMobile = window.innerWidth <= 768;  // Simple check; update on resize if needed

    return (
        <header style={{
            background: '#1a1a1a',
            color: '#fff',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000
        }}>
            <h1 style={{
                margin: 0,
                fontSize: '1.8rem',
                color: '#00ff9d'
            }}>
                Nathan Kelley
            </h1>
            <nav style={{
                display: 'flex',
                gap: isMobile ? '1rem' : '1.5rem',
                flexDirection: isMobile ? 'column' : 'row',
                width: isMobile ? '100%' : 'auto',
                textAlign: isMobile ? 'center' : 'left'
            }}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
                <Link to="/projects" style={linkStyle}>Projects</Link>
                <Link to="/blog" style={linkStyle}>Blog</Link>
                <Link to="/blog-dashboard" style={linkStyle}>Dashboard</Link>
            </nav>
        </header>
    );
}

const linkStyle = {
    color: '#00ff9d',
    textDecoration: 'none',
    fontWeight: 'bold',
    fontSize: '1rem',
    transition: 'color 0.2s ease',
    ':hover': { color: '#fff' }  // Note: hover needs CSS class for full effect, but this works inline
};