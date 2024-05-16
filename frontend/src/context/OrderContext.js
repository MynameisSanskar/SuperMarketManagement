import React, { createContext, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderItems, setOrderItems] = useState([]);

  const addToOrder = (category, productId, quantity) => {
    const existingItem = orderItems.find(
      (item) => item.category === category && item.productId === productId
    );

    if (existingItem) {
      const updatedItems = orderItems.map((item) =>
        item === existingItem ? { ...item, quantity: quantity } : item
      );
      setOrderItems(updatedItems);
    } else {
      const newItem = { category, productId, quantity };
      setOrderItems([...orderItems, newItem]);
    }
  };

  const removeFromOrder = (category, productId) => {
    const updatedItems = orderItems.filter(
      (item) => !(item.category === category && item.productId === productId)
    );
    setOrderItems(updatedItems);
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  return (
    <OrderContext.Provider
      value={{ orderItems, addToOrder, removeFromOrder, clearOrder }}
    >
      {children}
    </OrderContext.Provider>
  );
};
