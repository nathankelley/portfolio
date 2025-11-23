// src/pages/Home.js
import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Particles from 'react-particles';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        // Morph name on load
        gsap.fromTo('.hero-text',
            { scale: 0.8, opacity: 0, y: 50 },
            { duration: 1.5, scale: 1, opacity: 1, y: 0, ease: 'back.out(1.7)' }
        );

        // Animate CTA button
        const button = document.querySelector('.cta-button');
        button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.05, duration: 0.3 }));
        button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.3 }));
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <Particles
                id="tsparticles"
                options={{
                    particles: {
                        number: { value: 80 },
                        color: { value: '#00ff9d' },
                        shape: { type: 'circle' },
                        opacity: { value: 0.5, random: true },
                        size: { value: 3, random: true },
                        move: {
                            enable: true,
                            speed: 1,
                            direction: 'none',
                            random: true,
                            straight: false,
                            out_mode: 'out'
                        },
                        interactivity: {
                            events: { onhover: { enable: true, mode: 'repulse' } }
                        }
                    },
                    retina_detect: true
                }}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            />
            <Header />
            <main style={{ padding: '4rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h1 className="hero-text" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    Hi, I'm Nathan Kelley
                </h1>
                <p style={{ fontSize: '1.5rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    Game Producer & Developer with experience shipping innovative titles.
                    I turn chaos into milestones and ideas into playable realities.
                </p>
                <Link to="/projects" className="cta-button" style={{
                    padding: '1rem 2rem', background: '#00ff9d', color: '#000',
                    borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold'
                }}>
                    See My Work
                </Link>
            </main>
            <Footer />
        </div>
    );
}