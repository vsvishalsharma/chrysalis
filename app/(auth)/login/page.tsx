"use client";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
//import HoverBorderGradient from "@/components/ui/hover-border-gradient";
const Login = () => {
  const router = useRouter();
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="grid place-content-center h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      
      <div className="flex flex-col justify-center gap-5 items-center h-auto w-[400px] bg-gray-800 shadow-lg rounded-lg p-10">
        <img src="/logo.png" className="h-16 w-auto mb-4 rounded-full" alt="Logo" />
        <p className="text-lg font-semibold mb-2">Log in to continue</p>
        <p className="text-sm text-gray-400 mb-8 text-center">
          Sign in to manage your projects with ease.
        </p>
        
        <button
          onClick={() => signIn("github")}
          className="py-3 px-6 rounded-full cursor-pointer flex justify-center items-center gap-3 bg-gray-700 border border-gray-600 font-medium w-full hover:bg-black transition-colors duration-300"
        >
          <img
            className="h-6"
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
          />
          <span>Sign in with GitHub</span>
        </button>
        <Link
          href="/"
          className="text-center text-sm text-blue-400 cursor-pointer underline hover:text-blue-300 transition-colors duration-300 mt-4"
        >
          Go to home page
        </Link>
      </div>
      <img
        src="/login_1.svg"
        className="hidden lg:block absolute bottom-0 left-0 w-[25%]"
        alt="Decorative"
      />
      <img
        src="/login_2.svg"
        className="hidden lg:block absolute bottom-0 right-0 w-[25%]"
        alt="Decorative"
      />
    </div>
  );
};

export default Login;
