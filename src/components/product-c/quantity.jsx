import React from 'react'
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function Quantity({ handleQuantity, quantity }) {
  return (
    <div className='flex items-center'>
      <button 
        onClick={() => handleQuantity(quantity - 1)}
        className='w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-800 hover:bg-amber-200 transition-colors duration-200'
        aria-label="Decrease quantity"
      >
        <FaMinus className="text-sm" />
      </button>
      
      <div className='mx-4 w-12 text-center text-lg font-medium text-amber-900'>
        {quantity}
      </div>
      
      <button 
        onClick={() => handleQuantity(quantity + 1)}
        className='w-10 h-10 flex items-center justify-center rounded-full bg-amber-600 text-white hover:bg-amber-700 transition-colors duration-200'
        aria-label="Increase quantity"
      >
        <FaPlus className="text-sm" />
      </button>
    </div>
  )
}

export default Quantity;