import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import axios from 'axios';
import { ValidateCheckout } from '../../util/validation'
import { toast } from "react-toastify";

function UserInfo({handler, total}) {
    useEffect(() => {
        document.title = 'Checkout | Café Delight'
    }, [])

    // Cafe-themed images
    const CAFE_BACKGROUND = "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    const COFFEE_BEAN_DECORATION = "https://cdn-icons-png.flaticon.com/512/2515/2515183.png";
    
    let {phoneNumber, address} = JSON.parse(localStorage.getItem('user')).providerData[0];
    let [user, setUser] = useState({phoneNumber, address});

    function handlechange(e) {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    function saveData(){
        let {error} = ValidateCheckout.validate(user);
        if(error){
            toast.error(error.details[0].message, {position:'top-center'});
            return;
        }
        else{
            let current = JSON.parse(localStorage.getItem('user'));
            current.providerData[0].address = user.address;
            current.providerData[0].phoneNumber = user.phoneNumber;
            localStorage.setItem('user', JSON.stringify(current));
            let res = axios.post(import.meta.env.VITE_SERVER_URL+'auth/update', current.providerData[0]);
        }
    }

    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            {/* Decorative elements */}
            
            <img 
                src={COFFEE_BEAN_DECORATION} 
                alt="Coffee beans" 
                className="absolute top-20 left-10 w-24 opacity-10 rotate-12"
            />
            <img 
                src={COFFEE_BEAN_DECORATION} 
                alt="Coffee beans" 
                className="absolute bottom-1/4 right-10 w-24 opacity-10 -rotate-12"
            />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-amber-900 font-serif mb-3">Complete Your Order</h1>
                    <p className="text-lg text-amber-800 max-w-2xl mx-auto">
                        Please verify your details to enjoy your café experience
                    </p>
                </div>

                <div className="flex gap-12 max-lg:flex-col-reverse max-lg:items-center">
                    {/* Billing Form */}
                    <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-amber-200">
                        <div className="flex items-center mb-8">
                            <div className="bg-amber-100 p-3 rounded-full mr-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <h2 className="text-2xl font-semibold text-amber-900">Contact Information</h2>
                        </div>

                        <form className="space-y-6">
                            <div className="space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="phone" className="text-sm font-medium text-amber-800 mb-1">
                                        Phone Number
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <span className="text-amber-500">+91</span>
                                        </div>
                                        <input
                                            type="text"
                                            id="phone"
                                            name="phoneNumber"
                                            value={user.phoneNumber}
                                            onChange={handlechange}
                                            className="block w-full pl-12 py-3 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                            placeholder="9876543210"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="address" className="text-sm font-medium text-amber-800 mb-1">
                                        Delivery Address
                                    </label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        rows="3"
                                        value={user.address}
                                        onChange={handlechange}
                                        className="block w-full py-3 px-4 border border-amber-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                        placeholder="Where should we deliver your order?"
                                    ></textarea>
                                </div>
                            </div>
                        </form>

                        <div className="mt-8 pt-6 border-t border-amber-200">
                            <div className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                <span className="text-sm text-amber-700">
                                    We'll use this address for your order delivery
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="w-full lg:w-2/5 flex justify-center">
                        <div className="w-full max-w-md">
                            <ProductCard handelCheckout={handler} total={total} saveData={saveData} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo