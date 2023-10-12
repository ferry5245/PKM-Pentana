// components/SmartboatComp/SmartboatComp.jsx
import React, { useState } from 'react';
import './SmartboatComp.scss';
import Smartboats1 from '../../../src/assets/smartboats1.png';
import Smartboats2 from '../../../src/assets/smartboats2.png';
import Smartboats3 from '../../../src/assets/smartboats3.png';
import Prev from '../../../src/assets/prev.png';
import Next from '../../../src/assets/next.png';

function SmartboatComp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [
    Smartboats1,
    Smartboats2,
    Smartboats3,
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
  };

  return (
    <div className="smartboatcomps">
      <div className="carousel-container">
        <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {photos.map((photo, index) => (
            <div
              key={index}
              className="carousel-page"
              >
              <img
                className="carousel-image"
                src={photo}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="button-container">
        <div className="button-box">
          {currentIndex !== 0 && (
            <button className="prev" onClick={handlePrevClick}>
              <img src={Prev} alt="Previous" />
            </button>
          )}
        </div>
        <div className="button-box">
          {currentIndex !== photos.length - 1 && (
            <button className="next" onClick={handleNextClick}>
              <img src={Next} alt="Next" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default SmartboatComp;
