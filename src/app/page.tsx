"use client"
import React, { useEffect, useState } from 'react';
import Navbar from './Components/NavBar/navBar';
import axios from 'axios';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Card from './Components/NavBar/Card';
import Loader from './Components/loading';
import { searchContext, useAppContext } from './Components/Contextshare';
import Footer from './Components/NavBar/footer';

interface Product {
  id: string;
  images: string[];
  title: string;
  price: number;
  description: string;
  category: string;
}

export default function Home() {
  const [productData, setProductData] = useState<Product[]>([]);
  const [spin, setSpin] = useState(true);
  const [searchkey, setSearchKey] = useState('');

  const getData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      console.log(response.data.products);
      setProductData(response.data.products);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setSpin(false);
    }, 2000);
  }, [searchkey]);

  return (
    <main className='h-full'>
      <Navbar />
      {spin ? (
        <Loader />
      ) : (
        <div className='flex flex-wrap justify-evenly'>
          <form action='' className='w-25 p-5'>
            <input
              onChange={(e) => setSearchKey(e.target.value.trim().toLocaleLowerCase())}
              className='p-2 mt-3 border'
              placeholder='Search by category'
              type='text'
            />
            <span>
              <button
                type='submit'
                className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ms-2'
              >
                Search
              </button>
            </span>
          </form>
          <div className='flex flex-wrap justify-evenly'>
            {productData.length > 0 ? (
              productData.filter((product) => product.category.includes(searchkey)).length > 0 ? (
                // If there are filtered products, map over them and render Card components
                productData
                  .filter((product) => product.category.includes(searchkey))
                  .map((product) => (
                    <Card
                      key={product.id} // added key prop
                      id={product.id}
                      image={product.images[0]}
                      title={product.title}
                      price={product.price}
                      description={product.description}
                    />
                  ))
              ) : (
                // If there are no filtered products, display a message
                <h3>No results found</h3>
              )
            ) : (
              <h3>No data Found Sorry....</h3>
            )}
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
