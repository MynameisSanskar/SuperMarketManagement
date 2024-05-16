import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({ link, image, title }) => {
  return (
    <Link to={"/project"+link} className="category-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </Link>
  );
};

export default CategoryCard;
