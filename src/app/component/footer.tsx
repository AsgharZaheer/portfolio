"use client"


import Link from 'next/link';
import React from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { CgMail } from "react-icons/cg";





const Footer = () => {
  return (
    <div className='bg-blue-200'>
      <footer className="text-gray-600 body-font">
  
  <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

      <span className="ml-3 text-xl"></span>
    </a>
    <p className="text-sm text-gray-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2023  | Created by Asghar Zaheer
      
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link
      target="/blank"
      href="https://www.linkedin.com/in/asghar-zaheer-339690278/" className="text-blue-500">
      <AiFillLinkedin className='text-2xl'/>
      </Link>
      
      

      <Link href={"mailto:8882salman@gmail.com"}className="ml-3 text-blue-500">
      <CgMail className='text-2xl hover:text-[#ff0000]'/>
      </Link>

    </span>

      
  </div>
</footer>

    </div>
  )
}

export default Footer
 