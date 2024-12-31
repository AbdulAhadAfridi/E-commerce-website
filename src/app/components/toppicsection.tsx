import React from "react";
import Image from "next/image";

const TopPicksSection = () => {
  return (
    <section className="bg-white py-16 mx-auto max-w-screen-2xl ">
      <div className="container mx-auto text-center max-w-screen-2xl">
        {/* Title Section */}
        <h2 className="text-3xl  font-semibold medium-[36] text-black mb-4">Top Picks For You</h2>
        <p className="text-gray-600 mb-12">
          Find a bright idea to suit your taste with our great selection of suspension, floor, and table lights.
        </p>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 container mx-auto text-center max-w-screen-2xl">
          {/* Product 1 */}
          <div className="transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/pro1.png" // Replace with actual image path
              alt="Trenton modular sofa_3"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Trenton modular sofa_3</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 2 */}
          <div className="text-centertransform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/pro2.png" // Replace with actual image path
              alt="Granite dining table with dining chair"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Granite dining table with dining chair</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 3 */}
          <div className="text-center transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/pro3.png" // Replace with actual image path
              alt="Outdoor bar table and stool"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Outdoor bar table and stool</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>

          {/* Product 4 */}
          <div className="text-center transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/pro4.png" // Replace with actual image path
              alt="Plain console with teak mirror"
              width={287}
              height={287}
              className="mx-auto"
            />
            <h3 className="text-lg  text-black mt-4">Plain console with teak mirror</h3>
            <p className="text-black text-xl font-semibold mt-2 ">Rs. 25,000.00</p>
          </div>
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <button className="text-black font-medium  text-left underline">
            View More
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopPicksSection;
