import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import calcium_bone_dog_treats from '../assets/pet_care/calcium_bone_dog_treats.webp';
import donut_chew_toy from '../assets/pet_care/donut_chew_toy.webp';
import leather_training_leash from '../assets/pet_care/leather_training_leash.webp';
import nootie_flea_comb from '../assets/pet_care/nootie_flea_comb.webp';
import pedigree_dog_food from '../assets/pet_care/pedigree_dog_food.webp';
import whiskas_cat_food from '../assets/pet_care/whiskas_cat_food.webp';


const PetCareEssentials = () => {
    const [quantities, setQuantities] = useState({
        'quantity-calcium-bone-dog-treats': 0,
        'quantity-donut-chew-toy': 0,
        'quantity-leather-training-leash': 0,
        'quantity-nootie-flea-comb': 0,
        'quantity-pedigree-dog-food': 0,
        'quantity-whiskas-cat-food': 0
    });

    const incrementQuantity = (quantityId) => {
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [quantityId]: prevQuantities[quantityId] + 1
        }));
    };

    const decrementQuantity = (quantityId) => {
        if (quantities[quantityId] > 0) {
            setQuantities(prevQuantities => ({
                ...prevQuantities,
                [quantityId]: prevQuantities[quantityId] - 1
            }));
        }
    };

    return (
        <div className="bg-gray-100">
            <Navbar/>
            <header className="bg-blue-500 text-white py-4">
                <h1 className="text-3xl font-bold text-center">Pet Care Essentials</h1>
            </header>
            <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
                {/* Card 1: Calcium Bone Dog Treats */}
                <div className="w-full sm:w-1/2 lg:w-1/4">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={calcium_bone_dog_treats} alt="Calcium Bone Dog Treats" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Calcium Bone Dog Treats</h2>
                            <p className="text-gray-700">Price: ₹599</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-calcium-bone-dog-treats')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-calcium-bone-dog-treats']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-calcium-bone-dog-treats')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 2: Donut Chew Toy */}
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={donut_chew_toy} alt="Donut Chew Toy" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Donut Chew Toy</h2>
                            <p className="text-gray-700">Price: ₹349</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-donut-chew-toy')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-donut-chew-toy']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-donut-chew-toy')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 3: Leather Training Leash */}
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={leather_training_leash} alt="Leather Training Leash" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Leather Training Leash</h2>
                            <p className="text-gray-700">Price: ₹499</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-leather-training-leash')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-leather-training-leash']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-leather-training-leash')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 4: Nootie Flea Comb */}
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={nootie_flea_comb} alt="Nootie Flea Comb" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Nootie Flea Comb</h2>
                            <p className="text-gray-700">Price: ₹399</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-nootie-flea-comb')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-nootie-flea-comb']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-nootie-flea-comb')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 5: Pedigree Dog Food */}
                <div className="w-full sm:w-1/2 lg:w-1/4">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={pedigree_dog_food} alt="Pedigree Dog Food" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Pedigree Dog Food</h2>
                            <p className="text-gray-700">Price: ₹399</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-pedigree-dog-food')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-pedigree-dog-food']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-pedigree-dog-food')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Card 6: Whiskas Cat Food */}
                <div className="w-full sm:w-1/2 lg:w-1/3">
                    <div className="card bg-white rounded-lg overflow-hidden shadow-md">
                        <img src={whiskas_cat_food} alt="Whiskas Cat Food" className="w-full h-45 object-cover rounded-t-lg" />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold">Whiskas Cat Food</h2>
                            <p className="text-gray-700">Price: ₹249</p>
                            <div className="flex justify-between mt-4">
                                <div className="flex items-center">
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md" onClick={() => decrementQuantity('quantity-whiskas-cat-food')}>-</button>
                                    <span className="px-3 py-1 bg-gray-200">{quantities['quantity-whiskas-cat-food']}</span>
                                    <button className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md" onClick={() => incrementQuantity('quantity-whiskas-cat-food')}>+</button>
                                </div>
                                <button className="px-4 py-1 bg-green-500 text-white">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PetCareEssentials;

