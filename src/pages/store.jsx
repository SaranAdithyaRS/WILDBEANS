import React, { useState, useEffect } from "react";
import Navbar from "../components/store-c/Navbar";
import CardBox from "../components/store-c/CardBox";
import Signup from "../components/main/signup";
import Login from "../components/main/login";
import Cart from "../components/store-c/cart";
import { usePopup } from "../config/popup";
import Routes from "../components/main/routes";
import Filter from "../components/store-c/filter";
import { filData } from "../util/filter";
import Footer from "../components/main/Footer";
import { FiFilter, FiX } from "react-icons/fi";
import { GiCoffeeBeans } from "react-icons/gi";

function Store() {
  const [filters, setFilters] = useState({ 
    grind_option: "", 
    region: "", 
    price: 1300 
  });
  const [sorted, setSorted] = useState(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const { popup, handelPopcart, signup, handelsignup, login, handellogin } = usePopup();

  useEffect(() => {
    async function applyFilters() {
      if (filters.grind_option || filters.region || filters.price !== 1300) {
        const newData = await filData(filters);
        setSorted(newData);
      } else {
        setSorted(null);
      }
    }
    applyFilters();
  }, [filters]);

  const handleChange = (e) => {
    if (e === "reset") {
      setFilters({ grind_option: "", region: "", price: 1300 });
      return;
    }
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // 👇 Dynamic grid style based on filterOpen
  const cardGridStyle = filterOpen
    ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  return (
    <div className="min-h-screen bg-white">
      {/* Modals */}
      {login && <Login quit={handellogin} />}
      {signup && <Signup quit={handelsignup} />}
      {popup && <Cart quit={handelPopcart} />}

      <Navbar />
      
      <div className="container mx-auto px-4 pt-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <Routes Rout={[["Home", "/"]]} btn="Store" />
          
          <button 
            onClick={() => setFilterOpen(!filterOpen)}
            className="flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white px-4 py-2 rounded-lg transition-colors"
          >
            {filterOpen ? (
              <>
                <FiX className="text-lg" />
                <span className="hidden md:inline">Close</span>
              </>
            ) : (
              <>
                <FiFilter className="text-lg" />
                <span className="hidden md:inline">Filters</span>
              </>
            )}
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Conditional Filter Sidebar */}
          {filterOpen && (
            <div className="md:w-80 bg-amber-50 p-4 rounded-lg shadow-sm border border-amber-100">
              <div className="flex items-center gap-3 mb-4">
                <GiCoffeeBeans className="text-amber-600 text-xl" />
                <h2 className="text-lg font-serif font-bold text-amber-900">Filters</h2>
              </div>
              <Filter filters={filters} handleChange={handleChange} />
            </div>
          )}

          {/* Product Grid */}
          <div className={`${filterOpen ? 'md:pl-4' : ''} flex-1`}>
            <CardBox 
              items={20} 
              style={cardGridStyle} 
              filteredData={sorted} 
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Store;
