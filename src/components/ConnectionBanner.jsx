function ConnectionBanner({ message, onClose }) {
    if (!message) return null;
    
    return (
        <div className="connection-banner" role="alert">
            <span>⚠️⚠️  {message}</span>
            <button onClick={onClose} arial-label="Close alert">
                &times
            </button>
        </div>
    );
}

export default ConnectionBanner;
