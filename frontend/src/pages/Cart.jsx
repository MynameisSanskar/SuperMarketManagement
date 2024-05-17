import React, { useContext, useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { getDatabase, ref, child, get } from "firebase/database";
import { database } from "../utils/firebase";

function replaceBeforeLastSlash(str, replacement) {
  if (str) {
    const lastSlashIndex = str.lastIndexOf("/");

    if (lastSlashIndex === -1) {
      return str; // No slash found, return the original string
    }

    const beforeLastSlash = str.substring(0, lastSlashIndex);
    const afterLastSlash = str.substring(lastSlashIndex);

    return replacement + afterLastSlash;
  }
}
function Cart() {
  const [total, setTotal] = useState(0);
  const [items, setI] = useState([]);
  const navigate = useNavigate();
  const { orderItems, removeFromOrder, clearOrder, setTot } =
    useContext(AuthContext);
  console.log(orderItems);
  useEffect(() => {
    const getItems = async () => {
      if (orderItems) {
        const dbRef = ref(getDatabase());
        for (let idx in orderItems) {
          let e = orderItems[idx];
          get(child(dbRef, `/Categories/${e.category}`))
            .then((snapshot) => {
              if (snapshot.exists()) {
                let val = snapshot.val();
                for (let key in val) {
                  if (val[key].id === e.productId) {
                    val[key]["count"] = e.quantity;
                    val[key]["category"] = e.category;
                    setTotal(
                      (prevTotal) =>
                        prevTotal + val[key]["count"] * val[key]["price"]
                    );
                    setI((prevItems) => [...prevItems, val[key]]);
                  }
                }
              } else {
                console.log("No data available");
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
    };
    getItems();
  }, [orderItems]);
  return (
    <>
      <div className="flex-row flex justify-between m-7 space-x-3">
        <div className=" flex flex-col w-3/5 border-2  border-gray-300 rounded-xl p-10 ">
          <div className="flex flex-row justify-between ">
            <div className=" ">
              <span className="font-bold text-3xl">CART</span>
              <span className="text-gray-400 text-sm px-3">
                ( {items.length} Products )
              </span>
            </div>
            <div
              className="text-red-600  items-center flex-row flex space-x-1 hover:cursor-pointer hover:text-black hover:underline"
              onClick={() => {
                clearOrder();
                setI([]);
                setTotal(0);
              }}
            >
              <CancelOutlinedIcon />
              <span>clear cart</span>
            </div>
          </div>
          <div className="flex flex-col space-y-3 mt-14 w-full">
            <div className="flex flex-row justify-around">
              <span>Product</span>
              <span>Count</span>
              <span>Price</span>
            </div>
            <div className="flex flex-col space-y-4 ">
              {items.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex flex-row justify-around items-center border-2 border-gray-300 rounded-xl p-3"
                  >
                    <div className="flex flex-row space-x-5 items-center">
                      <img
                        src={replaceBeforeLastSlash(item.image, "./")}
                        alt="product_image"
                        className=" size-20  rounded-xl"
                      />
                      <div>
                        <div className=" font-bold">{item.name}</div>
                        <div className=" text-sm text-gray-400">
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AddCircleOutlineOutlinedIcon />
                      <div>{item.count}</div>
                      <RemoveCircleOutlineOutlinedIcon />
                    </div>

                    <div className=" font-bold font-mono">Rs. {item.price}</div>
                    <div
                      onClick={() => {
                        // setI(removeFromOrder(item.category, item.id));
                        setTotal(0);
                        removeFromOrder(item.category, item.id);
                        setI([]);
                      }}
                    >
                      <CancelOutlinedIcon className=" text-red-500 hover:cursor-pointer hover:text-black" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className=" rounded-xl bg-neutral-300 flex flex-col w-2/5 h-fit p-5">
          <div className=" font-bold text-lg my-4">PromoCode</div>
          <div className=" w-full flex flex-row border-2 border-black rounded-full h-fit p-1 ">
            <input
              placeholder="Enter Promocode here..."
              className=" basis-full ml-3 bg-transparent inline focus:outline-none"
            />
            <div className="rounded-full bg-indigo-600 w-2/5 p-2 text-white text-center">
              Apply
            </div>
          </div>
          <hr />
          <div className="flex flex-col space-y-2 mt-4 w-full p-5">
            <div className=" flex flex-row text-zinc-500 justify-between">
              Subtotal <span>Rs. {total}</span>
            </div>
            <div className=" flex flex-row text-red-400 justify-between">
              Discount <span>- Rs. 50</span>
            </div>
            <div className=" flex flex-row font-bold text-lg justify-between ">
              Total <span>Rs. {total - 50}</span>
            </div>
          </div>
          <div
            onClick={() => {
              setTot(
                total > 0 ? { count: 5, cost: total } : { count: 0, cost: 0 }
              );
              navigate("/payment");
            }}
            className=" w-full rounded-full  bg-emerald-400 text-center font-bold  hover:cursor-pointer hover:bg-green-400 p-3 "
          >
            Checkout
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
