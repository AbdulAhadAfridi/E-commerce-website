import React from "react";
import Image from "next/image";
import { LuCalendarMinus2 } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";

const BlogSection = () => {
  return (
    <section className="bg-white py-16 mx-auto max-w-screen-2xl">
      <div className="text-center px-4">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-800 mb-4">
          Our Blogs
        </h2>
        <p className="text-sm sm:text-base text-[#9F9F9F] mb-10">
          Find a bright idea to suit your taste with our great selection
        </p>

        {/* Blog Cards */}
        <div className="grid gap-8 mt-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Blog Card 1 */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/blogsec1.png" // Replace with actual image paths
              alt="Blog 1"
              width={393}
              height={393}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-600 mb-2">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-base sm:text-lg md:text-[20px] font-semibold underline"
              >
                Read More
              </a>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm sm:text-base">
                <span className="flex items-center gap-2 text-gray-500">
                  <MdAccessTime className="text-black" /> 5 min
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <LuCalendarMinus2 className="text-black" /> 12th Oct 2022
                </span>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="bg-white rounded-lg shadow-lg transform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/blogsec2.png"
              alt="Blog 2"
              width={393}
              height={393}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-600 mb-2">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-base sm:text-lg md:text-[20px] font-semibold underline"
              >
                Read More
              </a>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm sm:text-base">
                <span className="flex items-center gap-2 text-gray-500">
                  <MdAccessTime className="text-black" /> 5 min
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <LuCalendarMinus2 className="text-black" /> 12th Oct 2022
                </span>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="bg-white rounded-lg shadow-lgtransform hover:scale-[1.05] duration-500 hover:cursor-pointer">
            <Image
              src="/blogsec3.png"
              alt="Blog 3"
              width={393}
              height={393}
              className="w-full h-auto object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-sm sm:text-lg font-semibold text-gray-600 mb-2">
                Going all-in with millennial design
              </h3>
              <a
                href="#"
                className="text-black text-base sm:text-lg md:text-[20px] font-semibold underline"
              >
                Read More
              </a>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 text-sm sm:text-base">
                <span className="flex items-center gap-2 text-gray-500">
                  <MdAccessTime className="text-black" /> 5 min
                </span>
                <span className="flex items-center gap-2 text-gray-500">
                  <LuCalendarMinus2 className="text-black" /> 12th Oct 2022
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Link */}
        <div className="mt-8">
          <a
            href="/blogs"
            className="text-black text-base sm:text-lg md:text-[20px] font-semibold underline"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
