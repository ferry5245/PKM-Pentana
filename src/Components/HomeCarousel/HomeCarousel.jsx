import React, { useState, useEffect } from 'react';
import './HomeCarousel.scss';
import Cards from '../Cards/Cards'; 
import Logo from "../../assets/logo.png";

const cardsData = [
  {
    content: 'Lorem ipsum dolor sit amet consectetur. Odio in commodo morbi fringilla sit. Semper porttitor adipiscing aliquet cras a in sed tellus.',
    name: 'NAMA & PERAN 1',
    image: Logo,
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur. Odio in commodo morbi fringilla sit. Semper porttitor adipiscing aliquet cras a in sed tellus.',
    name: 'NAMA & PERAN 2',
    image: Logo,
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur. Odio in commodo morbi fringilla sit. Semper porttitor adipiscing aliquet cras a in sed tellus.',
    name: 'NAMA & PERAN 3',
    image: Logo,
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur. Odio in commodo morbi fringilla sit. Semper porttitor adipiscing aliquet cras a in sed tellus.',
    name: 'NAMA & PERAN 4',
    image: Logo,
  },
  {
    content: 'Lorem ipsum dolor sit amet consectetur. Odio in commodo morbi fringilla sit. Semper porttitor adipiscing aliquet cras a in sed tellus.',
    name: 'NAMA & PERAN 5',
    image: Logo,
  },
];

const cardWidth = 300;
const gap = 20;
const visibleCards = 3;

// Create an array to store the cards for smooth sliding
const extendedCardsData = [...cardsData.slice(-2), ...cardsData, ...cardsData.slice(0, 2)];

const HomeCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at the first batch of cards

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % extendedCardsData.length);
    }, 4000); // Adjust the interval duration as needed (4 seconds)

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex]);

  return (
    <div className="home-carousel">
      <div
        className="card-container"
        style={{
          width: `${(cardWidth + gap) * visibleCards}px`,
          transform: `translateX(-${(currentIndex * (cardWidth + gap))}px)`,
        }}
      >
        {extendedCardsData.map((card, index) => (
          <Cards
            key={index}
            content={card.content}
            name={card.name}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeCarousel;
