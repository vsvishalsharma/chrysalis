import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="px-[10%] py-16 grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="text-white p-2">
        <h1 className="font-extrabold text-5xl hover:text-blue-400 transition-colors duration-300">
          CollabHub brings all your tasks, teammates, and tools together
        </h1>
        <p className="text-lg mt-3 leading-10 text-gray-400 hover:text-blue-400 transition-colors duration-300">
          Simple, flexible, and powerful. All it takes are boards, lists, and
          cards to get a clear view of who’s doing what and what needs to get
          done.
        </p>
        <h3 className="text-xl font-semibold mt-5 text-gray-300 hover:text-blue-400 transition-colors duration-300">
          WHAT YOU GET ON THE FREE PLAN:
        </h3>
        <ul className="my-3 leading-10 text-gray-400">
          <li className="hover:text-blue-400 transition-colors duration-300">Unlimited cards</li>
          <li className="hover:text-blue-400 transition-colors duration-300">Github Integration</li>
          <li className="hover:text-blue-400 transition-colors duration-300">Real Time Chat wth Team</li>
        </ul>
        <div className="flex w-full max-w-sm items-center space-x-2 mt-3">
          <Input type="email" placeholder="Email" className="bg-gray-700 text-white" />
          <Button type="submit" className="bg-blue-700 text-white hover:bg-blue-800 transition-colors duration-300">
            Sign up - it's free!
          </Button>
        </div>
      </div>
      <div className="relative">
  <img src="/header_img.jpg" alt="CollabHub" />
  <img 
    src="/chat.png" 
    alt="Chat"
    className="absolute bottom-0 left-40 rounded-full object-cover"
    style={{
      height: '200px',
      width: '200px',
      zIndex: 1
    }}
  />
  <img
    src="/github_logo.png"
    alt="GitHub"
    className="absolute bottom-0 left-4 m-4 rounded-full object-cover transform rotate-12"
    style={{ 
      height: '200px', 
      width: '200px',
      transformOrigin: 'center center',
      zIndex: 2
    }}
  />
</div>
    </div>
  );
};

export default Header;
