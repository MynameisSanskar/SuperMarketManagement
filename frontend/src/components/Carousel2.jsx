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
  <div class="flex ">
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="#">
        <img class=" rounded-t-lg" src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8eacc329e456d1e2.jpg?q=20" alt="product image" />
    </a>
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="#">
        <img class=" rounded-t-lg" src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/893ea2a230487675.jpg?q=20" alt="product image" />
    </a>
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="#">
        <img class=" rounded-t-lg" src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/e2db10907d69915e.jpg?q=20" alt="product image" />
    </a>
   
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="#">
        <img class=" rounded-t-lg" src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/4c35a59d166e1064.jpg?q=20" alt="product image" />
    </a>
   
</div>
</div>

  );
};

export default Carousel;
