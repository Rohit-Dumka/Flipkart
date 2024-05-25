import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Carouselcomp = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    'https://rukminim1.flixcart.com/fk-p-flap/480/80/image/b2fa49c3e888ba33.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/f09f551230626a04.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1e31c9d65e3b4592.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/1f25201ced5d720d.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/14691d790ec410a9.jpg?q=20',
    'https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/345037032e3daaaf.jpg?q=20'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentSlide]); // Run effect whenever currentSlide changes

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative mx-auto max-w-[2100px]">
      <img
        src={slides[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
        className="w-full h-auto"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded shadow"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white p-2 rounded shadow"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default Carouselcomp;
