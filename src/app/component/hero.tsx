"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-800 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
              I am Asghar Zaheer
              <br className="hidden lg:inline-block" />
            </h1>
            <div className="w-[320px] h-[4px] bg-gray-900"></div>
            <br/>
            <p className="mb-8 leading-relaxed">
              Hello.. I am passionate web developer with expertise in HTML, CSS,
              TypeScript, and Node.js. I specialize in building responsive,
              dynamic, and user-friendly web applications. From crafting clean,
              functional code to designing seamless user experiences, I’m
              dedicated to turning creative ideas into reality. Explore my
              projects to see how I bring concepts to life!
            </p>
            <div className="flex justify-center">
              <Link href="#Contact">
                <button className="inline-flex text-white hover:bg-indigo-600 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500-600 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[20rem]"
              alt="hero"
              width={800}
              height={800}
              src="/assests/portfolio.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
