import React, { useState } from "react";
import { Info, Tab, Tabsearch } from "../components/landing-c/Head";
import { Heading } from "../components/landing-c/Head";
import CoffeeBg from "../assets/bg.jpg"; // Replaced with high-quality coffee image

import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import Booking from "../components/landing-c/booking";
import Footer from "../components/main/Footer";
import { Link } from "react-router-dom";
import { usePopup } from "../config/popup";
import Newsletter from '../components/landing-c/newsletter';
import { FiMenu } from "react-icons/fi";
import { GiCoffeeCup } from "react-icons/gi";

function Landing() {
  const btns = [
    ["Home", "#home"],
    ["Store", "store"],
  ];

  const [navbarOpen, setNavbarOpen] = useState(false);
  const { popup, handelPopcart, login, handellogin, signup, handelsignup } = usePopup();

  return (
    <div className="relative">
      {/* Login/Signup Modals */}
      {login && <Login quit={handellogin} />}
      {signup && <Signup quit={handelsignup} />}
      {popup && <Cart quit={handelPopcart} />}

      {/* Hero Section */}
      <div className="relative h-screen max-h-[900px] min-h-[600px]">
        <img
          src={CoffeeBg}
          alt="Freshly brewed coffee"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        
        <div className="container mx-auto px-6 relative h-full flex flex-col">
          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <div className="flex items-center">
              <GiCoffeeCup className="text-amber-400 text-3xl mr-2" />
              <h1 className="text-2xl font-serif font-bold text-white">Wild Beans</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Tab btns={btns} />
              <Tabsearch />
            </div>
            
            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <FiMenu />
            </button>
          </div>

          {/* Mobile Navigation */}
          {navbarOpen && (
            <div className="md:hidden absolute top-20 left-0 right-0 bg-white/90 backdrop-blur-sm py-4 px-6 rounded-lg mx-6 shadow-lg">
              <div className="flex flex-col space-y-4">
                <Tab btns={btns} />
                <Tabsearch />
              </div>
            </div>
          )}

          {/* Hero Content */}
          <div className="flex-grow flex items-center justify-center">
            <div className="text-center max-w-3xl">
              <Heading />
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <section className="py-20 bg-amber-50">
        <div className="container mx-auto px-6">
          <Info />
          <div className="mt-12">
            <CardBox items={4} style="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
          </div>
          <div className="text-center mt-10">
            <Link 
              to="/store" 
              className="inline-block px-8 py-3 bg-amber-800 text-white rounded-full hover:bg-amber-700 transition-colors font-medium"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <Booking />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-amber-100">
        <div className="container mx-auto px-6">
          <Newsletter />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Landing;