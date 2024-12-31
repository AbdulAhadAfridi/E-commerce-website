import React from 'react';
import { PiGreaterThanBold } from 'react-icons/pi';
import Header2 from '../components/header2';
import Image from 'next/image';
import { IoIosSearch } from 'react-icons/io';

const Home = () => {
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
             <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Blog</h2>
   
             {/* Breadcrumb */}
             <p className="text-black text-sm flex items-center gap-x-2 mb-20">
               <span className="text-black text-lg font-semibold">Home</span>
               <PiGreaterThanBold className="text-black font-bold text-lg" />
               <span className="text-lg">blog</span>
             </p>
           </div>
         </section>

<div className="max-w-screen-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 w-full h-auto">
  {/* Main Container */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
    {/* Blog Post Section 01 */}
    <div className="bg-white overflow-hidden mt-8 lg:w-2/3">
      <Image
        src="/blog1.png"
        alt="Laptop setup"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Admin</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">14 Oct 2022</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo3.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Wood</p>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px] font-semibold text-black my-6">
          Going all-in with millennial design
        </h2>
        <p className="text-[#9F9F9F] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="text-black font-medium text-[16px] underline mt-8 mb-12">
          Read More
        </button>
      </div>
      {/* Blog Post Section 02 */}
      <Image
        src="/blog2.png"
        alt="Laptop setup"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap  gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Admin</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">14 Oct 2022</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo3.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Handmade</p>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px] font-semibold text-black my-6">
          Exploring new ways of decorating        </h2>
        <p className="text-[#9F9F9F] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="text-black font-medium text-[16px] underline mt-8 mb-12">
          Read More
        </button>
      </div>
      {/* Blog Post Section 03 */}

      <Image
        src="/blog3.png"
        alt="Laptop setup"
        width={850}
        height={500}
        className="object-contain w-full"
      />
      <div className="mt-6">
        <div className="flex flex-wrap  gap-10">
          <div className="flex items-center">
            <Image
              src="/bloglogo1.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Admin</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo2.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">14 Oct 2022</p>
          </div>
          <div className="flex items-center">
            <Image
              src="/bloglogo3.png"
              alt="Icon"
              width={0}
              height={0}
              className="w-5 h-5"
            />
            <p className="text-[#9F9F9F] text-[16px] ml-2">Wood</p>
          </div>
        </div>

        <h2 className="text-lg sm:text-xl md:text-[30px] font-semibold text-black my-6">
         Handmade pieces that took time to make
        </h2>
        <p className="text-[#9F9F9F] text-[15px] sm:text-base w-[817px] h-[115px] leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.
        </p>
        <button className="text-black font-medium text-[16px] underline mt-8 mb-12">
          Read More
        </button>
      </div>
       {/* Pagination Section */}
<div className="flex justify-center md:items-center flex-wrap space-x-4  mb-20 w-full  mt-6 lg:ml-[100px]  ">
  <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FBEBB5] text-gray-800 font-medium">
    1
  </button>
  <button className="w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    2
  </button>
  <button className="   lg:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    3
  </button>
  <button className="  xl:mt-0 w-16 h-16 rounded-[10px] flex justify-center items-center bg-[#FFF9E5] text-gray-800 font-medium">
    Next
  </button>
</div>
    </div>
    
     
    {/* Sidebar */}
    <div className=" ml-16 rounded-[10px] flex flex-col gap-6 mt-6 ">
      {/* Search Bar */}
      <div className="flex items-center border border-gray-400 px-4 py-2 ml-[-70] lg:ml-0 w-[300px] h-[58] rounded-[10px]">
        <input
          type="text"
          className="flex-grow outline-none text-sm"
          placeholder="Search..."
        />
        <IoIosSearch className="text-black text-2xl" />
      </div>

      {/* Categories */}
      <div className="bg-white p-6 mt-4 ">
        <h3 className="font-semibold text-[28px] text-black">Categories</h3>
        <ul className="mt-8 space-y-8 text-[16px] text-[#9F9F9F] ">
          <li className="flex justify-between">Crafts <span>2</span></li>
          <li className="flex justify-between">Design <span>8</span></li>
          <li className="flex justify-between">Handmade <span>7</span></li>
          <li className="flex justify-between">Interior <span>1</span></li>
          <li className="flex justify-between">Wood <span>6</span></li>
        </ul>
      </div>

      {/* Recent Posts 01 */}
      <div className="bg-white p-6  mt-16">
        <h3 className="font-semibold text-[28px] text-black">Recent Posts</h3>
        <ul className="mt-8 space-y-12">
          <li className="flex items-center">
            <Image src="/recentblog1.png" alt="Post thumbnail" width={100}
              height={0} className="w-16 h-16 rounded object-cover" />
            <div className="ml-4">
              <a href="#" className="text-black text-sm">Going all-in with millennial design</a>
              <p className="text-gray-500 text-xs">03 Aug 2022</p>
            </div>
          </li>
         {/* Recent Posts 02 */}
          <li className="flex items-center">
            <Image src="/recentblog2.png" alt="Post thumbnail" width={100}
              height={0} className="w-16 h-16 rounded object-cover" />
            <div className="ml-4">
              <a href="#" className="text-black text-sm"> Exploring new ways of decorating </a>
              <p className="text-gray-500 text-xs">03 Aug 2022</p>
            </div>
          </li>
          {/* Recent Posts 03 */}
          <li className="flex items-center">
            <Image src="/recentblog3.png" alt="Post thumbnail" width={100}
              height={0} className="w-16 h-16 rounded object-cover" />
            <div className="ml-4">
              <a href="#" className="text-black text-sm">Handmade pieces that took time to make</a>
              <p className="text-gray-500 text-xs">03 Aug 2022</p>
            </div>
          </li>
          {/* Recent Posts 04 */}
          <li className="flex items-center">
            <Image src="/recentblog4.png" alt="Post thumbnail"  width={100}
              height={0}className="w-16 h-16 rounded object-cover" />
            <div className="ml-4">
              <a href="#" className="text-black text-sm">Modern home in Milan</a>
              <p className="text-gray-500 text-xs">03 Aug 2022</p>
            </div>
          </li>
          {/* Recent Posts 05 */}
          <li className="flex items-center">
            <Image src="/recentblog5.png" alt="Post thumbnail" width={100}
              height={0} className="w-16 h-16 rounded object-cover" />
            <div className="ml-4">
              <a href="#" className="text-black text-sm">Colorful office redesign</a>
              <p className="text-gray-500 text-xs">03 Aug 2022</p>
            </div>
          </li>

        </ul>
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

export default Home;
