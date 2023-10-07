// components/SmartboatComp/SmartboatComp.jsx
import React, { useState } from 'react';
import Smartboats1 from '../../../src/assets/smartboats1.png';
import Smartboats2 from '../../../src/assets/smartboats2.png';
import Smartboats3 from '../../../src/assets/smartboats3.png';
import Prev from '../../../src/assets/prev.png';
import Next from '../../../src/assets/next.png';
import './SmartboatComp.scss'

function SmartboatComp() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = [
    Smartboats1,
    Smartboats2,
    Smartboats3,
  ];

  const handlePrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const handleNextClick = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };  

  return (
    <div className="smartboatcomps">
      <img className="main-image" src={photos[currentIndex]} alt="Roadmap" />
      <div className="button-container">
        <div className="button-box">
          {currentIndex !== 0 && 
            <a className="prev" href='javascript:void(0)' onClick={handlePrevClick}>
              <img src={Prev} alt="Previous" />
            </a>
          }
        </div>
        <div className="button-box">
        {currentIndex !== 2 && 
          <a className="next" href='javascript:void(0)' onClick={handleNextClick}>
            <img src={Next} alt="Next" />
          </a>
        }
        </div>
      </div>
    </div>
  );
}

export default SmartboatComp;
