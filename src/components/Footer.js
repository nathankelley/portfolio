// src/components/Footer.js
// https://fontawesome.com/start
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '2rem',
            background: '#111',
            color: '#888',
            borderTop: '1px solid #333',
        }}> 
            <div style={{ marginBottom: '1rem' }}>
                <h4 style={{ color: '#fff', margin: '0 0 1rem' }}>Connect with Me</h4>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                    <a href="https://linkedin.com/in/nathan-kelley" target="_blank" rel="noopener noreferrer"
                        style={socialStyle}>
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://x.com/N_JKelley" target="_blank" rel="noopener noreferrer"
                        style={socialStyle}>
                        <i className="fab fa-x-twitter"></i>
                    </a>
                    <a href="https://github.com/nathankelley" target="_blank" rel="noopener noreferrer"
                        style={socialStyle}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://itch.io/c/6578618/nk-collection" target="_blank" rel="noopener noreferrer"
                        style={socialStyle}>
                        <i className="fab fa-itch-io"></i>
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01ec0dc259f067daa5?viewMode=1" target="_blank" rel="noopener noreferrer"
                        style={socialStyle}>
                        <i className="fab fa-upwork"></i>
                    </a>
                </div>
            </div>
            <p>&copy; 2025 Nathan Kelley - Game Producer</p>
        </footer>
    );
}

const socialStyle = {
    color: '#00ff9d',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '0.5rem 1rem',
    border: '1px solid #00ff9d',
    borderRadius: '6px',
    transition: 'all 0.2s ease'
};