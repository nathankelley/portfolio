// src/pages/About.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <div style={{ padding: '5rem 10%', maxWidth: '900px', margin: '0 auto' }}>

                {/* Hero Bio */}
                <h1 style={{ fontSize: '3.5rem', margin: '0 0 1rem', color: '#00ff9d' }}>
                    Nathan Kelley
                </h1>
                <p style={{ fontSize: '1.6rem', margin: '0 0 2rem', opacity: 0.9 }}>
                    <strong>Game Producer</strong> &bull <em>Master's Candidate in Game Production</em>
                </p>

                {/* Punchy One-Liner */}
                <p style={{ fontSize: '1.25rem', lineHeight: '1.8', marginBottom: '2.5rem' }}>
                    I'm a game producer, developer, creative collaborator, and storyteller with hands-on experience
                    shipping indie titles like Hellbert (hellish puzzle repairs in Unity) and Remnants (post-apoc survival in Godot).
                    From scope management to sprint planning, I turn chaotic ideas into polished prototypes - all while pursuing my M.S. in Entertainment Arts & Engineering.
                </p>

                {/* Quick Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                    gap: '1.5rem',
                    margin: '3rem 0',
                    textAlign: 'center'
                }}>
                    <div style={statBox}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ff9d' }}>6+</div>
                        <div>Projects Shipped</div>
                    </div>
                    <div style={statBox}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ff9d' }}>Unity, Godot, C++</div>
                        <div>Core Tools</div>
                    </div>
                    <div style={statBox}>
                        <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#00ff9d' }}>M.S. Candidate</div>
                        <div>Game Production</div>
                    </div>
                </div>

                {/* Resume Section */}
                <section style={{
                    margin: '3rem 0',
                    padding: '2rem',
                    background: 'rgba(0,255,157,0.05)',
                    borderRadius: '12px',
                    borderLeft: '4px solid #00ff9d'
                }}>
                    <h3 style={{ color: '#00ff9d', marginBottom: '1rem' }}>Resume</h3>
                    <p style={{ fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
                        Dive deeper into my experience: QA at MasterControl (bug triage, SQL scripting),
                        lead producer on indie jams, and C++ text adventures from undergrad.
                        Full details below - let's connect on how I can drive your next project.
                    </p>

                    {/* Embedded PDF Viewer */}
                    <div style={{
                        border: '1px solid #333',
                        borderRadius: '8px',
                        overflow: 'hidden',
                        maxHeight: '600px',
                        marginBottom: '1rem'
                    }}>
                        <iframe
                            src="https://nathankelley.github.io/portfolio/NathanKelleyResume.pdf"
                            width="100%"
                            height="600"
                            style={{ border: 'none' }}
                            title="Nathan Kelley's Resume"
                            />
                    </div>

                    <a
                        href="https://nathankelley.github.io/portfolio/NathanKelleyResume.pdf"
                        download
                        style={{
                            display: 'inline-block',
                            marginTop: '1rem',
                            padding: '0.75rem 1.5rem',
                            background: '#00ff9d',
                            color: '#000',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            fontWeight: 'bold'
                        }}
                    >
                        Download Resume (PDF)
                    </a>
                </section>

                {/* Call to Action */}
                <p style={{ fontSize: '1.2rem', textAlign: 'center', margin: '3rem 0' }}>
                    Ready to ship something unforgettable? <Link to="/projects" style={{ color: '#00ff9d' }}>See my work</Link> or
                    <a href="mailto:kelleyjnathan@gmail.com" style={{ color: '#00ff9d', marginLeft: '1rem' }}>email me</a>.
                </p>
            </div>
            <Footer />
        </div>
    );
}

const statBox = {
    padding: '1.5rem',
    background: 'rgba(0,255,157,0.05)',
    borderRadius: '8px',
    border: '1px solid #333'
};