"use client"

import React, { useEffect, useState } from 'react';

import Navbar from '../Components/NavBar/navBar';
import instance from '../api/route';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';
import Footer from '../Components/NavBar/footer';

const Detailpage = ({ params }: { params: { individual: number } }) => {
  const [individualData, setIndividualData] = useState<any>(); // Adjust the type as per your data structure
  const [images,setImages]=useState([])

  const getdata = async () => {
    try {
      const response = await instance.get(`products/${params.individual}`);
      setIndividualData(response.data);
      setImages(response.data.images)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    getdata();
  }, [params.individual]);

  return (
    <div>
      <Navbar />
      <div className=''>
        <div className="w-3/4 border-2 mt-10 mx-auto grid grid-cols-2 shadow-sm ">
          <div className="h-screen-1/2">
            <Carousel className='w-3/4 mx-auto'>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <img className='h-96' src={image} alt="" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div className="flex flex-col">
            <p className="text-2xl pt-5 font-bold ps-5">{individualData ? individualData.title : "Loading..."}</p>
            <p className="text-2xl pt-5 ps-5">US.$ {individualData ? individualData.price : "Loading..."}</p>
            <p className="pt-5 text-2xl ps-5">Brand: {individualData ? individualData.brand : "Loading..."}</p>
            <p className="text-2xl pt-4 ps-5">{individualData ? individualData.description : "Loading..."}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detailpage;
