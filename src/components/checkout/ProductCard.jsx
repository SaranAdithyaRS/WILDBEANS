import React from 'react';
import { usePopup } from '../../config/popup';

function ProductCard({ handelCheckout, total, saveData }) {
  let { popup, handelPopcart, num } = usePopup();

  const CAFE_PRODUCTS_IMAGE =
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80';
  const CAFE_LOGO = 'https://cdn-icons-png.flaticon.com/512/805/805370.png';
  const COFFEE_CUP_ICON = 'https://cdn-icons-png.flaticon.com/512/924/924514.png';
  const PAYMENT_ICON = 'https://cdn-icons-png.flaticon.com/512/2965/2965300.png';

  return (
    <>
      <div className='relative w-full max-w-md rounded-3xl bg-gradient-to-br from-amber-50 to-amber-100 p-6 shadow-2xl shadow-amber-400/20 border border-amber-200/60 overflow-hidden transition-all duration-300 hover:shadow-amber-400/30 hover:-translate-y-1'>
        {/* Cafe logo */}
        <img
          src={CAFE_LOGO}
          alt='Cafe Logo'
          className='absolute top-5 left-5 w-10 h-10 object-contain opacity-90'
        />

        {/* Cart items count */}
        <div className='absolute top-5 right-5 w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full font-medium text-sm z-10 animate-bounce'>
          {num}
        </div>

        {/* Image section */}
        <div
          className='relative w-full h-64 rounded-2xl bg-white overflow-hidden group cursor-pointer'
          onClick={handelPopcart}
        >
          <img
            src={CAFE_PRODUCTS_IMAGE}
            alt='Cafe Products'
            className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
          />
          <div className='absolute inset-0 bg-gradient-to-tr from-transparent via-amber-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
          <img
            src={COFFEE_CUP_ICON}
            alt='Cart'
            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 object-contain opacity-90'
          />
          <div className='absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-amber-900/30 to-transparent'></div>
        </div>

        {/* Content */}
        <div className='mt-6'>
          <h1 className='text-2xl font-bold text-amber-900 mb-1'>Your Cafe Order</h1>
          <p className='text-amber-800 text-sm mb-4'>{num} delicious items selected</p>

          <div className='relative mb-6 flex justify-between items-center'>
            <div>
              <span className='text-amber-800'>Total Amount:</span>
              <span className='ml-2 text-2xl font-bold text-amber-900'>₹{total}</span>
            </div>
            <div className='w-12 h-12 rounded-full bg-amber-200 flex items-center justify-center'>
              <img src={PAYMENT_ICON} alt='Payment' className='w-6 h-6' />
            </div>
          </div>

          {/* Checkout button */}
          <button
            className='w-full py-3 px-6 rounded-xl bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold shadow-lg shadow-amber-200 hover:shadow-amber-300 transition-all duration-300 hover:from-amber-700 hover:to-amber-800 flex items-center justify-between'
            onClick={() => {
              handelCheckout();
              saveData();
            }}
          >
            <span>Place Order</span>
            <span className='bg-white/20 px-2 py-1 rounded-md text-sm'>₹{total}</span>
          </button>
        </div>

        {/* Decorations */}
        <div className='absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-amber-300/10'></div>
        <div className='absolute -top-5 -left-5 w-20 h-20 rounded-full bg-amber-400/5'></div>
      </div>
    </>
  );
}

export default ProductCard;
