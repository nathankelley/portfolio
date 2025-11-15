// src/pages/Home.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';  

export default function Home() {
    return (
        <div style={{ minHeight: '100vh', background: '#0f0f0f', color: '#fff' }}>
            <Header />
            <main style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    Hi, I'm Nathan Kelley
                </h1>
                <p style={{ fontsize: '1.5rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
                    I'm a game producer, developer, creative collaborator,
                    and storyteller with experience bringing innovative games to life.
                </p>
                    <Link to="/projects" style={{
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