import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ariel_detergent from "../assets/cleaning_essentials/ariel_detergent.webp";
import godrej_aer_room_freshner from "../assets/cleaning_essentials/godrej_aer_room_freshner.jpg";
import lizol_floor_cleaner from "../assets/cleaning_essentials/lizol_floor_cleaner.webp";
import mortein_mosquito_repellent from "../assets/cleaning_essentials/mortein_mosquito_repellent.webp";
import surf_excel from "../assets/cleaning_essentials/surf_excel.webp";
import vim_dishwash_gel from "../assets/cleaning_essentials/vim_dishwash_gel.webp";
import { AuthContext } from "../context/AuthContext";

const CleaningEssentials = () => {
  const { addToOrder, orderItems } = useContext(AuthContext);
  console.log(orderItems);
  const [quantities, setQuantities] = useState({
    "quantity-ariel-detergent": 0,
    "quantity-godrej-aer-room-freshner": 0,
    "quantity-lizol-floor-cleaner": 0,
    "quantity-mortein-mosquito-repellent": 0,
    "quantity-surf-excel": 0,
    "quantity-vim-dishwash-gel": 0,
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
        <h1 className="text-3xl font-bold text-center">Cleaning Essentials</h1>
      </header>
      <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Card 2: Godrej Aer Room Freshener */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md flex flex-col justify-center items-center">
            <img
              src={godrej_aer_room_freshner}
              alt="Godrej Aer Room Freshener"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                Godrej Aer Room Freshener
              </h2>
              <p className="text-gray-700">Price: ₹349</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-godrej-aer-room-freshner")
                    }
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-godrej-aer-room-freshner"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-godrej-aer-room-freshner")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "godrej-aer-room-freshner",
                      quantities["quantity-godrej-aer-room-freshner"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 1: Ariel Detergent */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={ariel_detergent}
              alt="Ariel Detergent"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Ariel Detergent</h2>
              <p className="text-gray-700">Price: ₹599</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-ariel-detergent")
                    }
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-ariel-detergent"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-ariel-detergent")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "ariel-detergent",
                      quantities["quantity-ariel-detergent"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 3: Lizol Floor Cleaner */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={lizol_floor_cleaner}
              alt="Lizol Floor Cleaner"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Lizol Floor Cleaner</h2>
              <p className="text-gray-700">Price: ₹499</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-lizol-floor-cleaner")
                    }
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-lizol-floor-cleaner"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-lizol-floor-cleaner")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "lizol-floor-cleaner",
                      quantities["quantity-lizol-floor-cleaner"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 4: Mortein Mosquito Repellent */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={mortein_mosquito_repellent}
              alt="Mortein Mosquito Repellent"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">
                Mortein Mosquito Repellent
              </h2>
              <p className="text-gray-700">Price: ₹399</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-mortein-mosquito-repellent")
                    }
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-mortein-mosquito-repellent"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-mortein-mosquito-repellent")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "mortein-mosquito-repellent",
                      quantities["quantity-mortein-mosquito-repellent"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 5: Surf Excel */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={surf_excel}
              alt="Surf Excel"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Surf Excel</h2>
              <p className="text-gray-700">Price: ₹399</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("quantity-surf-excel")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-surf-excel"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("quantity-surf-excel")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "surf-excel",
                      quantities["quantity-surf-excel"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card 6: Vim Dishwash Gel */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={vim_dishwash_gel}
              alt="Vim Dishwash Gel"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Vim Dishwash Gel</h2>
              <p className="text-gray-700">Price: ₹249</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() =>
                      decrementQuantity("quantity-vim-dishwash-gel")
                    }
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities["quantity-vim-dishwash-gel"]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() =>
                      incrementQuantity("quantity-vim-dishwash-gel")
                    }
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "CleaningEssentials",
                      "vim-dishwash-gel",
                      quantities["quantity-vim-dishwash-gel"]
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

export default CleaningEssentials;
