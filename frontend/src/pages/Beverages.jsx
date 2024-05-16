import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bisleri_jar from "../assets/beverages/bisleri_jar.webp";
import hershey_milk from "../assets/beverages/hershey_milk_shake.webp";
import raw_mango_drink from "../assets/beverages/raw_mango_drink.webp";
import red_bull from "../assets/beverages/red_bull.webp";
import rooh_afza from "../assets/beverages/rooh_afza.webp";
import sprite from "../assets/beverages/sprite.webp";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Beverages = () => {
  const { addToOrder, orderItems } = useContext(AuthContext);
  console.log(orderItems);
  const [quantities, setQuantities] = useState({
    "quantity-bisleri-jar": 0,
    "quantity-hershey-milk-shake": 0,
    "quantity-raw-mango-drink": 0,
    "quantity-red-bull": 0,
    "quantity-rooh-afza": 0,
    "quantity-sprite": 0,
  });

  const incrementQuantity = (quantityId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [quantityId]: prevQuantities[quantityId] + 1,
    }));
  };

  const decrementQuantity = (quantityId) => {
    if (quantities[quantityId] >= 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [quantityId]: prevQuantities[quantityId] - 1,
      }));
    }
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Beverages</h1>
      </header>
      <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Card 1: Bisleri Jar */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={bisleri_jar}
              alt="Bisleri Jar"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Bisleri Jar</h2>
              <p className="text-gray-700">Price: ₹199</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-bisleri-jar")}
                  >
                    -
                  </button>
                  <span
                    id="quantity-bisleri-jar"
                    className="px-3 py-1 bg-gray-200"
                  >
                    {quantities["quantity-bisleri-jar"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-bisleri-jar")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "Beverages",
                      1,
                      quantities["quantity-bisleri-jar"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Hershey Milk Shake */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={hershey_milk}
              alt="Hershey Milk Shake"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Hershey Milk Shake</h2>
              <p className="text-gray-700">Price: ₹249</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-hershey-milk-shake")
                    }
                  >
                    -
                  </button>
                  <span
                    id="quantity-hershey-milk-shake"
                    className="px-3 py-1 bg-gray-200"
                  >
                    {quantities["quantity-hershey-milk-shake"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-hershey-milk-shake")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "Beverages",
                      2,
                      quantities["quantity-hershey-milk-shake"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Raw Mango Drink */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={raw_mango_drink}
              alt="Raw Mango Drink"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Raw Mango Drink</h2>
              <p className="text-gray-700">Price: ₹199</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-raw-mango-drink")
                    }
                  >
                    -
                  </button>
                  <span
                    id="quantity-raw-mango-drink"
                    className="px-3 py-1 bg-gray-200"
                  >
                    {quantities["quantity-raw-mango-drink"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-raw-mango-drink")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "Beverages",
                      3,
                      quantities["quantity-raw-mango-drink"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Red Bull */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={red_bull}
              alt="Red Bull"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Red Bull</h2>
              <p className="text-gray-700">Price: ₹299</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-red-bull")}
                  >
                    -
                  </button>
                  <span
                    id="quantity-red-bull"
                    className="px-3 py-1 bg-gray-200"
                  >
                    {quantities["quantity-red-bull"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-red-bull")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder("Beverages", 4, quantities["quantity-red-bull"]);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Rooh Afza */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={rooh_afza}
              alt="Rooh Afza"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Rooh Afza</h2>
              <p className="text-gray-700">Price: ₹349</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-rooh-afza")}
                  >
                    -
                  </button>
                  <span
                    id="quantity-rooh-afza"
                    className="px-3 py-1 bg-gray-200"
                  >
                    {quantities["quantity-rooh-afza"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-rooh-afza")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "Beverages",
                      5,
                      quantities["quantity-rooh-afza"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Sprite */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={sprite}
              alt="Sprite"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Sprite</h2>
              <p className="text-gray-700">Price: ₹199</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-sprite")}
                  >
                    -
                  </button>
                  <span id="quantity-sprite" className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-sprite"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-sprite")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder("Beverages", 6, quantities["quantity-sprite"]);
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

export default Beverages;
