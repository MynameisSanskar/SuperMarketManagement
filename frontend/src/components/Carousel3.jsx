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
  <div class="flex content-between">
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
<a href="/project/PetCareEssentials">
    <img class="rounded-t-lg"style={{height:'221px',width:'383px'}}src="https://headsupfortails.com/cdn/shop/collections/strip_1.jpg?v=1701952156" alt="product image" />
</a>
   
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
<a href="/project/FruitsAndVegetables">
    <img style={{height:'221px',width:'383px'}} class="rounded-t-lg max-w-30 max-h-30" src="https://img.freepik.com/free-vector/hand-drawn-horizontal-sale-banner-template-world-vegetarian-day-event_23-2150800840.jpg?t=st=1715858022~exp=1715861622~hmac=2773c92490f6cd4e0452ee6b8f1259ff72cb15618024ebdc8c2dd35c8d74578d&w=1060" alt="product image" />
</a>
   
</div>

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="/project/CleaningEssentials">
        <img  style={{height:'221px',width:'383px'}} class=" rounded-t-lg" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715103750_Assam_Jharkhand_-Sikkim_Westbengal.jpg?im=Resize=(768,448)" alt="product image" />
    </a>
   
</div>
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-2">
    <a href="/project/ApparelLifestyle">
        <img style={{height:'221px',width:'383px'}} class=" rounded-t-lg" src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1715101815_Noodles.jpg?im=Resize=(768,448)" alt="product image" />
    </a>
   
</div>
</div>

  );
};

export default Carousel;
