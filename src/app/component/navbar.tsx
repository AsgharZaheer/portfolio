
"use client"
import Link from "next/link";
import React from "react";


import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-blue-200 z-50 sticky top-0">
      <header className="text-gray-800 body-font">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
  
            <span className="ml-3 text-sm">AATech </span>
            </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-800">Home </Link>
            <Link href={"#about"} className="mr-5 hover:text-blue-800">About </Link>
            <Link href={"#Projects"} className="mr-5 hover:text-blue-800">Projects </Link>
            <Link href={"#skills"} className="mr-5 hover:text-blue-800">Skills </Link>
            <Link href={"#Contact"} className="mr-5 hover:text-blue-800">Contact </Link>
          </nav>
          <a href="/assests/Asghar-Resume.png">
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">
            
             
            Download CV
            <AiOutlineCloudDownload className="text-lg ml-5" />
                 </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
