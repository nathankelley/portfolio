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

//Dungeon Adventure Screenshots
import dungeon_1 from '../assets/images/DungeonAdventure/dungeon_1.jpg';

// 3D Character Design Screenshots - VROID Model
// Model 1 Screenshots
import model1_1 from '../assets/images/3DCharacterDesign/vroid/model1_1.png';
import model1_2 from '../assets/images/3DCharacterDesign/vroid/model1_2.png';
import model1_3 from '../assets/images/3DCharacterDesign/vroid/model1_3.png';


const grad_projects = [
    {
        title: "Hell*bert",
        role: "Producer ~ Project Manager ~ Sound Designer",
        desc: "Hell*bert is a 2D reimagining of the classic arcade game Q*bert. In this version, Hell*bert's mission is to captures as many blocks as possible before they ascend to heaven or you're defeated by an enemy. I led a 7-person team from concept to a playable prototype, available in Itch.io. I handled full task management (Miro), weekly standups, sprint planning, milestone tracking and scope control on zero budget. All milestones were met and the prototype was delivered 100% on-schedule.",
        tech: "Unity ~ C# ~ Audacity ~ Perforce ~ Work Breakdown Structure ~ Kanban Board",
        image: hellbert_1,
        gallery: [hellbert_1, hellbert_2, hellbert_3, hellbert_4, hellbert_5],
        link: "https://shaylinkc.itch.io/hellbert",
        inProgress: false
    },
    {
        title: "Remnants",
        role: "Producer ~ Project Manager",
        desc: "Remnants is a 3D VR educational game built in Unreal Engine 5. Your purpose is to find the camouflaged animals as you learn that even the most hidden creatures of this world deserve protection. I led a 7-person team from concept to VR prototype in UE5 in 4 weeks on zero budget. I oversaw full task management using Miro, sprint cycles, milestone tracking, and scope control. I coordinated play-testing and ensured all milestones were met. We delivered a playable prototype 100% on time.",
        tech: "Unreal Engine ~ VR ~ C++ ~ Perforce~ Miro ~ Kanban Methodology",
        image: remnants_1,
        gallery: [remnants_1, remnants_2, remnants_3, remnants_4, remnants_5],
        link: "https://kelley-n.itch.io/remnants",
        inProgress: false
    },
    {
        title: "Inferno Inc.",
        role: "Producer ~ Project Manager ~ Sound Design ~ Game Design",
        desc: "Inferno Inc. is a Dante's Inferno/corporate themed 3D RPG built in Unreal Engine. Inferno Inc. is on a mission to make Hell more efficient, and we need your help to reorganize the Nine Circles into a smooth-running machine of eternal torment. I led a 15 - person team from concept to prototype in 6 week on a zero budget.I oversaw full task management(Miro), sprint cycles, milestone tracking, and scope control.I also handles audio design in Unreal Engine while contributing to overall design decisions.Our prototype was delivered 100 % on time.",
        tech: "Unreal Engine ~ C++ ~ Perforce ~ Miro ~ Kanban Methodology",
        image: inferno_1,
        gallery: [inferno_1, inferno_2, inferno_3, inferno_4, inferno_5, inferno_6],
        link: "https://kelley-n.itch.io/inferno-inc",
        inProgress: false
    }
];

const prof_projects = [
    {
        title: "TBD",
        role: "Producer ~ Project Manager ~ Sound Designer",
        desc: "A text-based dungeon crawler developed in C++ with Raylib for rendering. Players type free-form commands for actions, offering true open-ended gameplay rather than multiple-choice menus. In active development with my friend!.",
        tech: "C++ ~ Raylib ~ GitHub",
        image: dungeon_1,
        gallery: [dungeon_1],
        link: "",
        inProgress: true
    }
];

const char_design_projects = [
    {
        title: "OG 3D Character Model #1 (Second Iteration)",
        role: "3D Character Designer",
        desc: "My first project in 3D digital character creation—practicing proportions, texturing, and outfit design. A cyberpunk-inspired original with twin buns, tactical gear, and a blend of strength and softness—my starting point in bringing stories to life.",
        tech: "VRoid Studio",
        image: model1_1,
        gallery: [model1_1, model1_2, model1_3],
        link: "https://hub.vroid.com/en/characters/5974757705696331896/models/3934243152899381105",
        inProgress: true
    }
];

const narrative_projects = [

];

const game_dev_projects = [

];

const educational_projects = [

];




export default function Projects() {
    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <BackgroundBlobs />
            {/* Graduate Projects */}
            <div style={{ padding: '4rem 2rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Graduate Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                    gap: '2.5rem',
                    padding: '0 1rem',
                    maxWidth: '1200px',
                    margin: '3rem auto',
                    justifyContent: 'center'
                }}>
                    {grad_projects.map(p => <ProjectCard key=
                        {p.title}
                        {...p}
                        gallery={p.gallery}
                    />)}
                </div>
            </div>

            {/* Professional / Collaborative Projects */}
            <div style={{ padding: '4rem 2rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Professional Projects</h2>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                    gap: '2.5rem',
                    padding: '0 1rem',
                    maxWidth: '1200px',
                    margin: '3rem auto',
                    justifyContent: 'center'
                }}>
                    {prof_projects.map(p => <ProjectCard key=
                        {p.title}
                        {...p}
                        gallery={p.gallery}
                    />)}
                </div>
            </div>

            {/* Personal Projects - with sub-sections */}
            <div style={{ padding: '4rem 2rem' }}>
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem' }}>Personal Projects & Exploration</h2>
                <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem', opacity: 0.9 }}>
                    These are my passion projects—some finished, many in progress. I'm always experimenting to learn and grow skills.
                </p>

                {/* 3D Character Design */}
                <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#00ff9d', margin: '3rem 0 1rem' }}>3D Character Design</h3>
                <div style={gridStyle}>
                    {char_design_projects.map(p => <ProjectCard key={p.title} {...p} gallery={p.gallery} />)}
                </div>

                {/* Narratives & Storytelling */}
                <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#00ff9d', margin: '3rem 0 1rem' }}>Narratives & Storytelling</h3>
                <div style={gridStyle}>
                    {narrative_projects.map(p => <ProjectCard key={p.title} {...p} gallery={p.gallery} />)}
                </div>

                {/* Educational Content */}
                <h3 style={{ textAlign: 'center', fontSize: '1.8rem', color: '#00ff9d', margin: '3rem 0 1rem' }}>Educational Content</h3>
                <div style={gridStyle}>
                    {educational_projects.map(p => <ProjectCard key={p.title} {...p} gallery={p.gallery} />)}
                </div>

            </div>
            <Footer />
        </div>
    );
}

const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '2.5rem',
    padding: '0 1rem',
    maxWidth: '1200px',
    margin: '3rem auto',
    justifyContent: 'center'
};