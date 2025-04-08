import React, { useState } from "react";
import ItemPopUp from "./ItemPopUp";

export default function Card({ data, handleClick = () => {} }) {
  const { title, author, price, img } = data;

  const [item, setItem] = useState(null);

  return (
    <>
      <div className="w-[20%] bg-white shadow-lg rounded-2xl overflow-hidden p-4 border border-gray-200 hover:shadow-2xl transition-shadow duration-300">
        {/* Image Section */}
        <div className="w-full h-48 flex justify-center items-center overflow-hidden rounded-lg">
          <img src={img} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>

        {/* Title & Author */}
        <div className="mt-4 text-center">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-500 mt-1">by {author}</p>
        </div>

        {/* Price Section */}
        <div className="mt-3 text-center">
          <span className="text-lg font-bold text-indigo-600">Rs. {price}</span>
        </div>

        {/* Button Section */}
        <div className="mt-5 w-full flex justify-between">
          {/* View Button */}
          <button 
            className="bg-yellow-100 font-semibold py-2 px-5 rounded-lg hover:bg-yellow-300 transition duration-300 shadow-md"
            onClick={() => setItem(data)}
          >
            View
          </button>

          {/* Add to Cart Button */}
          <button 
            onClick={() => handleClick(data)} 
            className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>

      {/* Show Popup If Item is Selected */}
      {item && <ItemPopUp item={item} closePopup={() => setItem(null)} handleClick={handleClick}/>}
    </>
  );
}
