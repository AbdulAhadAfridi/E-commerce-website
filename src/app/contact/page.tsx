import React from "react";
import { PiGreaterThanBold } from "react-icons/pi";
import Header2 from "../components/header2";
import { MdAccessTimeFilled, MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import Image from "next/image";

const Contact = () => {
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
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Contact</h2>

          {/* Breadcrumb */}
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">Contact</span>
          </p>
        </div>
      </section>
<div className="max-w-screen-2xl mx-auto bg-white flex flex-col lg:flex-row items-center w-full h-auto lg:h-[1144px]">
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-[28px] md:text-[36px] font-semibold text-center mb-6">Get In Touch With Us</h1>
    <p className="text-center text-[#9F9F9F] text-[14px] md:text-[16px]">
      For More Information About Our Product & Services. Please Feel Free To Drop Us
    </p>
    <p className="text-center text-[#9F9F9F] text-[14px] md:text-[16px] mb-12">
      An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
    </p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mx-auto max-w-screen-lg">
      {/* Contact Information */}
      <div className="w-full lg:w-[393px] h-auto lg:h-[537px]">
        {/* Location */}
        <div className="flex items-center gap-x-4 mt-8 md:mt-24">
          <MdLocationOn className="text-[30px]" />
          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Address</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">236 5th SE Avenue, New</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">York NY10000, United</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">States</p>

        {/* Phone */}
        <div className="flex items-center gap-x-4 mt-6 md:mt-10">
        <FaPhone className="text-[30px]" />

          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Phone</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Mobile: +(84) 546-6789</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Hotline: +(84) 456-6789</p>

        {/* Working Time */}
        <div className="flex items-center gap-x-4 mt-6 md:mt-10">
          <MdAccessTimeFilled className="text-[30px]" />
          <h3 className="text-[20px] md:text-[30px] font-semibold text-[#000000]">Working Time</h3>
        </div>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Monday-Friday: 9:00 -</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">22:00</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">Saturday-Sunday: 9:00 -</p>
        <p className="text-[#000000] text-[14px] md:text-[16px] ml-12">21:00</p>
      </div>

                  {/* Contact Form */}
                  <div className="bg-white w-full lg:w-[531px] h-auto lg:h-[734px] mt-8 lg:mt-14 p-8">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block font-medium text-black text-base md:text-lg mb-2"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
                  placeholder="Abc"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block font-medium text-black text-base md:text-lg mb-2"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
                  placeholder="Abc@def.com"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block font-medium text-black text-base md:text-lg mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block w-full h-16 p-4 border border-gray-300 rounded-[10px] shadow-sm"
                  placeholder="This is optional"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block font-medium text-black text-base md:text-lg mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  className="block w-full h-32 p-4 border border-gray-300 rounded-[10px] shadow-sm"
                  placeholder="Hi! I would like to ask about..."
                />
              </div>
              <button
                type="submit"
                className="w-full lg:w-[237px] lg:h-[48px] h-12 mt-8 px-6 py-2 border border-black text-black font-semibold rounded-[10px] hover:bg-black hover:text-white"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>


      
   
      {/* Features Section */}
      <div className="bg-[#FAF4F4] py-10  mx-auto max-w-screen-2xl w-[1550] h-[500] lg:h-[400] xl:h-[300] ">
        <div className="max-w-7xl mx-auto grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 px-4 mt-14  ml-0 md:ml-48  lg:ml-4 xl:ml-40">
          {/* Feature 1 */}
          <div className="text-left  xl:ml-8">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0">Free Delivery</h3>
            <p className=" text-[#9F9F9F] text-sm lg:text-lg">  
            For all oders over $50, consectetur adipim scing elit.            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-left lg:ml-[-120px] xl:ml-4 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold sm:ml-28 lg:ml-0 ">90 Days Return</h3>
            <p className=" text-[#9F9F9F] text-sm lg:text-lg ">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-left  lg:mt-4 xl:mt-0 ">
            <h3 className="text-yellow-500 xl:text-black text-[35px] font-semibold  sm:ml-28 lg:ml-0">Secure Payment</h3>
          
            <p className=" text-[#9F9F9F] text-sm lg:text-lg flex xl:flex-col ">
              100% secure payment, consectetur
              <p className='ml-2 xl:ml-0'>adipiscing elit.</p>
            
            </p>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Contact;
