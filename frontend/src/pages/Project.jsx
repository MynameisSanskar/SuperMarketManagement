import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import CategoryCard from '../components/CategoryCard';
import Vegetable from '../assets/fruits_vegetables.jpg'
import Apparel from '../assets/apparel_lifestyle.jpg'
import Beverage from '../assets/beverages.jpg'
import Cleaning from '../assets/cleaning_essentials.jpg'
import Baby from '../assets/baby_care.jpg'
import Pet from '../assets/pet_care.jpg'
import Footer from '../components/Footer'
// import ApparelLifestyle from '../pages/apparel_lifestyle'

const App = () => {
  // State for delivery time
  const [deliveryTime, setDeliveryTime] = useState(12);

  // State for selected location
  const [location, setLocation] = useState('Lalbaug Flyover, Byculla East, Byculla, Mumbai, Maharashtra');

  // Handler for changing delivery time
  const handleDeliveryTimeChange = () => {
    // Logic to change delivery time
  };

  // Handler for changing location
  const handleLocationChange = () => {
    // Logic to change location
  };

  return (
    <div className="bg-gray-100">
      <Navbar/>
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Categories</h1>
      </header>
      <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        <CategoryCard link="/FruitsAndVegetables" image={Vegetable} title="Fruits and Vegetables" />
        <CategoryCard link="/ApparelLifestyle" image={Apparel} title="Apparel & Lifestyle" />
        <CategoryCard link="/Beverages" image={Beverage} title="Beverages" />
        <CategoryCard link="/CleaningEssentials" image={Cleaning} title="Cleaning Essentials" />
        <CategoryCard link="/BabyCare" image={Baby} title="Baby Care" />
        <CategoryCard link="/PetCareEssentials" image={Pet} title="Pet Care" />
      </div>
      <Footer/>
    </div>
  );
};

export default App;
