export default function BackgroundBlobs() {
    return (
        <>
            <div className="blob" style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle at 30% 30%, #ff0066, transparent 70%)', borderRadius: '47% 53% 70% 30% / 40% 40% 60% 60%', filter: 'blur(80px)', opacity: 0.4, top: '-200px', left: '-200px' }} />
            <div className="blob" style={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle at 70% 70%, #00ff9d, transparent 70%)', borderRadius: '37% 63% 50% 50% / 50% 40% 60% 50%', filter: 'blur(100px)', opacity: 0.3, bottom: '-300px', right: '-300px' }} />
            <div className="blob" style={{ position: 'absolute', width: '500px', height: '500px', background: 'radial-gradient(circle, #ff6600, transparent 60%)', borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%', filter: 'blur(90px)', opacity: 0.5, top: '20%', left: '10%' }} />
        </>
    );
}