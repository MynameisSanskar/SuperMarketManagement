import React from "react";
import { useNavigate } from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex flex-row p-10 space-x-3">
        <div className="flex flex-col basis-3/5 w-full space-y-3  border-2">
          <p className=" font-bold text-3xl">Payment Details</p>
          <div>
            <p className=" text-gray-700">Email Address</p>
            <input
              placeholder="xyz@gmail.com"
              type="email"
              className=" border-2 border-gray-500 rounded-lg p-2"
            />
          </div>
          <div>
            <p className=" text-gray-700">Phone</p>
            <input
              placeholder="(+91) 7715051236"
              type="tel"
              className=" border-2 border-gray-500 rounded-lg p-2"
            />
          </div>
          <div>
            <p className=" text-gray-700">Shipping Address</p>
            <input
              placeholder="Carol House, Lane street, Denmark, India"
              type="text"
              className=" border-2 border-gray-500 rounded-lg p-2"
            />
          </div>
          <div>
            <p className=" text-gray-700">Payment Method</p>
            <div className="flex flex-row space-x-3">
              <div className=" border-2 border-gray-500 rounded-xl p-2 flex flex-row items-center space-x-3">
                <input type="radio" id="visa" name="payment_method" />
                <label
                  htmlFor="visa"
                  className="flex flex-row items-center space-x-3"
                >
                  <span>Debit/Credit Card</span>
                  <img src="./visa.svg" alt="visa_image" />
                </label>
              </div>
              <div className=" border-2 border-gray-500 rounded-xl p-2 flex flex-row items-center space-x-3">
                <input type="radio" id="gpay" name="payment_method" />
                <label
                  htmlFor="gpay"
                  className="flex flex-row items-center space-x-3"
                >
                  <span>UPI</span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg"
                    alt="gpay_image"
                    className="size-12"
                  />
                </label>
              </div>
            </div>
          </div>
          <div>
            <p className=" text-gray-700">Credit Card Number</p>
            <input
              placeholder="**** **** **** ****"
              type="text"
              className=" border-2 border-gray-500 rounded-lg p-2 text-center"
            />
          </div>
          <div className="flex flex-row space-x-2">
            <div>
              <p className=" text-gray-700">Expiry Date</p>
              <input
                placeholder="date/month/year"
                type="date"
                className=" border-2 border-gray-500 rounded-lg p-2 "
              />
            </div>
            <div>
              <p className=" text-gray-700">CVV</p>
              <input
                placeholder="****"
                type="number"
                className=" border-2 border-gray-500 rounded-lg p-2 text-center "
              />
            </div>
          </div>
          <div
            onClick={() => navigate("/delivery")}
            className=" w-3/5 rounded-full  bg-emerald-400 text-center font-bold text-white hover:cursor-pointer hover:bg-green-400 p-3 "
          >
            Confirm Payment
          </div>
        </div>

        <div className="flex flex-col space-y-3 bg-zinc-300 h-fit p-5 rounded-xl w-1/2">
          <div className="flex flex-row justify-between">
            <p className=" font-bold text-2xl ">Total</p>
            <span className=" font-bold text-2xl text-green-600">Rs. 1200</span>
          </div>
          <hr className=" border-black" />
          <div className="flex flex-row justify-between">
            <p className=" font-bold text-lg">Items</p>
            <span className=" font-bold text-lg">5</span>
          </div>
          <div className="flex flex-row justify-between">
            <p className=" font-bold text-lg">Discount</p>
            <span className=" font-bold text-lg text-red-500">-Rs. 50</span>
          </div>
          <div className="flex flex-row justify-between">
            <p className=" font-bold text-lg">Shpping Cost</p>
            <span className=" font-bold text-lg">Free</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Payment;
