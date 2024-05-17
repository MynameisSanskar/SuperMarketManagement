import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cerelac_baby_food from "../assets/baby_care/cerelac_baby_food.webp";
import himalaya_baby_lotion from "../assets/baby_care/himalaya_baby_lotion.webp";
import johnsons_baby_shampoo from "../assets/baby_care/johnsons_baby_shampoo.webp";
import johnsons_baby_soap from "../assets/baby_care/johnsons_baby_soap.webp";
import johnsons_baby_wipes from "../assets/baby_care/johnsons_baby_wipes.webp";
import vicks_babyrub from "../assets/baby_care/vicks_babyrub.webp";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const BabyCare = () => {
  const { addToOrder, orderItems } = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(orderItems);
  const initialQuantities = {
    cerelacBabyFood: 0,
    himalayaBabyLotion: 0,
    johnsonsBabyShampoo: 0,
    johnsonsBabySoap: 0,
    johnsonsBabyWipes: 0,
    vicksBabyRub: 0,
  };

  const [quantities, setQuantities] = useState(initialQuantities);

  const incrementQuantity = (product) => {
    setQuantities({
      ...quantities,
      [product]: quantities[product] + 1,
    });
  };

  const decrementQuantity = (product) => {
    setQuantities({
      ...quantities,
      [product]: quantities[product] > 0 ? quantities[product] - 1 : 0,
    });
  };

  return (
    <div className="bg-gray-100">
      <Navbar />
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Baby Care Essentials</h1>
      </header>
      <div className="container mx-auto py-8 flex flex-wrap justify-center gap-8">
        {/* Card 1: Cerelac Baby Food */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={cerelac_baby_food}
              alt="Cerelac Baby Food"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Cerelac Baby Food</h2>
              <p className="text-gray-700">Price: ₹599</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("cerelacBabyFood")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.cerelacBabyFood}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("cerelacBabyFood")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "cerelacBabyFood",
                      quantities["cerelacBabyFood"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Himalaya Baby Lotion */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={himalaya_baby_lotion}
              alt="Himalaya Baby Lotion"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Himalaya Baby Lotion</h2>
              <p className="text-gray-700">Price: ₹349</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("himalayaBabyLotion")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.himalayaBabyLotion}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("himalayaBabyLotion")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "himalayaBabyLotion",
                      quantities["himalayaBabyLotion"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Johnson's Baby Shampoo */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={johnsons_baby_shampoo}
              alt="Johnson's Baby Shampoo"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Johnson's Baby Shampoo</h2>
              <p className="text-gray-700">Price: ₹499</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("johnsonsBabyShampoo")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.johnsonsBabyShampoo}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("johnsonsBabyShampoo")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "johnsonsBabyShampoo",
                      quantities["johnsonsBabyShampoo"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Johnson's Baby Soap */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={johnsons_baby_soap}
              alt="Johnson's Baby Soap"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Johnson's Baby Soap</h2>
              <p className="text-gray-700">Price: ₹399</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("johnsonsBabySoap")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.johnsonsBabySoap}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("johnsonsBabySoap")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "johnsonsBabySoap",
                      quantities["johnsonsBabySoap"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 5: Johnson's Baby Wipes */}
        <div className="w-full sm:w-1/2 lg:w-1/4">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={johnsons_baby_wipes}
              alt="Johnson's Baby Wipes"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Johnson's Baby Wipes</h2>
              <p className="text-gray-700">Price: ₹399</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("johnsonsBabyWipes")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.johnsonsBabyWipes}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("johnsonsBabyWipes")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "johnsonsBabyWipes",
                      quantities["johnsonsBabyWipes"]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card 6: Vicks BabyRub */}
        <div className="w-full sm:w-1/2 lg:w-1/3">
          <div className="card bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={vicks_babyrub}
              alt="Vicks BabyRub"
              className="w-full h-45 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Vicks BabyRub</h2>
              <p className="text-gray-700">Price: ₹249</p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity("vicksBabyRub")}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities.vicksBabyRub}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity("vicksBabyRub")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "BabyCare",
                      "vicksBabyRub",
                      quantities["vicksBabyRub"]
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
      <button
        onClick={() => {
          navigate("/cart");
        }}
      >
        To to cart
      </button>
      <Footer />
    </div>
  );
};

export default BabyCare;
