import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-100 dark:bg-gray-900 mt-40">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="flex text-sm sm:text-center text-gray-900 dark:text-white">
            © 2024 <li className="hover:underline ml-1 ">Chrysalis</li>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-900 dark:text-white sm:mt-0">
            <li className="hover:underline mr-4 md:mr-6">About</li>
            <li className="hover:underline mr-4 md:mr-6">Privacy Policy</li>
            <li className="hover:underline mr-4 md:mr-6">Licensing</li>
            <li className="hover:underline">Contact</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
