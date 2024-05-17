import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ link, image, title }) => {
  return (
    <Link to={"/project" + link} className="category-card text-center">
      <img src={image} alt={title} className="w-full h-auto" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </Link>
    // <!--hello/>
  );
};

export default CategoryCard;
