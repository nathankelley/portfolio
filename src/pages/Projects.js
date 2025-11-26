// src/pages/Projects.js
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import BackgroundBlobs from '../components/BackgroundBlob';

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

//Inferno Inc. Screenshots
import inferno_1 from '../assets/images/InfernoInc/Title_page.png';
import inferno_2 from '../assets/images/InfernoInc/intro.png';
import inferno_3 from '../assets/images/InfernoInc/first_puzzle.png';
import inferno_4 from '../assets/images/InfernoInc/lust_1.png';
import inferno_5 from '../assets/images/InfernoInc/lust_2.png';
import inferno_6 from '../assets/images/InfernoInc/Team-4.jpg';

const projects = [
    {
        title: "Hell*bert",
        role: "Producer ~ Project Manager ~ Sound Designer",
        desc: "Hell*bert is a 2D reimagining of the classic arcade game Q*bert. In this version, Hell*bert's mission is to captures as many blocks as possible before they ascend to heaven or you're defeated by an enemy. I led a 7-person team from concept to a playable prototype, available in Itch.io. I handled full task management (Miro), weekly standups, sprint planning, milestone tracking and scope control on zero budget. All milestones were met and the prototype was delivered 100% on-schedule.",
        tech: "Unity ~ C# ~ Audacity ~ Perforce ~ Work Breakdown Structure ~ Kanban Board",
        image: hellbert_1,
        gallery: [hellbert_1, hellbert_2, hellbert_3, hellbert_4, hellbert_5],
        link: "https://shaylinkc.itch.io/hellbert"
    },
    {
        title: "Remnants",
        role: "Producer ~ Project Manager",
        desc: "Remnants is a 3D VR educational game built in Unreal Engine 5. Your purpose is to find the camouflaged animals as you learn that even the most hidden creatures of this world deserve protection. I led a 7-person team from concept to VR prototype in UE5 in 4 weeks on zero budget. I oversaw full task management using Miro, sprint cycles, milestone tracking, and scope control. I coordinated play-testing and ensured all milestones were met. We delivered a playable prototype 100% on time.",
        tech: "Unreal Engine ~ VR ~ C++ ~ Perforce~ Miro ~ Kanban Methodology",
        image: remnants_1,
        gallery: [remnants_1, remnants_2, remnants_3, remnants_4, remnants_5],
        link: "https://kelley-n.itch.io/remnants"
    },
    {
        title: "Inferno Inc.",
        role: "Producer ~ Project Manager ~ Sound Design ~ Game Design",
        desc: "Inferno Inc. is a Dante's Inferno/corporate themed 3D RPG built in Unreal Engine. Inferno Inc. is on a mission to make Hell more efficient, and we need your help to reorganize the Nine Circles into a smooth-running machine of eternal torment. I led a 15 - person team from concept to prototype in 6 week on a zero budget.I oversaw full task management(Miro), sprint cycles, milestone tracking, and scope control.I also handles audio design in Unreal Engine while contributing to overall design decisions.Our prototype was delivered 100 % on time.",
        tech: "Unreal Engine ~ C++ ~ Perforce ~ Miro ~ Kanban Methodology",
        image: inferno_1,
        gallery: [inferno_1, inferno_2, inferno_3, inferno_4, inferno_5, inferno_6],
        link: "https://kelley-n.itch.io/inferno-inc"
    }
];

export default function Projects() {
    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <BackgroundBlobs />
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
                    {projects.map(p => <ProjectCard key=
                        {p.title}
                        {...p}
                        gallery={p.gallery}
                    />)}
                </div>
            </div>
            <Footer />
        </div>
    );
}