"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <header className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100  shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5  p-1.5">
          <img src="/logo.png" className="h-10 w-auto rounded-full object-cover" alt="CollabHub Logo" />
        </Link>

        {status !== "authenticated" ? (
         <Link
         href="/login"
         className="text-sm font-semibold leading-6  text-white  hover:bg-blue-700 transition-colors duration-300 bg-blue-500  p-2 rounded"
       >
         Log in
       </Link>
       
        ) : (
          <div className="flex gap-4">
            <Link
              href="/organizations"
              className="text-sm font-semibold leading-6  bg-blue-500 hover:bg-blue-700 text-white transition-colors duration-300 p-2 rounded"
            >
              Organizations
            </Link>
            <div
              onClick={(event) => {
                event.preventDefault();
                //signOut();
              }}
              className="font-semibold text-sm cursor-pointer hover:bg-blue-700 bg-blue-500 text-white transition-colors duration-300 p-2 rounded"
            >
              Logout
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
