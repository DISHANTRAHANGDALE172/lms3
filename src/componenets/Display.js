import React, { useState, useEffect } from 'react';

export default function Display() {
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    const apiKey = '';
    const query = 'ocean+sunset+waterfall';

    fetch(`https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo`)
      .then(response => response.json())
      .then(data => {
        const hits = data.hits;
        if (hits && hits.length > 0) {
          const randomIndex = Math.floor(Math.random() * hits.length);
          const randomImageURL = hits[randomIndex].largeImageURL;
          setRandomImageUrl(randomImageURL);
        } else {
          console.log('No images found.');
        }
      })
      .catch(error => {
        console.error('Error fetching data from Pixabay API:', error);
      });
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {randomImageUrl && <img src={randomImageUrl} alt="" style={{ height: '100vh', width: '100vw', objectFit: 'cover' }} />}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#fff', fontFamily: 'Arial, sans-serif' }}>
        <h1>Welcome to the LMS</h1>
        <p>This is the Learning Management System. Start your learning journey now!</p>
      </div>
      
      {/* Floating text in footer with animation */}
      <div style={{ position: 'fixed', bottom: '20px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'rgba(0, 0, 0, 0.8)', padding: '10px', borderRadius: '5px', color: '#fff', fontFamily: 'Arial, sans-serif', animation: 'floatAnimation 5s infinite' }}>
        <p>LMS</p>
      </div>
    </div>
  );
}
