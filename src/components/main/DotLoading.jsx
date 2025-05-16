import React from 'react'

function DotLoading() {
    return (
        <div className='flex h-8 space-x-3 justify-center items-center'>
            {/* Coffee-themed loading dots */}
            <div className='h-3 w-3 bg-amber-700 rounded-full animate-bounce [animation-delay:-0.3s] 
                          transform transition-all duration-300'></div>
            <div className='h-4 w-4 bg-amber-600 rounded-full animate-bounce [animation-delay:-0.15s] 
                          transform transition-all duration-300'></div>
            <div className='h-3 w-3 bg-amber-500 rounded-full animate-bounce 
                          transform transition-all duration-300'></div>
            
            {/* Optional: Add coffee bean icon between dots for extra branding */}
            <svg 
                className="w-5 h-5 text-amber-800 animate-pulse opacity-70 ml-3" 
                viewBox="0 0 24 24" 
                fill="currentColor"
            >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C10.61 6.48 12 6 12 6s1.39.48 2.74 1.77c.98 2.39 2.85 4.32 5.21 5.37.03.28.05.57.05.86 0 4.42-3.58 8-8 8z" />
            </svg>
        </div>
    )
}

export default DotLoading