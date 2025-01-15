import  { useContext, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [isDropDown, setisDropDown] = useState(false);
  const {user} =useContext(AuthContext)
console.log(user)
  const handleDropDownone = () => {
    setisDropDown(!isDropDown);
  };
  const handleMenu = () => {
    setisDropDown(false);
    setisOpen(!isOpen);
  };
  const handledropdownHidden = () => {
    setisOpen(!isOpen);
    setisDropDown(false);
  };
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
          <Link
            onClick={() => setisOpen(!isOpen)}
            to="/"
            className="px-3 hover:text-slate-600 cursor-pointer"
          >
            Home
          </Link>
          <Link
            onClick={() => setisOpen(!isOpen)}
            to="/gallery"
            className="px-3 hover:text-slate-600 cursor-pointer"
          >
            Gallery
          </Link>
          <Link
            onClick={() => setisOpen(!isOpen)}
            to="/result"
            className="px-3 hover:text-slate-600 cursor-pointer"
          >
            Result
          </Link>
          <li
            onClick={handleDropDownone}
            className="flex items-center px-3 hover:text-slate-600 cursor-pointer"
          >
            Admission{" "}
            <span className="ml-1">
              {isDropDown ? <FaAngleUp /> : <FaAngleDown />}
            </span>
          </li>
          {isDropDown && (
            <ul className="absolute flex flex-col bg-white shadow-md ring-1 ring-gray-300 rounded-md top-14 right-16 md:right-28 z-50">
              <Link
                to="/admission"
                onClick={handledropdownHidden}
                //  onClick={() => setisOpen(!isOpen)}
                className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer text-sm rounded-md"
              >
                Admission Form
              </Link>
              <Link
                to="/admissionInfo"
                onClick={handledropdownHidden}
                className="px-4 py-3 hover:bg-orange-500 hover:text-white cursor-pointer text-sm rounded-md"
              >
                Admission Information
              </Link>
            </ul>
          )}
          <Link
            onClick={() => setisOpen(!isOpen)}
            to="/quiz"
            className="px-3 hover:text-slate-600 cursor-pointer"
          >
            Quiz
          </Link>
          <Link className="px-3 hover:text-slate-600 cursor-pointer hidden md:block">
            <Link onClick={() => setisOpen(!isOpen)}  to={user ? '/admin' : "/login"}>
              <FaCircleUser className="text-2xl" />
            </Link>
          </Link>
        </ul>
        <div className="flex items-center space-x-6 md:hidden">
          <Link to="/login">
            <FaCircleUser className="text-2xl" />
          </Link>
          <LuMenu onClick={handleMenu} className="text-2xl" />
          {/* <LuMenu onClick={() => setisOpen(!isOpen)} className="text-2xl" /> */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
