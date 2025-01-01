
import React from "react";
import Image from "next/image";

const Newarrival = () => {
  return (
    <section className="bg-[#FFF9E5] mx-auto max-w-screen-2xl py-16 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Sofa Image */}
        <div className="w-full flex justify-center">
          <Image
            src="/arri.png" // Replace this with the actual image path
            alt="Asgaard Sofa"
            width={983}
            height={799}
            className="object-contain w-full max-w-[900px]"
          />
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h4 className="text-2xl sm:text-3xl font-semibold text-black mb-2">
            New Arrivals
          </h4>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black mb-4">
            Asgaard Sofa
          </h1>
          <button className="mt-6 px-6 sm:px-8 py-3 sm:py-4 bg-[#FFF9E5] text-black border-2 border-black text-lg sm:text-xl hover:bg-black hover:text-white transition">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newarrival;
