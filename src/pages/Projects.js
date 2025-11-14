// src/pages/Projects.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

// Screenshots in the 'src/assets/images' directory
// Hellbert Screenshots
import hellbert_1 from '../assets/images/Hellbert/ss.1.png';
import hellbert_2 from '../assets/images/Hellbert/ss.2.png';
import hellbert_3 from '../assets/images/Hellbert/ss.3.png';
import hellbert_4 from '../assets/images/Hellbert/ss.4.png';
import hellbert_5 from '../assets/images/Hellbert/Team Photo.jpg';

// Remnants Screenshots
import remnants_1 from '../assets/images/Remnants/S1.png';
import remnants_2 from '../assets/images/Remnants/S2.png';
import remnants_3 from '../assets/images/Remnants/S3.png';
import remnants_4 from '../assets/images/Remnants/S4.png';
import remnants_5 from '../assets/images/Remnants/Team-Photo.jpg';

const projects = [
    {
        title: "Hell*bert",
        role: "Producer ~ Project Manager ~ Sound Designer",
        desc: "Hellbert is a 2D reimagining of the classic arcade game Q*bert. In this version, Hellbert’s mission is to capture as many blocks as possible before they ascend to the heavens.",
        tech: "Unity ~ C# ~ Audacity ~ Perforce",
        image: hellbert_1,
        link: "https://shaylinkc.itch.io/hellbert"
    },
    {
        title: "Remnants",
        role: "Producer ~ Project Manager",
        desc: "Find the camouflaged animals as you learn that even the most hidden creatures of this world deserve protection.",
        tech: "Unreal Engine ~ VR ~ C++ ~ Perforce",
        image: remnants_1,
        link: "https://shaylinkc.itch.io/hellbert"
    }
];

export default function Projects() {
    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <div style={{ padding: '4rem 2rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                    gap: '2.5rem',
                    padding: '0 1rem',
                    maxWidth: '1200px',
                    margin: '3rem auto',
                    justifyContent: 'center'
                }}>
                    {projects.map(p => <ProjectCard key={p.title} {...p} />)}
                </div>
            </div>
            <Footer />
        </div>
    );
}