import React, { useEffect, useState } from 'react';
import Card from './card';
import { usePopup } from '../../config/popup';
import { searchBar } from '../../util/filter';

// Import custom fixed coffee images
import coffee1 from '../../assets/coffee1.avif';
import coffee2 from '../../assets/coffee2.avif';
import coffee3 from '../../assets/coffee3.avif';
import coffee4 from '../../assets/coffee4.avif';
import coffee5 from '../../assets/coffee5.avif';
import coffee6 from '../../assets/coffee6.avif';
import coffee7 from '../../assets/coffee7.avif';
import coffee8 from '../../assets/coffee8.avif';
import coffee9 from '../../assets/coffee9.avif';
import coffee10 from '../../assets/coffee10.avif';

const fixedCoffeeImages = [
  coffee1, coffee2, coffee3, coffee4, coffee5,
  coffee6, coffee7, coffee8, coffee9, coffee10
];

function CardBox({ items, style = "", filteredData = null }) {
  const [products, setProducts] = useState([]);
  const { search } = usePopup();
  const [allitems, setAllitems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async (items) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${import.meta.env.VITE_SERVER_URL}coffee?limit=${items}`);
        const data = await response.json();
        setAllitems(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching coffee data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    filteredData ? setProducts(filteredData) : getData(items);
  }, [filteredData, items]);

  useEffect(() => {
    if (search) {
      const filteredProducts = searchBar(products, allitems, search);
      filteredProducts && setProducts(filteredProducts);
    }
  }, [search]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-pulse flex space-x-4">
          <div className="rounded-full bg-amber-200 h-12 w-12"></div>
        </div>
      </div>
    );
  }

  if (!products?.length) {
    return (
      <div className="text-center py-16">
        <h3 className="text-xl font-serif text-amber-800 mb-2">No Coffee Found</h3>
        <p className="text-amber-600">Try adjusting your search or filters</p>
      </div>
    );
  }

  return (
    <div className={`${style} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6`}>
      {products.map((product, index) => (
        <div key={product._id} className="mb-8">
          <Card data={{ ...product, fixedImage: fixedCoffeeImages[index % fixedCoffeeImages.length] }} />
        </div>
      ))}
    </div>
  );
}

export default CardBox;
