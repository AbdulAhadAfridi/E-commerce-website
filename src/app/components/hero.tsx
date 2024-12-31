import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="bg-[#FBEBB5] w-full flex mx-auto max-w-screen-2xl items-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        
        {/* Text Section */}
        <div className="text-center lg:text-left lg:pl-[30px] lg:ml-16 mt-8 mb-20 md:mb-0 lg:mt-0">
          <h1 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[64px] font-semibold text-black mb-4 lg:mb-8">
            Rocket Single Seater
          </h1>
          <Link
            href="/Shop"
            className="text-[16px] sm:text-[18px] md:text-[20px] border-b-2 border-black font-semibold "
          >
            Shop Now
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-[600px] xl:w-[800px] 2xl:w-[1000px]">
          <Image
            src="/seater.png"
            alt="Rocket Single Seater"
            width={1000}
            height={700}
            className="w-full h-auto object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
