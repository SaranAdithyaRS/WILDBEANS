import React from "react";
import "../main/login.css";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import coffee1 from "../../assets/coffee1.avif";
import coffee2 from "../../assets/coffee2.avif";
import coffee3 from "../../assets/coffee3.avif";
import coffee4 from "../../assets/coffee4.avif";
import coffee5 from "../../assets/coffee5.avif";
import coffee6 from "../../assets/coffee6.avif";
import coffee7 from "../../assets/coffee7.avif";
import coffee8 from "../../assets/coffee8.avif";
import coffee9 from "../../assets/coffee9.avif";
import coffee10 from "../../assets/coffee10.avif";
import coffee11 from "../../assets/coffee11.avif";
import coffee12 from "../../assets/coffee12.avif";
import coffee13 from "../../assets/coffee13.avif";
import coffee14 from "../../assets/coffee14.avif";
import coffee15 from "../../assets/coffee15.avif";
import coffee16 from "../../assets/coffee16.avif";
import coffee17 from "../../assets/coffee17.avif";
import coffee18 from "../../assets/coffee18.avif";
import coffee19 from "../../assets/coffee19.avif";
import coffee20 from "../../assets/coffee20.avif";

const fallbackImages = [
  coffee1, coffee2, coffee3, coffee4, coffee5,
  coffee6, coffee7, coffee8, coffee9, coffee10,
  coffee11, coffee12, coffee13, coffee14, coffee15,
  coffee16, coffee17, coffee18, coffee19, coffee20,
];


function Cart({ quit, prevCart }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const setCart = async () => {
      const cart = localStorage.getItem("cart");
      const cartObj = JSON.parse(cart) || [];
      setCartItems(cartObj);
    };
    setCart();
  }, []);

  function deleteItem(id) {
    const newCart = cartItems.filter((item) => item.uuid !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    setCartItems(newCart);
    prevCart(newCart);
  }

  // Format price to USD for specialty coffee
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price / 70); // Converting from INR to approx USD
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start pt-24 mt-10">
      {/* Cart Container */}
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[80vh] flex flex-col mx-4">
        {/* Cart Header */}
        <div className="flex justify-between items-center p-6 border-b border-amber-100">
          <h2 className="text-3xl font-serif font-bold text-amber-900">Your Coffee Selection</h2>
          <button 
            onClick={quit} 
            className="text-2xl text-amber-700 hover:text-amber-900 transition-colors"
          >
            <IoClose />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems && cartItems.length ? (
            cartItems.map((item) => (
              <div key={item.uuid} className="flex items-center p-4 border-b border-amber-50 hover:bg-amber-50 transition-colors">
                <img 
                  src={item.image_url || "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"} 
                  alt={item.name} 
                  className="w-20 h-20 object-cover rounded-lg"
                />
                
                <div className="ml-4 flex-1">
                  <h3 className="text-xl font-medium text-amber-900">{item.name}</h3>
                  <div className="flex flex-wrap gap-x-4 mt-1">
                    <span className="text-sm text-amber-700">Size: {item.size}</span>
                    <span className="text-sm text-amber-700">Service: {item.service}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-end ml-4">
                  <button 
                    onClick={() => deleteItem(item.uuid)}
                    className="text-amber-600 hover:text-amber-800 mb-2 transition-colors"
                  >
                    <MdDelete size={20} />
                  </button>
                  <span className="text-sm text-amber-600">Qty: {item.quantity}</span>
                  <span className="font-medium text-amber-900">
                    {formatPrice(item.price * item.quantity)}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center h-full py-12">
              <img 
                src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                alt="Empty cart" 
                className="w-32 h-32 object-cover rounded-full mb-4 opacity-75"
              />
              <h3 className="text-xl font-serif text-amber-800 mb-2">Your Cart is Empty</h3>
              <p className="text-amber-600">Start your coffee journey</p>
            </div>
          )}
        </div>

        {/* Checkout Footer */}
        {cartItems?.length > 0 && (
          <div className="border-t border-amber-100 p-4 bg-amber-50 rounded-b-lg">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-amber-700">Total ({cartItems.length} items)</span>
                <h3 className="text-2xl font-serif font-bold text-amber-900">
                  {formatPrice(calculateTotal())}
                </h3>
              </div>
              <Link 
                to="/user/product/checkout" 
                onClick={quit}
                className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;