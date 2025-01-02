'use client';
import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { HiMinus, HiPlus } from "react-icons/hi";
import { PiGreaterThanBold } from "react-icons/pi";
import Header2 from "../../components/header2";
import Image from "next/image";
import { PageProps } from "../../../../.next/types/app/page";

type productDetailProps = PageProps & {
  params: { id: string };
};

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}
const SingleProductPage = ({ params }:productDetailProps ) => {
  const { id } = params; // Extract 'id' from params
  const [product, setProduct] = useState<Product | null>(null); // To store the fetched product
  const [error, setError] = useState<string | null>(null); // To handle errors
  const [quantity, setQuantity] = useState(1);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productId = encodeURIComponent(id); // Ensure proper encoding
      const response = await fetch(`https://e-commerce-website-taupe-phi.vercel.app/api/products/${productId}`);
      const data = await response.json();

        // Find the product by ID
        const productData = data.find((prod: Product) => prod.id === parseInt(id));
        if (!productData) {
          setError("Product not found");
        } else {
          setProduct(productData);
        }
      } catch {
      
      }

    };

    fetchProduct();
  }, [id]);

  // Add to cart function
  
  const addToCart = (product: Product, quantity: number) => {
    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");

    const existingProductIndex = existingCart.findIndex(
      (item:Product) => item.id === product.id
    );

    if (existingProductIndex >= 0) {
      existingCart[existingProductIndex].quantity += quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(existingCart));
  };

  const handleAddToCart = () => {
    addToCart(product as Product, quantity);
  };

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header2 />
      <div className="max-w-screen-2xl mx-auto w-[1550px] h-[100] bg-white flex space-x-6">
        {/* Breadcrumb Navigation */}
        <nav className="text-sm text-gray-500 flex">
          <a
            href="#"
            className="text-[##9F9F9F] flex items-center gap-8 ml-[85px] text-[16px] "
          >
            Home <PiGreaterThanBold className="text-black" />
          </a>
          <a
            href="#"
            className="text-[##9F9F9F] flex items-center gap-8 ml-[25px] text-[16px]"
          >
            Shop <PiGreaterThanBold className="text-black" />
          </a>
        </nav>
        <div className="flex items-center gap-8">
          <Image
            src="/log3.png"
            alt="Icon"
            width={481}
            height={391}
            className="w-1 h-9 text-[#9F9F9F]"
          />
          <span className="text-black text-[16px]">{product.name}</span>
        </div>
      </div>
      <div>
        {/* Product Content */}
        <div className="max-w-screen-2xl mx-auto w-full xl:w-[1540px] xl:h-[820px] bg-white flex flex-wrap lg:flex-nowrap">
          {/* Thumbnail Images */}
          <div className="gap-4 mt-10 sm:mt-12 lg:mt-20 ml-6 sm:ml-12 lg:ml-24 space-y-6 sm:space-y-8 lg:space-y-10 w-full lg:w-[500px] overflow-visible flex lg:block justify-center">
            <Image
              src="/pro1.png"
              alt="Thumbnail 1"
              width={83}
              height={55}
              className="w-20 h-20 mt-8 xl:mt-0 bg-[#FFF9E5] rounded-[10px]"
            />
            <Image
              src="/pro2.png"
              alt="Thumbnail 2"
              width={83}
              height={55}
              className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
            />
            <Image
              src="/pro3.png"
              alt="Thumbnail 3"
              width={83}
              height={55}
              className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
            />
            <Image
              src="/pro4.png"
              alt="Thumbnail 4"
              width={83}
              height={55}
              className="w-20 h-20 bg-[#FFF9E5] rounded-[10px]"
            />
          </div>

          {/* Main Product Image */}
          <div className="w-full sm:w-[60%] md:w-[50%] lg:w-[475px] lg:h-[600px] bg-[#FFF9E5] mt-10 sm:mt-12 lg:mt-20 rounded-[10px] flex justify-center items-center">
            <div className="w-[90%] sm:w-[70%] md:w-[600px] lg:w-[600px] h-auto mt-8 sm:mt-16 md:mt-24 lg:mt-24 ml-0 sm:ml-[-10px] md:ml-[-20px] lg:ml-[-40px]">
              <Image
                src={product.image}
                alt={product.name}
                width={540}
                height={400}
                className="w-[90%] md:w-[540px] h-auto bg-transparent"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="w-full lg:w-auto mt-10 sm:mt-20 px-4 lg:mr-[400px] ml-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-black w-[300px]">
              {product.name}
            </h1>
            <p className="text-lg sm:text-xl text-[#9F9F9F] mt-6">
              {product.price}
            </p>

            {/* Rating and Review */}
            <div className="flex items-center mt-2">
              <div className="flex text-[#FFDA5B] space-x-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text-sm sm:text-base text-gray-500 ml-2 flex items-center">
                <Image
                  src="/log3.png"
                  alt="Icon"
                  width={20}
                  height={20}
                  className="w-0.5 h-8 text-[#9F9F9F] items-center mr-2"
                />
                (5 Customer Reviews)
              </p>
            </div>

            {/* Product Description */}
            <p className="text-black mt-4 text-sm sm:text-base md:text-lg">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>

            {/* Size Options */}
            <div className="mt-6">
              <h3 className="text-[#9F9F9F] font-medium mb-2">Size</h3>
              <div className="flex space-x-3 mt-4">
                <button className="px-4 py-2 bg-[#FBEBB5] rounded-xl text-sm sm:text-md font-semibold">
                  L
                </button>
                <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
                  XL
                </button>
                <button className="px-4 py-2 bg-[#FAF4F4] rounded-xl text-sm sm:text-md font-semibold">
                  XS
                </button>
              </div>
            </div>

            {/* Color Options */}
            <div className="mt-8">
              <h3 className="text-[#816DFA] font-medium mb-2">Color</h3>
              <div className="flex space-x-3 mt-4">
                <button
                  className="w-8 h-8 rounded-full bg-[#816DFA]"
                  aria-label="Select Blue Color"
                ></button>
                <button
                  className="w-8 h-8 rounded-full bg-[#000000]"
                  aria-label="Select Yellow Color"
                ></button>
                <button
                  className="w-8 h-8 rounded-full bg-[#CDBA7B]"
                  aria-label="Select Gray Color"
                ></button>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mt-10 flex items-center flex-wrap space-x-4">
              {/* Quantity Control */}
              <div className="flex items-center border border-gray-300">
                <button
                  className="flex items-center justify-center p-2 text-black"
                  aria-label="Decrease Quantity"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <HiMinus />
                </button>
                <span className="px-4">{quantity}</span>
                <button
                  className="flex items-center justify-center p-2 text-black"
                  aria-label="Increase Quantity"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <HiPlus />
                </button>
              </div>

              {/* Add To Cart Button */}
              <a href="/Cart">
              <button
                onClick={handleAddToCart}
                className="px-4 py-2 bg-white hover:bg-[#000000] text-black border-2 border-black rounded-[10px]"
              >
                <p className="text-black hover:text-white">Add To Cart</p>
              </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
