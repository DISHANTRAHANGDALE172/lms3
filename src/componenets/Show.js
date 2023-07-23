import React, { useState, useEffect } from 'react';
import Showitem from './Showitem';

export default function Show() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      const url = "https://api.tvmaze.com/search/shows?q=all";
      const data = await fetch(url);
      const parsedData = await data.json();
      parsedData.pop();
      setShows(parsedData);
    };

    fetchShows();
  }, []);

  return (
    <div className='container my-3'>
      <div className='container my-3 '>
        <h1 className="text-center" style={{ margin: '20px 45px' }}>TOP TRENDING COURSES</h1>
        <div className="row">
          {shows.map((element) => (
            <div className="col-md-4" key={element.show.id}>
              <Showitem title={element.show.name} des={element.show.language} u={element.show.url} image={element.show.image} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
