import React from 'react';
import './EmbeddedVideo.css'; // Import CSS file

function EmbeddedVideo() {
    return (
        <div className="container">
            <iframe
                className="video"
                src="https://res.cloudinary.com/dfaes0urc/video/upload/f_auto:video,q_auto/qzrgsfi82e5z1ybff6nu"
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default EmbeddedVideo;