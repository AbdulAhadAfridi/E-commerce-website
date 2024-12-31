"use client";
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import Image from "next/image";
import { HiMinus, HiPlus } from "react-icons/hi";
import Header2 from "../components/header2";
import { PiGreaterThanBold } from "react-icons/pi";
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  quantity: number; 
}
const Cart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  useEffect(() => {
    // Get cart from localStorage on page load
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(savedCart);
  }, []);
  console.log();

  const handleRemoveItem = (productId: number) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleChangeQuantity = (productId: number, change: number) => {
    const updatedCart = cart.map(item => {
      if (item.id === productId) {
        item.quantity = Math.max(1, item.quantity + change); // Ensure quantity doesn't go below 1
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

   // Ensure that price and quantity are numbers
   const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const itemPrice = parseFloat(item.price); // Make sure price is a number
      if (!isNaN(itemPrice)) {
        return total + itemPrice * item.quantity;  // Calculate total cost correctly
      }
      return total;
    }, 0);
  };
    

  return (
    <div>
      <Header2 />
      <section className="relative max-w-screen-2xl mx-auto">
        <Image
          src="/shopimg1.png"
          alt="Background"
          width={1440}
          height={316}
          className="w-full h-[340px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <div>
            <Image
              src="/logo.png"
              alt="Icon"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-black mb-6">Cart</h2>
          <p className="text-black text-sm flex items-center gap-x-2 mb-20">
            <span className="text-black text-lg font-semibold">Home</span>
            <PiGreaterThanBold className="text-black font-bold text-lg" />
            <span className="text-lg">cart</span>
          </p>
        </div>
      </section>

      <div className="max-w-screen-2xl mx-auto w-full h-[525px] bg-white">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FFF9E5]">
                    <th className="py-3 px-4 font-medium text-[#000000]">Product</th>
                    <th className="py-3 px-4 text-left font-medium text-[#000000]">Price</th>
                    <th className="py-3 px-4 text-left font-medium text-[#000000]">Quantity</th>
                    <th className="py-3 px-4 text-left font-medium text-[#000000]">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr key={item.id}>
                      <td className="py-4 px-4 flex items-center">
                        <div>
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={150}
                            className="w-20 h-20 object-cover bg-[#FBEBB5] rounded-[10px]"
                          />
                        </div>
                        <span className="text-[#9F9F9F] text-[16px] ml-4">{item.name}</span>
                      </td>
                      <td className="py-4 px-4 text-[#9F9F9F] text-[16px]">Rs. {item.price}</td>
                      <td className="py-4 px-4">
                        <div className="flex items-center">
                          <button onClick={() => handleChangeQuantity(item.id, -1)} className="ml-4 font-semibold w-[32px] h-[32px] text-[#000000] border-[1px] border-[#9F9F9F] rounded-[10px] hover:bg-black hover:text-white">
                            <HiMinus className="ml-[6px]"/>
                          </button>
                          <span className="px-4">{item.quantity}</span>
                          <button onClick={() => handleChangeQuantity(item.id, 1)} className="ml-4 font-semibold w-[32px] h-[32px] text-[#000000] border-[1px] border-[#9F9F9F] rounded-[10px] hover:bg-black hover:text-white">
                            <HiPlus className="ml-[6px]" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-4 text-[#000000] text-[16px] font-semibold">Rs.{calculateTotal()} </td>
                      <td className="text-[#FBEBB5] text-[25px] cursor-pointer">
                        <AiFillDelete onClick={() => handleRemoveItem(item.id)} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="lg:col-span-1 ml-8">
              <div className="bg-[#FFF9E5] p-6 rounded-lg shadow-sm">
                <h2 className="text-[32px] font-semibold mb-6">Cart Totals</h2>
                <div className="flex justify-between items-center mb-4 mt-10">
                  <span className="text-[#000000] font-semibold text-[16px]">Subtotal</span>
                  <span className="text-[#9F9F9F] text-[16px]">Rs. {calculateTotal()}</span>
                </div>
                <div className="flex justify-between items-center mt-8">
                  <span className="text-[16px] font-medium text-[#000000]">Total</span>
                  <span className="text-[20px] font-medium text-[#B88E2F]">Rs. {calculateTotal()}</span>
                </div>
                <button
                  type="button"
                  className="ml-16 mt-16 w-[215px] h-[64px] text-[#000000] border-[1px] border-[#000000] py-2 px-4 rounded-[10px] hover:bg-black hover:text-white"
                >
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
