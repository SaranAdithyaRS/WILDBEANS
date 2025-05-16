import React from "react";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Button from "./Button";
import Logo from "../../assets/Logo1.webp"; // Replace with a high-quality logo of Wild Beans
import Logout from "../main/logout";
import { CiUser } from "react-icons/ci";
import { useState, useEffect } from "react";
import { usePopup } from "../../config/popup";
import { useUser } from "../../config/user";
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// New hero background image - would be placed in assets
import HeroBackground from "../../assets/logo.png";

function Heading() {
  return (
    <div 
      className="flex flex-col md:gap-8 ss:gap-6 max-ss:gap-4"
      style={{
        textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      <h1 className="cd:text-6xl sm:text-5xl text-4xl font-bold text-white font-serif tracking-wide">LIFE IS RICHER</h1>
      <h2 className="cd:text-4xl sm:text-3xl text-2xl font-medium text-amber-100 font-serif italic">WITH WILD BEANS</h2>
      <Button 
        text="Order Now" 
        link="store" 
        className="mt-4 bg-amber-800 hover:bg-amber-700 border-amber-900"
      />
    </div>
  );
}

function Tab({ btns }) {
  return (
    <>
      {btns.map((data, index) => {
        return (
          <Link key={uuidv4()} to={data[1]}>
            <span 
              className="mx-4 text-black-100 hover:text-gray-400 transition-colors duration-300 font-medium tracking-wide" 
              key={index}
            >
              {data[0]}
            </span>
          </Link>
        );
      })}
    </>
  );
}

function Tabsearch() {
  // Check if user is logged in
  let {isLoggedIn}=useUser();
  let [popup,setPopup]=useState(false);
  let {handelPopcart,handellogin,handelsignup,num}=usePopup();
  return (
    <>
    <div className="bg-white border mt-5 h-12 rounded-3xl gap-2 flex items-center justify-center text-xl px-5">
      <a onClick={handelPopcart} className="flex items-center">
        <IoBagOutline />
        {num > 0 ? (<span className="relative text-base rounded-full w-6 right-3 text-center bg-white text-black bottom-2 border">{num}
            </span>):null}
      </a>
      <button
        onClick={() => {
          setPopup(!popup);
        }}
      >
        <CiUser />
      </button>
    </div>
    <div>

        {popup ?!isLoggedIn? (
            <div className="absolute top-20 right-[37%] w-36 h-32 bg-white rounded-3xl flex flex-col gap-2  max-cd:right-[26%] max-xs:right-[5%]">
              <button onClick={() => {handellogin();setPopup((n) => !n);}} className="mt-4 text-xl font-semibold text-gray-600">Login</button>
              <button onClick={() => {handelsignup();setPopup((n) => !n);}}className="mt-4 text-xl font-semibold text-gray-600">Signup</button>
            </div>
          ):<Logout bg="bg-white" text="text-gray-600" home={true} quit={setPopup}/>: null}
    </div>
    </>
  );
}

function Info() {
  return (
    <div className="w-full rounded-3xl overflow-hidden md:px-16 xs:px-6 py-8 flex max-sm:flex-col gap-8 items-center bg-gradient-to-r from-amber-900 to-amber-700">
      <div className="flex sm:w-[25%] justify-center">
        <img 
          src={Logo} 
          alt="Wild Beans Logo" 
          className="h-24 object-contain filter drop-shadow-lg"
        />
      </div>
      <div className="flex items-center text-amber-50 w-[75%] max-sm:w-full max-sm:text-center max-sm:text-sm font-light leading-relaxed">
        At Wild Beans Coffee, we celebrate the untamed spirit of exceptional coffee. 
        Our master roasters carefully select only the most vibrant beans from ethical 
        sources worldwide, crafting blends that awaken your senses. Each cup tells 
        a story of adventure and passion, from the first aromatic whisper to the 
        last satisfying sip. Experience coffee in its wildest, most delicious form.
      </div>
    </div>
  );
}

export { Tab, Tabsearch, Heading, Info };
