"use client"
import React from "react";
import Header2 from "../components/header2";
import { PiGreaterThanBold } from "react-icons/pi";
import { BsFillGridFill } from "react-icons/bs";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`https://e-commerce-website-taupe-phi.vercel.app/api/products`);
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header2 />
      <section className="relative max-w-screen-2xl mx-auto">
        {/* Background Image */}
        <Image
          src="/shopimg1.png" // Replace with your image path
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />

        {/* Slightly Left-Aligned Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* Icon */}
          <div>
            <Image
              src="/logo.png" // Replace with your icon image path
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Section Title */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">
            Product
          </h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">Product</span>
          </p>
        </div>
      </section>
      {/* Product Page */}
      <div className="flex flex-wrap justify-between items-center max-w-screen-2xl mx-auto bg-[#FAF4F4] px-4 py-4">
        {/* Left Section */}
        <div className="flex flex-wrap items-center gap-4 xl:ml-10">
          <Link href="/product/${product.id}">
          <Image
            src="/log1.png"
            alt="Filter Icon"
            className="w-8 sm:w-10"
            width={40}
            height={40}
          />
          </Link>
          <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
            Filter
          </p>
          <BsFillGridFill className="text-gray-600 text-xl sm:text-2xl" />
          <Image
            src="/log2.png"
            alt="Icon 2"
            className="w-5 sm:w-6"
            width={24}
            height={24}
          />
          <Image
            src="/log3.png"
            alt="Icon 3"
            className="w-1 sm:w-1 h-6 sm:h-8"
            width={24}
            height={24}
          />
          <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
            Showing 1-16 of 32 results
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center gap-6 mt-4 lg:mt-0 mr-4 sm:mr-10">
          <div className="flex items-center gap-4">
            <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
              Show
            </p>
            <button className="px-3 sm:px-4 py-1 sm:py-2 bg-white text-[#9F9F9F] text-xs sm:text-sm md:text-lg lg:text-lg rounded-md">
              16
            </button>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-black text-xs sm:text-sm md:text-lg lg:text-lg">
              Sort by
            </p>
            <button className="px-4 sm:px-6 py-1 sm:py-2 bg-white text-[#9F9F9F] text-xs sm:text-sm md:text-lg lg:text-lg rounded-md">
              Default
            </button>
          </div>
        </div>
      </div>
       

{/* Product Data 1 */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl bg-white p-8">
  {products.map((product:Product ) => (
    <Link href="/product/{id}" key={product.id}>
    <div
      className="mx-auto transform hover:scale-[1.05] duration-500 hover:cursor-pointer"
    >
      
          <Image
            src={product.image}
            alt={product.name}
            width={287}
            height={287}
            className="mx-auto"
          />
          <h3 className="text-lg text-black mt-4">{product.name}</h3>
          <p className="text-black text-xl font-semibold mt-2">{product.price}</p>
        
      
    </div>
    </Link>
  ))}

        

        
        {/* Pagination Section */}
        <div className="flex justify-center md:items-center flex-wrap space-x-4 mt-20 mb-20 w-full m md:ml-80 lg:ml-[450px]  xl:ml-[600px]">
          <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FBEBB5] text-gray-800 font-medium">
            1
          </button>
          <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
            2
          </button>
          <button className=" md:mt-4  lg:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
            3
          </button>
          <button className=" md:mt-4 xl:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
            Next
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#FAF4F4] py-10  mx-auto max-w-screen-2xl w-[1550] h-[500] lg:h-[400] xl:h-[300] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 mt-14  ml-0 md:ml-48  lg:ml-4 xl:ml-40">
          {/* Feature 1 */}
          <div className="text-left  xl:ml-8">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0">
              Free Delivery
            </h3>
            <p className=" text-[#9F9F9F] text-sm lg:text-lg">
              For all oders over $50, consectetur adipim scing elit.{" "}
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-left lg:ml-[-120px] xl:ml-4 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0 ">
              90 Days Return
            </h3>
            <p className=" text-[#9F9F9F] text-sm lg:text-lg ">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-left  lg:mt-4 xl:mt-0 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold  sm:ml-28 lg:ml-0">
              Secure Payment
            </h3>

            <p className=" text-[#9F9F9F] text-sm lg:text-lg flex xl:flex-col ">
              100% secure payment, consectetur
              <p className="ml-2 xl:ml-0">adipiscing elit.</p>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
