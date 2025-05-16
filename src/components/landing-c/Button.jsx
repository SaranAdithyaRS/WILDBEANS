import React from 'react'
import { Link } from 'react-router-dom'

function Button({ text, link, style = "" }) {
  return (
    <Link to={link}>
      <button
        className={`
          inline-flex items-center justify-center
          px-6 py-3 min-w-32 rounded-full font-medium
          text-amber-900 bg-white
          border-2 border-amber-500
          hover:bg-amber-600 hover:text-white
          shadow-md hover:shadow-lg
          transition-all duration-300 ease-out
          group relative overflow-hidden
          ${style}
        `}
      >
        {text}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="ml-2 h-5 w-5 text-amber-700 group-hover:text-amber-200 transition-colors"
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clipRule="evenodd" />
        </svg>
      </button>
    </Link>
  )
}

export default Button;
