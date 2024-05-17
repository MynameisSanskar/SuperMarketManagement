import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bag from "../assets/apparel_lifestyle/bag.webp";
import bedsheet from "../assets/apparel_lifestyle/bedsheet.webp";
import handkerchief from "../assets/apparel_lifestyle/handkerchief.webp";
import sunglasses_1 from "../assets/apparel_lifestyle/sunglasses_1.webp";
import sunglasses_2 from "../assets/apparel_lifestyle/sunglasses_2.webp";
import t_shirt from "../assets/apparel_lifestyle/t_shirt.webp";
import { AuthContext } from "../context/AuthContext";

const ApparelLifestyle = () => {
  const { addToOrder } = useContext(AuthContext);
  const products = [
    {
      id: "bag",
      name: "Bag",
      price: 3999,
      image: bag,
    },
    {
      id: "bedsheet",
      name: "Bedsheet",
      price: 5999,
      image: bedsheet,
    },
    {
      id: "handkerchief",
      name: "Handkerchief",
      price: 999,
      image: handkerchief,
    },
    {
      id: "sunglasses-1",
      name: "Sunglasses 1",
      price: 2999,
      image: sunglasses_1,
    },
    {
      id: "t-shirt",
      name: "T-Shirt",
      price: 1999,
      image: t_shirt,
    },
    {
      id: "sunglasses-2",
      name: "Sunglasses 2",
      price: 3499,
      image: sunglasses_2,
    },
  ];

  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = 0;
      return acc;
    }, {})
  );

  const incrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decrementQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <header className="bg-blue-500 text-white py-4">
        <h1 className="text-3xl font-bold text-center">Apparel & Lifestyle</h1>
      </header>
      <div className="container mx-auto px-8 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-45 object-cover rounded-t-lg"
            style={{height:'500px'}}/>
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-700">
                Price: ₹{product.price.toFixed(2)}
              </p>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-l-md"
                    onClick={() => decrementQuantity(product.id)}
                  >
                    -
                  </button>
                  <span className="px-3 py-1 bg-gray-200">
                    {quantities[product.id]}
                  </span>
                  <button
                    className="quantity-btn px-3 py-1 bg-blue-500 text-white rounded-r-md"
                    onClick={() => incrementQuantity(product.id)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="px-4 py-1 bg-green-500 text-white"
                  onClick={() => {
                    addToOrder(
                      "ApparelLifestyle",
                      product.id,
                      quantities[product.id]
                    );
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ApparelLifestyle;
