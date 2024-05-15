import React, { useState } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const handleSlideIndicatorClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-60">
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: currentSlide === 0 ? 'block' : 'none' }}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5483df11b3fc9f0b.jpg?q=20" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 1" />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: currentSlide === 1 ? 'block' : 'none' }}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/4227babcdcb113c8.jpg?q=20" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: currentSlide === 2 ? 'block' : 'none' }}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/b5ec95451c4f8705.jpg?q=20" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
        </div>
        <div className="duration-700 ease-in-out" data-carousel-item style={{ display: currentSlide === 3 ? 'block' : 'none' }}>
          <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/1fe2baf68811b778.jpg?q=20" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Slide 2" />
        </div>
        {/* Add similar blocks for other slides */}
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {[...Array(4)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-gray-800' : 'bg-white'}`}
            aria-current={currentSlide === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => handleSlideIndicatorClick(index)}
          ></button>
        ))}
      </div>

      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrevSlide}>
        {/* Add SVG for Previous */}
      </button>

      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextSlide}>
        {/* Add SVG for Next */}
      </button>
    </div>
  );
};

export default Carousel;
