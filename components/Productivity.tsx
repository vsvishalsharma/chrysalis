"use client";
import { productiveList } from "@/lib/productivity-data";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";

const Productivity = () => {
  const [itemIndex, setItemIndex] = useState(0);
  return (
    <div className="px-[10%] py-5  bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
  
      <h1 className="font-semibold text-4xl py-5">A productivity powerhouse</h1>
      <p className="w-full lg:w-1/2 text-xl my-5 text-gray-700 dark:text-gray-300">
        Simple, flexible, and powerful. All it takes are boards, lists, and
        cards to get a clear view of who’s doing what and what needs to get
        done. Learn more in our guide for getting started.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-4 relative">
        <div className="flex flex-col justify-between py-4 mt-5 mb-5 leading-normal bg-gray-200 dark:bg-gray-900 rounded-md">
          {productiveList?.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer py-6 px-3 rounded-md ${
                index === itemIndex
                  ? "bg-gray-300 dark:bg-gray-700 md:border-l-4 md:border-[#00c7e5]"
                  : "bg-gray-200 dark:bg-gray-900 text-gray-900 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white"
              }`}
              onClick={() => setItemIndex(index)}
            >
              <h5 className="mb-2 text-lg font-bold tracking-tight">
                {item.title}
              </h5>
              <p className="mb-3 font-normal">{item.desc}</p>
            </div>
          ))}
        </div>
        <BackgroundGradient className="rounded-[22px] w-full h-full p-4 sm:p-10 bg-white dark:bg-zinc-900 relative">
          <img
            src={`/productivity_${itemIndex + 1}.png`}
            className="object-cover w-full h-full rounded-[22px] absolute inset-0"
            alt=""
          />
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Productivity;
