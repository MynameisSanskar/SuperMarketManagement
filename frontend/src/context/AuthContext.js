import { createContext, useState, useReducer, useEffect } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });
  const [orderItems, setOrderItems] = useState([]);
  const [tot, setTot] = useState({ count: 0, cost: 0 });

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
    return updatedItems;
  };

  const clearOrder = () => {
    setOrderItems([]);
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state:", state);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
        addToOrder,
        removeFromOrder,
        clearOrder,
        orderItems,
        setOrderItems,
        tot,
        setTot,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
