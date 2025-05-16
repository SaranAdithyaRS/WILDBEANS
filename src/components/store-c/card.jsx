import React from "react";
import { Link } from "react-router-dom";

// Import your own static images
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

const coffeeImages = [
  coffee1, coffee2, coffee3, coffee4, coffee5,
  coffee6, coffee7, coffee8, coffee9, coffee10,
  coffee11, coffee12, coffee13, coffee14, coffee15,
  coffee16, coffee17, coffee18, coffee19, coffee20,
];

const formatPrice = (price) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 70);
};

function Card({ data }) {
  const imageUrl =
    data.fixedImage || coffeeImages[Math.floor(Math.random() * coffeeImages.length)];

  return (
    <div className="w-64 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-amber-100 flex-none">
      <Link to={`/user/product/${data._id}`} className="block h-full">
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageUrl}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            alt={data.name || "Premium Coffee"}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-serif font-semibold text-amber-900 line-clamp-1">
              {data.name || "Specialty Blend"}
            </h3>
            <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
              {formatPrice(data.price || 199)}
            </span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-amber-700 font-medium">
              {data.region || "Single Origin"}
            </span>
            <span className="text-xs text-amber-500 bg-amber-50 px-2 py-1 rounded">
              {data.roast_level || "Medium Roast"}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
