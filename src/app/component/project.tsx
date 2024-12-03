// import Image from "next/image";
import React from "react";
import Link from "next/link";

const Project = () => {
  return (
    <div id="Projects">
      <section className="text-gray-800 body-font bg-fixed bg-cover bg-center
      custom-image">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
              My Projects
            </h1>
          </div>
          <div className="flex flex-wrap -m-8 -mt-[5rem] cursor-pointer">
            {/* projects */}
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <Image
                  src="/assests/resume-image.jpg"
                  alt="Resume Builder Project Image"
                  width={300}
                  height={300}
                 />   */}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-90 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
                    
                    {/* Dynamic Resume Builder  */}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-blue-800 mb-3">
                    DYNAMIC RESUME BUILDER
                  </h1>
                  <p className="leading-relaxed">
                    A Free Dynamic Resume Builder....any one want to make resume
                    use my project freely...
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://dynamic-cv-builder-with-pdf-download.vercel.app/"
                    }
                  >
                    <p className="leading-relaxed title-font text-lg font-bold text-center hover:text-green-800 text-blue-800 mb-3 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <Image
                  src={"/assests/5.png"}
                  alt="Todo List Project Image"
                  width={300}
                  height={300}
                 />  */}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-90 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
                    {/* Todo List  */}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-blue-800 mb-3">
                    Todo List BUILDER
                  </h1>
                  <p className="leading-relaxed">
                    For Todos in Todo List BUILDER User Friendly EditAble &
                    RemoveAble Responsive Todo List Application...
                  </p>
                  <Link
                    target="_blank"
                    href={"https://todo-app-navy-theta.vercel.app/"}
                  >
                    <p className="leading-relaxed title-font text-lg font-bold text-center hover:text-green-800 text-blue-800 mb-3 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <Image
                  src={"/assests/fb1.png"}
                  alt="FaceBook Login Page Project Image"
                  width={300}
                  height={300}
                /> */}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-90 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500-500 mb-1">
                    {/* Todo List  */}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-blue-800 mb-3">
                    FaceBook Login Page
                  </h1>
                  <p className="leading-relaxed">
                    FaceBook Login Page Clone as Updated FaceBook Login Page....
                  </p>
                  <Link
                    target="_blank"
                    href={
                      "https://facebook-login-page-asgharzaheer.vercel.app/"
                    }
                  >
                    <br />
                    <br />
                    <p className="leading-relaxed title-font text-lg font-bold text-center hover:text-green-800 text-blue-800 mb-3 ">
                      View Project
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
