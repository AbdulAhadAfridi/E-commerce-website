import React from "react";
import Image from "next/image";

const InstagramSection = () => {
  return (
    <section className="relative max-w-screen-2xl mx-auto">
      {/* Background Image */}
      <Image
        src="/instbg.png" // Replace with your image path
        alt="Background"
        width={1540}
        height={450}
        className="w-full h-auto object-cover"
      />

      {/* Content (Center-Aligned) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
          Our Instagram
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-black mb-8">
          Follow our store on Instagram
        </p>

        {/* Call to Action */}
        <button className="px-8 sm:px-12 lg:px-20 py-2 sm:py-3 lg:py-4 text-sm sm:text-base md:text-lg lg:text-[22px] text-black rounded-full shadow-md font-semibold bg-[#FAF4F4]">
          Follow Us
        </button>
      </div>
    </section>
  );
};

export default InstagramSection;
