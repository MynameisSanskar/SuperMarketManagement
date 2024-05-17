import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ladyFinger from "../assets/fruits_vegetables/lady_finger.webp";
import apple from "../assets/fruits_vegetables/apple.webp";
import cabbage from "../assets/fruits_vegetables/cabbage.webp";
import litchi from "../assets/fruits_vegetables/litchi.webp";
import mango from "../assets/fruits_vegetables/mango.webp";
import onion from "../assets/fruits_vegetables/onion.webp";
import { AuthContext } from "../context/AuthContext";

const FruitsAndVegetables = () => {
  const { addToOrder, orderItems } = useContext(AuthContext);
  console.log(orderItems);
  const [quantities, setQuantities] = useState({
    "quantity-lady-finger": 0,
    "quantity-litchi": 0,
    "quantity-cabbage": 0,
    "quantity-apple": 0,
    "quantity-mango": 0,
    "quantity-onion": 0,
  });

  const incrementQuantity = (quantityId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [quantityId]: prevQuantities[quantityId] + 1,
    }));
  };

  const decrementQuantity = (quantityId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [quantityId]:
        prevQuantities[quantityId] > 0 ? prevQuantities[quantityId] - 1 : 0,
    }));
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">
          Fruits and Vegetables
        </h1>
      </header>
      <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Card 1: Lady Finger */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={ladyFinger}
              alt="Lady Finger"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Lady Finger</h2>
              <p className="text-gray-700">Price: ₹49</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-lady-finger")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-lady-finger"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-lady-finger")}
                  >
                    +
                  </button>
                </div>
                <button
                  to="/cart"
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      1,
                      quantities["quantity-lady-finger"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 2: Litchi */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={litchi}
              alt="Litchi"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Litchi</h2>
              <p className="text-gray-700">Price: ₹399</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-litchi")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-litchi"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-litchi")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      2,
                      quantities["quantity-litchi"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3: Cabbage */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={cabbage}
              alt="Cabbage"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Cabbage</h2>
              <p className="text-gray-700">Price: ₹149</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-cabbage")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-cabbage"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-cabbage")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      3,
                      quantities["quantity-cabbage"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4: Apple */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={apple}
              alt="Apple"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Apple</h2>
              <p className="text-gray-700">Price: ₹299</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-apple")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-apple"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-apple")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      4,
                      quantities["quantity-apple"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5: Mango */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={mango}
              alt="Mango"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Mango</h2>
              <p className="text-gray-700">Price: ₹199</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-mango")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-mango"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-mango")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      5,
                      quantities["quantity-mango"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6: Onion */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md justify-center">
            <img
              src={onion}
              alt="Onion"
              className="w-full h-47 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Onion</h2>
              <p className="text-gray-700">Price: ₹49</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-onion")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-onion"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-onion")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "FruitsAndVegetables",
                      6,
                      quantities["quantity-onion"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FruitsAndVegetables;
