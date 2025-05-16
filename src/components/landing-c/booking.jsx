import React from 'react'
import Button from './Button'

function Booking() {
  // Cafe-themed background image (replace with your actual cafe image)
  const CAFE_EVENT_IMAGE = "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80";

  return (
    <div 
      className='relative w-full md:h-96 rounded-3xl overflow-hidden shadow-xl'
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 100%), url(${CAFE_EVENT_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Decorative coffee beans overlay */}
     
      
      <div className='relative z-10 h-full flex items-center px-8 py-12 md:px-16'>
        <div className='md:w-1/2 max-md:w-full space-y-6'>
          <h1 className='text-3xl md:text-4xl font-serif font-bold text-amber-50 leading-tight'>
            Host Your Special Event With Us
          </h1>
          
          <p className='text-lg text-amber-100 font-light max-w-lg'>
            From intimate gatherings to grand celebrations, our café provides the perfect ambiance and culinary experience for your private parties, weddings, and special events.
          </p>
          
          <div className='flex gap-4'>
            <Button 
              text='Book Now' 
              link='store' 
              style='px-6 py-3 bg-amber-600 hover:bg-amber-700 text-amber font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
            />
           <Button 
  text='View Menu' 
  link='store' 
  style='px-6 py-3 bg-transparent border-2 border-amber-500 text-amber-900 hover:bg-amber-100 font-medium rounded-lg transition-all duration-300'
/>

          </div>
          
          {/* Trust indicators */}
          <div className='flex items-center gap-4 mt-6'>
            <div className='w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <span className='text-amber-100 text-sm'>50+ Successful Events Hosted</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Booking