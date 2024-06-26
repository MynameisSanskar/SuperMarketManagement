import React, { useState } from 'react';
import product1 from '../asssets/product1.png'
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
  <div class="flex justifiy-content">
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
<a href="/project/Beverages">
    <img class="rounded-t-lg" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715101737_Refreshing_Summer.jpg?im=Resize=(768,448)" alt="product image" />
</a>
   
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
<a href="/project/BabyCare">
    <img style={{height:'221px',width:'383px'}} class="rounded-t-lg max-w-30 max-h-30" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e24ab737316811.573c375a45bf8.jpg" alt="product image" />
</a>
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="/project/CleaningEssentials">
        <img  style={{height:'221px',width:'383px'}} class=" rounded-t-lg" src={product1} alt="product image" />
    </a>
   
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="/project/ApparelLifestyle">
        <img style={{height:'221px',width:'383px'}} class=" rounded-t-lg" src="https://rukminim2.flixcart.com/fk-p-flap/520/280/image/22e305bf45e2e1a2.jpeg?q=20" alt="product image" />
    </a>
   
</div>
</div>

  );
};

export default Carousel;
