"use client";
//import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  //const { status } = useSession();
  return (
    <header className="bg-gray-900 shadow">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <Link href="/" className="-m-1.5 p-1.5">
          <img src="/logo.jpg" className="h-10 w-auto rounded-full object-cover" alt="CollabHub Logo" />
        </Link>

        {status !== "authenticated" ? (
         <Link
         href="/login"
         className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-300 bg-blue-500  p-2 rounded"
       >
         Log in
       </Link>
       
        ) : (
          <div className="flex gap-4">
            <Link
              href="/organizations"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-white transition-colors duration-300"
            >
              Organizations
            </Link>
            <div
              onClick={(event) => {
                event.preventDefault();
                //signOut();
              }}
              className="font-semibold text-sm cursor-pointer text-gray-300 hover:text-white transition-colors duration-300"
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
