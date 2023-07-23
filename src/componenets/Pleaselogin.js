import React, { useState, useEffect } from 'react';

export default function Pleaselogin() {
  const [randomImageUrl, setRandomImageUrl] = useState('');

  useEffect(() => {
    const apiKey = '';
    const query = 'sorry';

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
    <div className="pl" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {randomImageUrl ? (
        <img src={randomImageUrl} alt="Please Login" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
      ) : (
        <div style={{ width: '400px', height: '400px', background: 'lightgray' }}></div>
      )}
      <h1>Please Login</h1>
    </div>
  );
}
