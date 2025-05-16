import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { usePopup } from "../config/popup";

// Components
import Navbar from "../components/store-c/Navbar";
import Footer from "../components/main/Footer";
import Size from "../components/product-c/size";
import Service from "../components/product-c/service";
import Quantity from "../components/product-c/quantity";
import Description from "../components/product-c/description";
import Cart from "../components/store-c/cart";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Routes from "../components/main/routes";
import { FiShoppingCart } from "react-icons/fi";

// Import coffee fallback images
import coffee1 from "../assets/coffee1.avif";
import coffee2 from "../assets/coffee2.avif";
import coffee3 from "../assets/coffee3.avif";
import coffee4 from "../assets/coffee4.avif";
import coffee5 from "../assets/coffee5.avif";
import coffee6 from "../assets/coffee6.avif";
import coffee7 from "../assets/coffee7.avif";
import coffee8 from "../assets/coffee8.avif";
import coffee9 from "../assets/coffee9.avif";
import coffee10 from "../assets/coffee10.avif";
import coffee11 from "../assets/coffee11.avif";
import coffee12 from "../assets/coffee12.avif";
import coffee13 from "../assets/coffee13.avif";
import coffee14 from "../assets/coffee14.avif";
import coffee15 from "../assets/coffee15.avif";
import coffee16 from "../assets/coffee16.avif";
import coffee17 from "../assets/coffee17.avif";
import coffee18 from "../assets/coffee18.avif";
import coffee19 from "../assets/coffee19.avif";
import coffee20 from "../assets/coffee20.avif";

// Fallback coffee images array
const coffeeImages = [
  coffee1, coffee2, coffee3, coffee4, coffee5,
  coffee6, coffee7, coffee8, coffee9, coffee10,
  coffee11, coffee12, coffee13, coffee14, coffee15,
  coffee16, coffee17, coffee18, coffee19, coffee20
];

function Product() {
  const link = [["Home", "/"], ["Store", "/store"]];
  const { userId } = useParams();
  const [item, setItem] = useState({});
  const [cart, setCart] = useState([]);
  const [itemInfo, setItemInfo] = useState({
    size: "S",
    service: "Sent with Courier",
    quantity: 1,
  });

  const discount = Math.round((item.price * 0.50) * 100) / 100;

  const {
    popup, handelPopcart,
    signup, handelsignup,
    login, handellogin,
    setNum
  } = usePopup();

  // Pick a random fallback image if item.image_url is missing
  const randomCoffeeImage = coffeeImages[Math.floor(Math.random() * coffeeImages.length)];

  async function handelCart() {
    const itemObj = {
      name: item.name,
      price: (item.price - discount),
      size: itemInfo.size,
      service: itemInfo.service,
      quantity: itemInfo.quantity,
      image_url: randomCoffeeImage,
      id: item.id,
      uuid: uuidv4(),
    };
    setCart([...cart, itemObj]);
    toast.success("Added to your coffee selection");
    setNum(JSON.parse(localStorage.getItem("cart"))?.length + 1);
  }

  function handleItemInfo(e) {
    if (typeof e === "number") {
      if (e < 1) return;
      setItemInfo({ ...itemInfo, quantity: e });
    } else {
      setItemInfo({ ...itemInfo, [e.target.name]: e.target.value });
    }
  }

  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) setCart(JSON.parse(cartData));

    async function getData(key) {
      const response = await fetch(`${import.meta.env.VITE_SERVER_URL}coffee/${key}`);
      const data = await response.json();
      setItem(data);
    }

    getData(userId);
  }, [userId]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="bg-amber-50 min-h-screen">
      {popup && <Cart quit={handelPopcart} prevCart={setCart} />}
      {signup && <Signup quit={handelsignup} />}
      {login && <Login quit={handellogin} />}
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Routes Rout={link} btn="Product" />

        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="sticky top-32 bg-white p-6 rounded-xl shadow-md border border-amber-100">
              <img
                src={randomCoffeeImage}
                alt={item.name || "Coffee Product"}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <div className="bg-white p-8 rounded-xl shadow-md border border-amber-100">
              <h1 className="text-4xl font-serif font-bold text-amber-900 mb-4">
                {item.name}
              </h1>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-medium text-amber-800">
                  ₹{(item.price - discount)?.toFixed(2)}
                </span>
                <span className="ml-4 text-xl text-gray-500 line-through">
                  ₹{item.price?.toFixed(2)}
                </span>
                <span className="ml-4 bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                  25% OFF
                </span>
              </div>

              <div className="space-y-8 mb-8">
                <Size handelSize={handleItemInfo} size={itemInfo.size} />
                <Service handelService={handleItemInfo} service={itemInfo.service} />
                <Quantity handleQuantity={handleItemInfo} quantity={itemInfo.quantity} />
              </div>

              <button
                className="flex items-center justify-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium py-3 px-6 rounded-full w-full transition-colors duration-300"
                onClick={handelCart}
              >
                <FiShoppingCart className="text-xl" />
                Add to Cart
              </button>
            </div>

            <div className="mt-8">
              <Description
                description={item.description}
                roast={item.roast_level}
                profile={item.flavor_profile}
                grind={item.grind_option}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Product;
