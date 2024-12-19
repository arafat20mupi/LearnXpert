import React from "react";

const Hero = () => {
  return (
    <div className="mt-24">
      <marquee
        className="bg-slate-600 py-2 text-white"
        behavior=""
        direction=""
      >
        <h1 className="text-2xl font-bold "> WELCOME TO OUR SCHOOL WEBSITE</h1>
      </marquee>
      <div className="hero-bg-img flex flex-col items-center justify-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-center text-cyan-300 font-bold">
            Welcome to our website
          </h1>
          <p className="text-center my-5 text-white text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
            magnam, vero fugiat earum veniam consectetur tempore dolor at
            temporibus fugit quidem velit ad non corrupti dolorem deleniti est
            voluptas alias?
          </p>
          <button className="text-center text-xl rounded-md bg-red-500 hover:bg-red-600 duration-150 text-white px-10 py-2" type="button">Get Start</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
