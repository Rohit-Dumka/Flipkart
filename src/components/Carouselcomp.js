import React, { useState } from 'react';

const Carouselcomp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://rukminim1.flixcart.com/fk-p-flap/480/80/image/b2fa49c3e888ba33.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f09f551230626a04.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20'
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div style={{ maxWidth: '2100px', margin: 'auto', position: 'relative' }}>
      <img src={slides[currentSlide]} 
      alt={`Slide ${currentSlide + 1}`} 
      style={{ width: '100%', height: 'auto' }} />
      <button 
        onClick={prevSlide} 
        style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', zIndex: '1' }}>
          Prev</button>
      <button onClick={nextSlide} style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)', zIndex: '1' }}>Next</button>
    </div>
  );
};

export default Carouselcomp;
