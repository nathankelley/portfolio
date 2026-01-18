// src/components/ProjectCard.js
import { useState } from 'react';
import Lightbox from './Lightbox';

export default function ProjectCard({ title, role, desc, tech, image, link, gallery = [],
    inProgress = false }) {
    const [isHovered, setIsHovered] = useState(false);
    const [showLightbox, setShowLightbox] = useState(false);

    const handleCardClick = () => {
        if (gallery.length > 0) {
            setShowLightbox(true);
        }
    };

    return (
        <>
            <div
                style={{
                    ...styles.card,
                    ...(isHovered ? styles.cardHover : {}),
                    cursor: gallery.length > 0 ? 'zoom-in' : 'default',
                    position: 'relative'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onClick={handleCardClick}  // Dedicated click handler
            >
                <img src={image} alt={title} style={styles.img} />

                {/* IN PROGRESS BADGE — put right here */}
                {inProgress && (
                    <span style={{
                        position: 'absolute',
                        top: '12px',
                        right: '12px',
                        background: '#ff6600',
                        color: '#fff',
                        padding: '0.5rem 1rem',
                        borderRadius: '8px',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 12px rgba(255,102,0,0.4)',
                        zIndex: 10
                    }}>
                        In Progress
                    </span>
                )}

                <div style={styles.content}>
                    <h3 style={styles.title}>{title}</h3>
                    <p><strong>Role:</strong> {role}</p>
                    <p style={{ fontSize: '0.95rem', lineHeight: '1.5', opacity: 0.9 }}>{desc}</p>
                    <p><strong>Tech:</strong> <span style={{ color: '#00ff9d' }}>{tech}</span></p>
                    {link && (
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={styles.button}
                            onClick={(e) => e.stopPropagation()}  // Stops link from blocking card
                        >
                            View Project
                        </a>
                    )}
                    {gallery.length > 0 && (
                        <p style={{
                            margin: '0.5rem 0 0',
                            color: '#00ff9d',
                            fontSize: '0.85rem',
                            fontStyle: 'italic'
                        }}>
                            Click to view {gallery.length} images
                        </p>
                    )}
                </div>
            </div>

            {showLightbox && gallery.length > 0 && (
                <Lightbox images={gallery} onClose={() => setShowLightbox(false)} />
            )}
        </>
    );
}

const styles = {
    card: {
        border: '1px solid #333',
        borderRadius: '16px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
        width: '100%',
        maxWidth: '420px',
        boxShadow: '0 8px 24px rgba(0, 255, 157, 0.15)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    },
    cardHover: {
        transform: 'translateY(-8px)',
        boxShadow: '0 16px 32px rgba(0, 255, 157, 0.25)'
    },
    img: {
        width: '100%',
        height: '240px',
        objectFit: 'cover',
        borderBottom: '2px solid #00ff9d'
    },
    content: {
        padding: '1.75rem',
        color: '#fff'
    },
    title: {
        margin: '0 0 0.5rem',
        fontSize: '1.5rem',
        color: '#00ff9d'
    },
    button: {
        display: 'inline-block',
        marginTop: '1rem',
        padding: '0.65rem 1.5rem',
        background: '#00ff9d',
        color: '#000',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '0.95rem',
        transition: 'all 0.2s ease'
    }
};