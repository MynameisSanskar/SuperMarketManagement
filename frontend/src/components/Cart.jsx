import React, { useEffect, useState } from "react";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";

let items = [
  {
    name: "abc",
    color: "white",
    url: "https://www.theaudiostore.in/cdn/shop/files/QianYunQian99ProWiredEarphones0.webp?v=1701154863",
    count: 1,
    price: 250,
  },
  {
    name: "abc",
    color: "white",
    url: "https://www.theaudiostore.in/cdn/shop/files/QianYunQian99ProWiredEarphones0.webp?v=1701154863",
    count: 1,
    price: 250,
  },
  {
    name: "abc",
    color: "white",
    url: "https://www.theaudiostore.in/cdn/shop/files/QianYunQian99ProWiredEarphones0.webp?v=1701154863",
    count: 1,
    price: 250,
  },
  {
    name: "abc",
    color: "white",
    url: "https://www.theaudiostore.in/cdn/shop/files/QianYunQian99ProWiredEarphones0.webp?v=1701154863",
    count: 1,
    price: 250,
  },
  {
    name: "abc",
    color: "white",
    url: "https://www.theaudiostore.in/cdn/shop/files/QianYunQian99ProWiredEarphones0.webp?v=1701154863",
    count: 1,
    price: 250,
  },
];

function Cart() {
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let amt = 0;
    items.map(({ price, count }) => {
      amt += price * count;
    });
    setTotal(amt);
  }, []);
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
            <div className="text-red-600  items-center flex-row flex space-x-1 hover:cursor-pointer hover:text-black hover:underline">
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
                        src={item.url}
                        alt="product_image"
                        className=" size-20  rounded-xl"
                      />
                      <div>
                        <div className=" font-bold">{item.name}</div>
                        <div className=" text-sm text-gray-400">
                          {item.color}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <AddCircleOutlineOutlinedIcon />
                      <div>{item.count}</div>
                      <RemoveCircleOutlineOutlinedIcon />
                    </div>

                    <div className=" font-bold font-mono">Rs. {item.price}</div>
                    <CancelOutlinedIcon className=" text-red-500 hover:cursor-pointer hover:text-black" />
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
            <div className=" flex flex-row text-zinc-500 justify-between">
              Discount <span>- Rs. 50</span>
            </div>
            <div className=" flex flex-row font-bold text-lg justify-between ">
              Total <span>Rs. {total - 50}</span>
            </div>
          </div>
          <div className=" w-full rounded-full  bg-emerald-400 text-center font-bold  hover:cursor-pointer hover:bg-green-400 p-3 ">
            Checkout
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
