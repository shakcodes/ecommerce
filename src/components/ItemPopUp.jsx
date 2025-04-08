import React from "react";

export default function ItemPopUp({ item, closePopup,handleClick }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white w-[50%] rounded-lg p-6 shadow-xl relative">
        {/* Close Button */}
        <button 
          onClick={closePopup} 
          className="absolute top-2 right-3 text-xl text-gray-700 hover:text-red-500"
        >
          ✖
        </button>

        {/* Popup Content */}
        <div className="flex flex-col items-center text-center">
          <img 
            src={item.img} 
            alt={item.title} 
            className="w-[300px] h-[300px] object-cover rounded-lg shadow-md"
          />
          <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
          <p className="text-gray-600 mt-1">by {item.author}</p>
          <span className="text-lg font-bold text-indigo-600 mt-2">
            Rs. {item.price}
          </span>
          <button 
            onClick={() => handleClick(item)} 
            className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition duration-300 shadow-md"
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
