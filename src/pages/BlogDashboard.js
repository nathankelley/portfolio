// firebase imports
import { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import { collection, addDoc, getDocs, orderBy, query, deleteDoc, doc } from 'firebase/firestore';
import { auth, db } from '../firebase';

// pages imports
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Blog() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const provider = new GoogleAuthProvider();
    const [showDenialModal, setShowDenialModal] = useState(false);]

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        if (user) loadPosts();
        return unsubscribe;
    }, [user]);

        const loadPosts = async () => {
        const q = query(collection(db, 'posts'), orderBy('date', 'desc'));
        const snapshot = await getDocs(q);
        setPosts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };

    const handleLogin = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const loggedUser = result.user;
            if (loggedUser.email !== 'kelleyjnathan@gmail.com') {
                await signOut(auth);
                setShowDenialModal(true); // triggers custom modal
                return;
            }
        } catch (error) {
            console.error('Login failed:', error);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
        setPosts([]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) return;
        try {
            await addDoc(collection(db, 'posts'), {
                title,
                content,
                date: new Date().toISOString(),
                author: user.email
            });
            setTitle(''); setContent('');
            loadPosts();
        } catch (error) {
            console.error('Post failed:', error);
        }
    };

    if (!user) {
        return (
            <div style={{
                background: '#0f0f0f',
                color: '#fff',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <button onClick={handleLogin}
                    style={{
                        padding: '1rem 2rem',
                        background: '#00ff9d',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold'
                    }}>
                    Login to Post
                </button>
            </div>
        );
    }

    return (
    <div style = {{ background: '#0f0f0f', color: '#fff', minHeight: '100vh' }}>
        <Header />
        <div style={{ padding: '2rem 10%', maxWidth: '900px', margin: '0 auto' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '2rem'
                }}>
                <h1 style={{ color: '#00ff9d' }}>Blog Dashboard</h1>
                    <button onClick={handleLogout} style={{
                        padding: '0.5rem 1rem',
                        background: '#ff4444',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '6px'
                    }}>
                    Logout
                </button>
            </div>

            {/* Post Form */}
                <form onSubmit={handleSubmit} style={{
                    marginBottom: '3rem',
                    padding: '1.5rem',
                    background: 'rgba(0,255,157,0.05)',
                    borderRadius: '12px'
                }}>
                <input
                    type="text"
                    placeholder="Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginBottom: '1rem',
                            background: '#222',
                            color: '#fff',
                            border: '1px solid #333',
                            borderRadius: '6px'
                        }}
                    required
                />
                <textarea
                    placeholder="Post Content (Markdown OK)"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows="6"
                        style={{
                            width: '100%',
                            padding: '0.75rem',
                            marginBottom: '1rem',
                            background: '#222',
                            color: '#fff',
                            border: '1px solid #333',
                            borderRadius: '6px'
                        }}
                    required
                />
                    <button type="submit" style={{
                        padding: '0.75rem 1.5rem',
                        background: '#00ff9d',
                        color: '#000',
                        border: 'none',
                        borderRadius: '8px',
                        fontWeight: 'bold'
                    }}>
                    Publish Post
                </button>
            </form>

            {/* Posts List */}
            <h2 style={{ color: '#00ff9d', marginBottom: '1rem' }}>Your Posts</h2>
            {posts.map(post => (
                <article key={post.id} style={{
                    marginBottom: '2rem',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px'
                }}>
                    <h3>{post.title}</h3>
                    <p style={{
                        color: '#888',
                        fontSize: '0.9rem'
                    }}>{new Date(post.date).toLocaleDateString()}</p>
                    <p>{post.content}</p>
                </article>
            ))}
        </div>
            <Footer />

            {showDenialModal && (
                <div style={{
                    position: 'fixed',
                    top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.9)',
                    zIndex: 1000,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }} onClick={() => setShowDenialModal(false)}>
                    <div style={{
                        background: 'linear-gradient(135deg, #1a1a1a 0%, #0f0f0f 100%)',
                        padding: '2rem',
                        borderRadius: '12px',
                        border: '2px solid #00ff9d',
                        textAlign: 'center',
                        maxWidth: '400px',
                        boxShadow: '0 0 20px rgba(0,255,157,0.3)'
                    }} onClick={(e) => e.stopPropagation()}>
                        <h2 style={{ color: '#00ff9d', marginBottom: '1rem' }}>Access Denied</h2>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.5', marginBottom: '1.5rem' }}>

                            Access Denied. Better luck next time slugheads.

                        </p>
                        <button
                            onClick={() => setShowDenialModal(false)}
                            style={{
                                padding: '0.75rem 1.5rem',
                                background: '#ff4444',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: 'bold',
                                cursor: 'pointer'
                            }}>
                            Close
                        </button>
                    </div>
                </div>
            )}
    </div>
  );
}