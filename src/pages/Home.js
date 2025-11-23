import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { gsap } from 'gsap';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Home() {
    const canvasRef = useRef();
    const sceneRef = useRef();
    const rendererRef = useRef();

    useEffect(() => {
        // Setup Three.js scene
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        rendererRef.current = renderer;

        // Fiery particles
        const particlesGeometry = new THREE.BufferGeometry();
        const particleCount = 1000;
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 10;
            positions[i + 1] = (Math.random() - 0.5) * 10;
            positions[i + 2] = (Math.random() - 0.5) * 10;

            // Fiery colors
            colors[i] = Math.random() * 0.5 + 0.5;  // Red/orange
            colors[i + 1] = Math.random() * 0.3;
            colors[i + 2] = 0;
        }

        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const particlesMaterial = new THREE.PointsMaterial({ size: 0.02, vertexColors: true });
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particles);

        camera.position.z = 5;

        // Morph name (text to particles)
        const loader = new THREE.FontLoader();
        loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
            const textGeometry = new THREE.TextGeometry('Nathan Kelley', {
                font: font,
                size: 0.5,
                height: 0.1
            });
            const textMesh = new THREE.Mesh(textGeometry, new THREE.MeshBasicMaterial({ color: 0x00ff9d }));
            scene.add(textMesh);

            // Animate: particles swirl in, form text, then morph to icons
            gsap.to(particles.rotation, { duration: 2, y: Math.PI * 2, repeat: -1, ease: 'none' });
            gsap.fromTo(textMesh.scale,
                { x: 0, y: 0, z: 0 },
                { duration: 2, x: 1, y: 1, z: 1, delay: 1, ease: 'back.out(1.7)' }
            );
            gsap.to(textMesh.position, { duration: 1, y: -0.5, delay: 3 });  // Drop to baseline
        });

        // Animate CTA
        const button = document.querySelector('.cta-button');
        if (button) {
            button.addEventListener('mouseenter', () => gsap.to(button, { scale: 1.05, duration: 0.3 }));
            button.addEventListener('mouseleave', () => gsap.to(button, { scale: 1, duration: 0.3 }));
        }

        // Render loop
        function animate() {
            requestAnimationFrame(animate);
            particles.rotation.y += 0.001;
            renderer.render(scene, camera);
        }
        animate();

        sceneRef.current = scene;
        return () => renderer.dispose();
    }, []);

    return (
        <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff', position: 'relative' }}>
            <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />
            <Header style={{ position: 'relative', zIndex: 2 }} />
            <main style={{ padding: '4rem 2rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
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