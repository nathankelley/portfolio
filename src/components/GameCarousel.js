// Game Carousel Component for about page displaying game images in a carousel format

import { useState } from 'react';
import { Link } from 'react-router-dom'; 

// Import images as modules
import eldenRing from '../assets/images/Games/elden_ring.jpg';
import skyrim from '../assets/images/Games/skyrim.jpg';
import haloReach from '../assets/images/Games/halo_reach.jpg';
import zeldaOcarina from '../assets/images/Games/zelda_ocarina.jpg';
import cs2 from '../assets/images/Games/cs_2.jpg';

export default function GameCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const games = [
        { id: 1, image: eldenRing },
        { id: 2, image: skyrim },
        { id: 3, image: haloReach },
        { id: 4, image: zeldaOcarina },
        { id: 5, image: cs2 },
    ];

    const rotateLeft = () => setCurrentIndex((prev) => (prev - 1 + games.length) % games.length);
    const rotateRight = () => setCurrentIndex((prev) => (prev + 1) % games.length);

    return (
        <section style={{ padding: '4rem 2rem', textAlign: 'center', background: 'rgba(0,255,157,0.05)', borderRadius: '12px', margin: '3rem 0' }}>
            <h2 style={{ color: '#00ff9d', marginBottom: '2rem' }}>Games That Shaped Me</h2>
            <p style={{ fontSize: '1.1rem', opacity: 0.9, marginBottom: '2rem' }}>
                These titles fuel my production fire—from narrative depth to mechanical genius.
            </p>
            <div style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
                position: 'relative',
                height: '500px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {games.map((game, i) => {
                    const angle = ((i - currentIndex) / games.length) * 360;
                    const distance = Math.abs(i - currentIndex) * 150;  // Adjusted for better centering
                    const scale = Math.max(0.6, 1 - distance / 400);
                    const opacity = Math.max(0.3, 1 - distance / 500);

                    return (
                        <div
                            key={game.id}
                            style={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: `translate(-50%, -50%) rotateY(${angle}deg) translateZ(${distance}px) scale(${scale})`,
                                opacity,
                                transition: 'all 0.6s ease',
                                zIndex: 10 - i
                            }}
                        >
                            <img
                                src={game.image}
                                alt={game.alt}
                                style={{
                                    width: '250px',
                                    height: '350px',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                    boxShadow: '0 10px 30px rgba(0,255,157,0.3)',
                                    border: '2px solid #00ff9d',
                                    transition: 'box-shadow 0.3s ease, transform 0.3s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(0,255,157,0.6)';
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,255,157,0.3)';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                            <p style={{ color: '#fff', marginTop: '1rem', fontWeight: 'bold' }}>{game.alt}</p>
                        </div>
                    );
                })}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginTop: '2rem' }}>
                <button onClick={rotateLeft} style={{ padding: '0.8rem 1.5rem', background: '#00ff9d', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                    ← Prev
                </button>
                <button onClick={rotateRight} style={{ padding: '0.8rem 1.5rem', background: '#00ff9d', color: '#000', border: 'none', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' }}>
                    Next →
                </button>
            </div>
        </section>
    );
}