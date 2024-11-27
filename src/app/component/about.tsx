import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-800 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              width={300}
              height={300}
              className="object-cover object-center rounded ml-auto"
              alt="hero"
              src="/assests/portfolio.jpg"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-blue-600">
              About Me
            </h1>
            <p className="mb-5 leading-relaxed">
              I am an aspiring Cloud Applied Generative AI Engineer, currently
              pursuing my studies at GIAIC, Karachi. I began my academic journey
              with an intermediate degree from St. Patricks Government College,
              Karachi, in 2001, and since then, my passion for technology has
              only grown.
            </p>
            <p className="mb-5 leading-relaxed">
              In addition to my focus on AI and cloud computing, I have honed my
              skills in HTML, CSS, TypeScript, and Next.js, enabling me to build
              modern, scalable web applications. With a strong commitment to
              continuous learning and innovation, I aim to integrate these
              technologies into AI-driven solutions that redefine possibilities
              in the tech industry.
            </p>
            <div className="flex justify-center">
              <Link href={"/assests/Asghar-Resume.png"}>
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                  View CV
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
