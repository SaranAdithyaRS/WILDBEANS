import React from 'react';
import Navbar from '../components/store-c/Navbar';
import Cart from '../components/store-c/cart';
import Footer from '../components/main/Footer';
import Routes from '../components/main/routes';
import UserInfo from '../components/checkout/userinfo';
import axios from 'axios';
import { usePopup } from '../config/popup';
import { GiCoffeeCup } from 'react-icons/gi';

function Checkout() {
  const link = [["Home", "/"], ["Store", "/store"]];
  const { popup, handelPopcart } = usePopup();
  const userdata = JSON.parse(localStorage.getItem('user')).providerData[0];
  const cartProducts = JSON.parse(localStorage.getItem('cart'));

  // Calculate total
  let total = 0;
  if (cartProducts != null) {
    total = cartProducts.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);
  }

  async function handelCheckout() {
    let order = await axios.post(import.meta.env.VITE_SERVER_URL+'payment/checkout', { 
      amount: (total * 100) 
    });
    order = order.data;
    
    let key_id = await axios.get(import.meta.env.VITE_SERVER_URL+'payment/key');
    key_id = key_id.data.key_id;
    
    const options = {
      key: key_id,
      amount: order.amount,
      currency: "INR",
      name: "Wild Beans Coffee",
      description: "Premium Coffee Order",
      image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
      order_id: order.id,
      callback_url: import.meta.env.VITE_SERVER_URL+"payment/verification",
      prefill: {
        name: userdata.displayName,
        email: userdata.email,
        contact: userdata.phoneNumber,
      },
      notes: {
        address: "Wild Beans Coffee Order"
      },
      theme: {
        color: "#92400e"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
  }

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
  <Navbar />
  {popup && <Cart quit={handelPopcart} />}
  
  <main className="flex-grow">
    <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
      <GiCoffeeCup className="text-amber-400 text-6xl absolute top-1/4 left-1/4" />
      <GiCoffeeCup className="text-amber-400 text-6xl absolute top-1/3 right-1/3" />
      <GiCoffeeCup className="text-amber-400 text-6xl absolute bottom-1/4 left-1/3" />
    </div>

    <div className="w-full px-4 py-3 max-w-7xl mx-auto"> {/* Added max-w-7xl for slightly narrower width */}
      <Routes Rout={link} btn="Checkout" />
      
      {/* Slightly narrower card */}
      <div className="w-full bg-white rounded-lg shadow-sm overflow-hidden my-3 border border-amber-100">
        <div className="p-4">
          <h1 className="text-lg font-serif font-semibold text-amber-900 mb-3 flex items-center">
            <GiCoffeeCup className="mr-2 text-xl" />
            Complete Your Order
          </h1>
          
          <UserInfo handler={handelCheckout} total={total} />
        </div>
      </div>
    </div>
  </main>

  <Footer />
</div>
  );
}

export default Checkout;