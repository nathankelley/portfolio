import { useEffect } from 'react';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        const blobs = document.querySelectorAll('.blob');
        const heroName = document.querySelector('.hero-name');

        // Mouse follower
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            cursor.style.left = `${clientX}px`;
            cursor.style.top = `${clientY}px`;

            blobs.forEach((blob, i) => {
                gsap.to(blob, {
                    x: (clientX - window.innerWidth / 2) * (0.05 + i * 0.03),
                    y: (clientY - window.innerHeight / 2) * (0.05 + i * 0.03),
                    duration: 3,
                    ease: 'power2.out'
                });
            });
        };

        // Pulse cursor on interactive elements
        const handleMouseOver = (e) => {
            if (e.target.closest('a, button')) gsap.to(cursor, { scale: 1.5, duration: 0.3 });
        };
        const handleMouseOut = (e) => {
            if (e.target.closest('a, button')) gsap.to(cursor, { scale: 1, duration: 0.3 });
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseover', handleMouseOver);
        document.addEventListener('mouseout', handleMouseOut);

        // Blob drift
        gsap.to('.blob', {
            x: 'random(-100, 100)',
            y: 'random(-100, 100)',
            scale: 'random(0.8, 1.4)',
            rotation: 'random(-30, 30)',
            duration: 'random(8, 15)',
            ease: 'none',
            repeat: -1,
            yoyo: true
        });

        // Name animation — now safe
        if (heroName) {
            gsap.fromTo(heroName,
                { scale: 0, opacity: 0, filter: 'blur(20px)' },
                { scale: 1, opacity: 1, filter: 'blur(0px)', duration: 2, ease: 'elastic.out(1,0.5)', delay: 0.5 }
            );
        }

        // CTA pulse
        gsap.to('.cta-button', {
            scale: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        });

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseover', handleMouseOver);
            document.removeEventListener('mouseout', handleMouseOut);
        };
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#000', color: '#fff', overflow: 'hidden', position: 'relative', cursor: 'none' }}>
            {/* Custom Cursor — always on top, never hidden */}
            <div className="custom-cursor" style={{
                position: 'fixed',
                width: '36px',
                height: '36px',
                border: '3px solid #00ff9d',
                borderRadius: '50%',
                pointerEvents: 'none',
                zIndex: 99999,
                transform: 'translate(-50%, -50%)',
                boxShadow: '0 0 30px #00ff9d, inset 0 0 15px rgba(0,255,157,0.6)',
                background: 'radial-gradient(circle, rgba(0,255,157,0.2) 0%, transparent 70%)',
                transition: 'transform 0.15s ease',
                mixBlendMode: 'difference'
            }} />

            {/* Liquid Fire Blobs */}
            <div className="blob" style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle at 30% 30%, #ff0066, transparent 70%)', borderRadius: '47% 53% 70% 30% / 40% 40% 60% 60%', filter: 'blur(80px)', opacity: 0.6, top: '-200px', left: '-200px' }} />
            <div className="blob" style={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle at 70% 70%, #00ff9d, transparent 70%)', borderRadius: '37% 63% 50% 50% / 50% 40% 60% 50%', filter: 'blur(100px)', opacity: 0.5, bottom: '-300px', right: '-300px' }} />
            <div className="blob" style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, #ff6600, transparent 60%)', borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%', filter: 'blur(90px)', opacity: 0.7, top: '20%', left: '10%' }} />

            <Header style={{ position: 'relative', zIndex: 10 }} />

            <main style={{ padding: '10rem 2rem 4rem', textAlign: 'center', position: 'relative', zIndex: 5 }}>
                <h1 className="hero-name" style={{
                    fontSize: '5rem',
                    fontWeight: '900',
                    background: 'linear-gradient(45deg, #00ff9d, #00ccff, #ff0066)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: '0.1em'
                }}>
                    NATHAN KELLEY
                </h1>

                <p style={{ fontSize: '1.9rem', margin: '2rem auto', maxWidth: '700px', opacity: 0.95, letterSpacing: '0.1em' }}>
                    Game Producer · World Builder Chaos Tamer
                </p>

                <Link to="/projects" className="cta-button" style={{
                    padding: '1.2rem 3rem',
                    background: '#00ff9d',
                    color: '#000',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    fontWeight: 'bold',
                    fontSize: '1.3rem',
                    boxShadow: '0 0 30px rgba(0,255,157,0.5)',
                    display: 'inline-block'
                }}>
                    ENTER MY WORLD
                </Link>
            </main>

            <Footer />
        </div>
    );
}