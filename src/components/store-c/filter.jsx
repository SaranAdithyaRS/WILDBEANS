import React from 'react'

function Filter({ filters, handleChange }) {
  const grind = ["Whole Bean", "Cafetiere", "Filter", "Espresso", "French press", "Pour Over"];
  const Region = ["Central America", "Africa", "South America", "Asia Pacific", "Middle East"];

  return (
    <div className='sticky w-full h-[75vh] border border-gray-200 top-40 rounded-lg p-5 overflow-y-auto bg-white shadow-sm'>
      {/* Price Filter */}
      <div className='mb-6'>
        <div className='flex justify-between items-center mb-3'>
          <h1 className='text-xl font-semibold text-gray-800'>Price</h1>
          <button 
            onClick={() => handleChange("reset")}
            className='text-sm bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition-colors'
          >
            Reset
          </button>
        </div>
        <input 
          type="range" 
          min={100} 
          max={1500} 
          step={100} 
          value={filters.price}
          name="price" 
          onChange={handleChange} 
          className='w-full h-1 bg-gray-300 rounded-full appearance-none cursor-pointer mb-2' 
        />
        <div className='flex justify-between text-sm text-gray-600'>
          <span>₹100</span>
          <span>₹{filters.price}</span>
        </div>
      </div>

      {/* Region Filter */}
      <div className='mb-6'>
        <h1 className='text-xl font-semibold text-gray-800 mb-3'>Region</h1>
        <ul className='space-y-2'>
          {Region.map((data, index) => (
            <li key={index} className='flex items-center'>
              <input 
                type="radio" 
                id={`region-${index}`}
                name="region" 
                checked={filters.region === data}
                value={data} 
                onChange={handleChange} 
                className='mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500'
              />
              <label htmlFor={`region-${index}`} className='text-gray-700'>
                {data}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Grind Option */}
      <div className='mb-6'>
        <h1 className='text-xl font-semibold text-gray-800 mb-3'>Grind</h1>
        <ul className='space-y-2'>
          {grind.map((data, index) => (
            <li key={index} className='flex items-center'>
              <input 
                type="radio" 
                id={`grind-${index}`}
                name="grind_option" 
                checked={filters.grind_option === data}
                value={data} 
                onChange={handleChange} 
                className='mr-2 h-4 w-4 text-amber-600 focus:ring-amber-500'
              />
              <label htmlFor={`grind-${index}`} className='text-gray-700'>
                {data}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Filter