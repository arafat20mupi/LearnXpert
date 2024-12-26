import React from "react";

const Hero = () => {
  return (
    <div className="mt-20">
      <marquee
        className="bg-slate-600 py-2 text-white"
        behavior=""
        direction=""
      >
        <h1 className="text-base md:text-2xl font-bold">
          {" "}
          WELCOME TO OUR SCHOOL WEBSITE
        </h1>
      </marquee>
      <div className="hero-bg-img  bg-fixed transform -translate-y-2 flex flex-col items-center justify-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-center text-white font-bold">
            Empowering Young Minds, Building Bright Futures
          </h1>
          <p className="text-center md:text-xl my-2 md:my-5 text-white text-md px-5">
            Join our community where learning meets fun and creativity
          </p>
          <a
            href="#topStudent"
            class="btn px-7 md:px-10 py-2 md:py-3 md:text-xl font-semibold text-center text-white transition duration-300 rounded-lg hover:from-purple-600 hover:to-pink-800 ease bg-gradient-to-br from-purple-600 to-pink-600 md:w-auto shadow-md"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
