import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { SiJavascript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";



const Skills = () => {
  return (
    <div id="skills">
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1"></h2>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            {/* skills */}

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <IoLogoHtml5 />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow"></div>
                <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[90%]"></div>
                </div>
                <p className=" font-semibold text-gray-800 text-right">90%</p>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                  <IoLogoCss3 />

                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow"></div>
                <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[75%]"></div>
                </div>
                <p className=" font-semibold text-gray-800 text-right">75%</p>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                  
                  <SiJavascript />


                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPT/TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow"></div>
                <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[70%]"></div>
                </div>
                <p className=" font-semibold text-gray-800 text-right">70%</p>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                  
                  <RiNextjsFill />



                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT.JS
                  </h2>
                </div>
                <div className="flex-grow"></div>
                <div className="relative h-1 w-full bg-gray-400 rounded-xl">
                    <div className="absolute bg-blue-500 h-1 rounded-xl w-[85%]"></div>
                </div>
                <p className=" font-semibold text-gray-800 text-right">85%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;