import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../firebase';
import BackgroundBlobs from '../components/BackgroundBlob';

export default function Blog() {
    const [posts, setPosts] = useState([]);  
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPosts = async () => {
            try {
                const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
                const snapshot = await getDocs(q);
                setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            } catch (error) {
                console.error('Error loading posts:', error);
            } finally {
                setLoading(false);
            }
        };
        loadPosts();
    }, []);

    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <BackgroundBlobs />
            <div style={{ padding: '4rem 10%', maxWidth: '900px', margin: '0 auto' }}>
                <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#00ff9d', marginBottom: '2rem' }}>
                    Blog: My Game Production Journey
                </h1>
                <p style={{ textAlign: 'center', fontSize: '1.1rem', opacity: 0.9, marginBottom: '3rem' }}>
                    Raw thoughts on producing, shipping, and leveling up - from jams to Master's milestones.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <Link to="/projects" style={{ color: '#00ff9d', textDecoration: 'none', fontWeight: 'bold' }}>
                        Back to Projects
                    </Link>
                </div>
                {loading ? (
                    <p style={{ textAlign: 'center', opacity: 0.8 }}>Loading posts...</p>
                ) : posts.length === 0 ? (
                    <p style={{ textAlign: 'center', opacity: 0.8 }}>No posts yet - check back soon!</p>
                ) : (
                    posts.map(post => (
                        <article key={post.id} style={{ marginBottom: '3rem', padding: '1.5rem', background: 'rgba(0,255,157,0.05)', borderRadius: '12px' }}>
                            <h3 style={{ color: '#00ff9d', marginBottom: '0.5rem' }}>{post.title}</h3>
                            <p style={{ color: '#888', fontSize: '0.9rem', marginBottom: '1rem' }}>
                                {post.date ? new Date(post.date).toLocaleDateString() : 'Recent'}
                            </p>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>{post.excerpt || post.content?.substring(0, 150) + '...'}</p>
                            <Link to={`/blog/${post.id}`} style={{ color: '#00ff9d', fontWeight: 'bold' }}>Read More</Link>
                        </article>
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
}