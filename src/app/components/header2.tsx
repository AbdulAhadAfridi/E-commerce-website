import React from "react";
import { AiOutlineExclamation, AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from  "@/components/ui/sheet";
import { FaRegUser } from "react-icons/fa";
import Image from "next/image";
import { Menu } from "lucide-react";

const Header2 = () => {
  return (
    <header className="bg-white w-full mx-auto max-w-screen-2xl">
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 py-4 lg:py-6">
        {/* Hamburger Menu for Small Screens */}
        <Sheet>
          <SheetTrigger className="lg:hidden">
            <Menu className="text-black cursor-pointer" size={30} />
          </SheetTrigger>
          <SheetContent
            className="bg-white text-black max-w-full h-full sm:max-w-xs sm:rounded-t-lg overflow-y-auto"
          >
             <SheetHeader>
              <h2 className="text-2xl font-bold py-6  ml-[-140]">Menu</h2>
              <ul className="space-y-4 text-lg font-medium pl-4 mt-4 gap-y-4 sm:mr-32 mr-0 text-left items-center">
                <li>
                  <Link href="/" className="hover:text-yellow-700">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:text-yellow-700">
                    Products
                  </Link>
                </li>
                
                <li>
                  <Link href="/Cart" className="hover:text-yellow-700">
                    Cart
                  </Link>
                </li>
                <li>
                  <Link href="/blogs" className="hover:text-yellow-700">
                    Blog
                  </Link>
                </li>
                
                <li>
                  <Link href="/contact" className="hover:text-yellow-700">
                    Contact
                  </Link>
                </li>
                
              </ul>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Navigation Links for Larger Screens */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-10 text-base lg:text-lg font-semibold lg:ml-56">
          <Link href="/" className="hover:text-black">
            Home
          </Link>
          <Link href="/product" className="hover:text-black">
            Product
          </Link>
          <Link href="/blogs" className="hover:text-black">
            Blogs
          </Link>
          <Link href="/contact" className="hover:text-black">
            Contact
          </Link>
        </nav>
        {/* Action Icons */}
        <div className="flex items-center gap-4 lg:gap-6 mr-8">
          <div className="flex items-center gap-2">
            <Link href="/My-account">
              <FaRegUser size={24} className="cursor-pointer hover:text-black mr-[-16]" />
            </Link>
            <AiOutlineExclamation size={24} className="cursor-pointer hover:text-black " />
          </div>
          <GoSearch size={24} className="cursor-pointer hover:text-black" />
          <IoIosHeartEmpty size={24} className="cursor-pointer hover:text-black" />

          {/* Shopping Cart */}
          <Sheet>
            <SheetTrigger>
              <AiOutlineShoppingCart size={24} className="cursor-pointer hover:text-black" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm bg-white">
              <SheetHeader>
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-bold text-black">Shopping Cart</h2>
                </div>
              </SheetHeader>

              {/* Cart Items */}
              <div className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-[#FBEBB5] rounded-lg flex items-center justify-center">
                    <Image
                      src="/sofa.png"
                      alt="Product Thumbnail"
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-gray-800">Asgaard Sofa</h3>
                    <p className="text-xs text-black">
                      1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
                    </p>
                  </div>
                  <button className="w-6 h-6 bg-gray-400 text-white text-xs rounded-full">
                    X
                  </button>
                </div>
                <div className="border-t border-gray-200 mt-4"></div>
              </div>

              {/* Subtotal Section */}
              <div className="p-4">
                <div className="flex justify-between text-sm font-medium">
                  <span>Subtotal</span>
                  <span className="text-[#B88E2F] font-bold">Rs. 250,000.00</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-4 grid grid-cols-2 gap-4">
                <Link
                  href="/Cart"
                  className="py-2 text-center border border-black text-sm text-black rounded-full hover:bg-black hover:text-white"
                >
                  View Cart
                </Link>
                <Link
                  href="/Checkout"
                  className="py-2 text-center border border-black text-sm text-black rounded-full hover:bg-black hover:text-white"
                >
                  Checkout
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header2;
