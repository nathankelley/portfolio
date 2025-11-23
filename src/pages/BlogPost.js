import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore'; 
import { db } from '../firebase'; // Adjust the import path as necessary
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPost() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPost = async () => {
            const docSnap = await getDoc(doc(db, 'posts', id));
            if (docSnap.exists()) {
                setPost({ id: docSnap.id, ...docSnap.data() });
            }
            setLoading(false);
        };
        fetchPost();
    }, [id]);

    if (loading) return <div style={{ color: '#fff', textAlign: 'center', padding: '4rem' }}>Loading...</div>;
    if (!post) return <div style={{ color: '#fff', textAlign: 'center', padding: '4rem' }}>Post not found</div>;

    return (
        <div style={{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
            <Header />
            <div style={{ padding: '4rem 10%', maxWidth: '800px', margin: '0 auto' }}>
                <Link to="/blog" style={{ color: '#00ff9d', textDecoration: 'none', fontSize: '1rem' }}>
                    Back to all posts
                </Link>
                <h1 style={{ fontSize: '2.8rem', color: '#00ff9d', margin: '1.5rem 0' }}>
                    {post.title}
                </h1>
                <p style={{ color: '#888', marginBottom: '2rem' }}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <div style={{ fontSize: '1.2rem', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
                    {post.content}
                </div>
            </div>
            <Footer />
        </div>
    );
}