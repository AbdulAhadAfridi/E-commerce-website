import React from "react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <section className="bg-[#FAF4F4] py-12 mx-auto max-w-screen-2xl">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-4 md:px-8 lg:px-12">
        {/* Card 1 */}
        <div className="p-4 text-center">
          {/* Product Image */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/im1.png"
              alt="Side Table"
              className="object-contain mt-10 sm:mt-20"
              width={500}
              height={200}
            />
          </div>
          {/* Product Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-left text-black mt-10 sm:mt-16">
            Side Table
          </h2>
          {/* View More Link */}
          <p className="text-black font-medium text-left underline mt-4">
            View More
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-4 text-center">
          {/* Product Image */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/im2.png"
              alt="Side Table"
              className="object-contain mt-10 sm:mt-20"
              width={500}
              height={200}
            />
          </div>
          {/* Product Title */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-left text-black mt-10 sm:mt-16">
            Side Table
          </h2>
          {/* View More Link */}
          <p className="text-black font-medium text-left underline mt-4">
            View More
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
