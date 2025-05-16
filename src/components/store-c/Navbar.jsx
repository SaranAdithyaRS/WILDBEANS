import React, { useState } from "react";
import { FiMapPin, FiUser, FiMenu, FiSearch } from "react-icons/fi";
import { GiCoffeeCup } from "react-icons/gi";
import Logout from "../main/logout";
import CartIcon from "./CartIcon";
import { usePopup } from "../../config/popup";
import { useUser } from "../../config/user";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const { handellogin, handelsignup, handelPopcart, num, handleSearch } = usePopup();
  const { isLoggedIn } = useUser();

  return (
    <div className={`fixed top-0 w-full z-50 bg-amber-900 shadow-lg transition-all duration-300 ${menuOpen ? 'h-64' : 'h-20'}`}>
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {/* Brand Logo & Mobile Menu */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <GiCoffeeCup className="text-amber-100 text-3xl mr-2" />
            <h1 className="text-2xl font-serif font-bold text-amber-50">
              Wild Beans
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <button
              onClick={() => setUserMenuOpen(!userMenuOpen)}
              className="text-amber-100 hover:text-white transition-colors"
            >
              <FiUser className="text-2xl" />
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-amber-100 hover:text-white transition-colors"
            >
              <FiMenu className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex mx-8 flex-1 max-w-2xl">
          <div className="relative w-full">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-200" />
            <input
              type="search"
              placeholder="Search our blends..."
              className="w-full bg-amber-800 text-amber-50 border border-amber-700 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-300"
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <button 
            onClick={handelPopcart}
            className="relative text-amber-100 hover:text-white transition-colors"
          >
            <CartIcon num={num} />
          </button>
          
          <span className="h-6 w-px bg-amber-700"></span>
          
          <button
            onClick={() => setUserMenuOpen(!userMenuOpen)}
            className="text-amber-100 hover:text-white transition-colors flex items-center"
          >
            <FiUser className="text-xl mr-2" />
            <span className="font-medium">Account</span>
          </button>
        </div>

        {/* Mobile Menu Content */}
        <div className={`md:hidden w-full absolute top-20 left-0 bg-amber-800 px-6 py-4 transition-all duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible h-0'}`}>
          <div className="mb-4">
            <div className="relative w-full">
              <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-amber-200" />
              <input
                type="search"
                placeholder="Search blends..."
                className="w-full bg-amber-700 text-amber-50 border border-amber-600 rounded-full py-2 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-amber-300"
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="flex justify-between items-center pt-2 border-t border-amber-700">
            <button 
              onClick={handelPopcart}
              className="text-amber-100 hover:text-white transition-colors flex items-center"
            >
              <CartIcon num={num} />
              <span className="ml-2">Cart</span>
            </button>
          </div>
        </div>

        {/* User Menu Dropdown */}
        {userMenuOpen && (
          <div className="absolute right-6 top-20 w-48 bg-white rounded-lg shadow-xl z-50 overflow-hidden">
            {!isLoggedIn ? (
              <>
                <button
                  onClick={() => {
                    handellogin();
                    setUserMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    handelsignup();
                    setUserMenuOpen(false);
                  }}
                  className="w-full px-4 py-3 text-left text-amber-900 hover:bg-amber-50 transition-colors"
                >
                  Sign Up
                </button>
              </>
            ) : (
              <Logout 
                bg="hover:bg-amber-50" 
                text="text-amber-900" 
                quit={() => setUserMenuOpen(false)}
                className="px-4 py-3"
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;