import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white z-40 h-[80px] fixed top-0 left-0 right-0 px-10 shadow-md flex items-center justify-between">
        <div>
          <h1>LearnXpert</h1>
        </div>
        <ul
          className={`flex flex-col shadow-md md:shadow-none md:flex-row md:items-center md:space-x-5 space-y-5 md:space-y-0  fixed md:static top-[80px] left-0 right-0 z-40 py-6 md:py-0 bg-white ${
            isOpen ? null : "hidden md:flex"
          }`}
        >
          <Link to="/" className="px-3 hover:text-slate-600 cursor-pointer">
            Home
          </Link>
          <Link
            to="/gallery"
            className="px-3 hover:text-slate-600 cursor-pointer"
          >
            Gallery
          </Link>
          <Link className="px-3 hover:text-slate-600 cursor-pointer">
            Result
          </Link>
          <Link className="px-3 hover:text-slate-600 cursor-pointer">
            Admission
          </Link>
          <Link className="px-3 hover:text-slate-600 cursor-pointer">Quiz</Link>
          <Link className="px-3 hover:text-slate-600 cursor-pointer hidden md:block">
            <FaCircleUser className="text-2xl" />
          </Link>
        </ul>
        <div className="flex items-center space-x-6 md:hidden">
          <FaCircleUser className="text-2xl" />
          <LuMenu onClick={() => setisOpen(!isOpen)} className="text-2xl" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
