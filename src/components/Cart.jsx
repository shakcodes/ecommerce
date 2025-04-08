import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";


export default function Cart({ cart, setCart, handleChange }) {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handlePrice = () => {
    let ans = 0;
    cart.forEach((item) => {
      ans += item.amount * item.price;
    });
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div className="top-16 right-5 bg-white shadow-lg rounded-lg p-4 w-full border border-gray-200">
      <h2 className="text-lg font-bold text-gray-800 mb-3">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500 text-sm">Cart is empty.</p>
      ) : (
        <ul className="flex flex-wrap flex-col w-1/2 justify-center ml-96 space-y-2">
          {cart.map((item) => (
            <li key={item.id} className="flex items-center justify-between border-b pb-2">
              <img src={item.img} alt={item.title} className="w-10 h-10 rounded-md" />
              <div className="flex-1 ml-2">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="text-xs text-gray-500">Rs.{item.price}</p>
              </div>
              <div className="flex items-center pl-2 space-x-2">
                <button 
                  className="px-2 py-1 text-white bg-indigo-500 rounded-md hover:bg-indigo-600"
                  onClick={() => handleChange(item, +1)}
                >
                  +
                </button>
                <span className="text-sm font-semibold">{item.amount}</span>
                <button 
                  className="px-2 py-1 text-white bg-red-500 rounded-md hover:bg-red-600"
                  onClick={() => handleChange(item, -1)}
                >
                  -
                </button>
              </div>
              <button
                className="text-red-500 text-xs font-bold pl-2 hover:text-red-700"
                onClick={() => handleRemove(item.id)}
              >
                <ImCross/>
              </button>
            </li>
          ))}
          <div className="mt-3 flex justify-between text-lg font-bold">
            <span>Total Amount:</span>
            <span>Rs.{price}</span>
          </div>
        </ul>
      )}
    </div>
  );
}
