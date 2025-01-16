/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaArrowAltCircleRight,
  FaChalkboardTeacher,
  FaPlus,
} from "react-icons/fa";

import { IoMdHome } from "react-icons/io";
import { MdUpload } from "react-icons/md";
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import useRole from "../../Hooks/useRole";

const Sidebar = ({ toggle, open }) => {
  const [adminToggle, setAdminToggle] = useState(false);
  const [TeacherToggle, setTeacherToggle] = useState(false);

  const handleAdmin = () => {
    setAdminToggle(!adminToggle);
  };
  const handleTeacher = () => {
    setTeacherToggle(!TeacherToggle);
  };


  const { role, loading, error } = useRole();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (role !== 'admin') {
    return <div>You do not have admin access</div>;  // Access restricted message
  }

  return (
    <div>
      <div
        className={`select-none h-screen pt-20 overflow-y-scroll border-1 shadow-md bg-white z-0 shadow-gray-500 w-[270px] top-0 left-0 right-0 fixed px-1 ${open ? "-left-[230px] md:-left-[0px] duration-500" : "-left-[0px] md:-left-[200px] duration-500"
          }`}
      >
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center space-x-2 py-2 px-10 ml-auto">
            <div
              className="transform translate-x-9 p-1 md:p-2 bg-slate-300 rounded-full cursor-pointer"
              onClick={toggle}
            >
              <FaArrowAltCircleRight
                className={`text-slate-600 inline float-right md:text-2xl ${open
                  ? "transform md:rotate-180 duration-300"
                  : "duration-300 rotate-180 md:rotate-0"
                  }`}
              />
            </div>
          </li>
          <li className="text-center">
            {role === 'admin'  ? "Admin Pannel" : "Teacher Pannel"}
          </li>
          <Link
            to="/admin"
            className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
          >
            <div className="text-blue-500 bg-blue-200 p-2 rounded-full">
              <IoMdHome className="text-2xl" />
            </div>
            <span>Home</span>
          </Link>
          {/* for admin */}

          <div className="flex flex-col">
            {role === 'admin' && (
              <div
                onClick={handleAdmin}
                className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 cursor-pointer"
              >
                <div className="text-orange-500 bg-orange-200 p-2 rounded-full">
                  <FaPlus className="text-2xl" />
                </div>
                <div className="flex items-center">
                  Adding
                  <span className="mx-1">
                    {adminToggle ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              </div>
            )}
            {adminToggle && (
              <ul className="select-none text-sm flex flex-col">
                <Link to="/admin/allUsers" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                 All User
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Add People
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Handle Fee's
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Class Schedule
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Event Management
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Online Meeting
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Manage Library
                </Link>
              </ul>
            )}
          </div>

          {/* for admin */}
          <div className="flex flex-col">
            {role === 'teacher' && (
              <div
                onClick={handleTeacher}
                className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 cursor-pointer"
              >
                <div className="text-pink-500 bg-pink-200 p-2 rounded-full">
                  <FaPlus className="text-2xl" />
                </div>
                <div className="flex items-center">
                  Adding
                  <span className="mx-1">
                    {adminToggle ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                </div>
              </div>
            )}
            {TeacherToggle && (
              <ul className="select-none text-sm flex flex-col">
                <Link to="/admin/upload-assignment" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Upload Assignment
                </Link>
                <Link to="/admin/recive-assignment" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Recive assignment
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Online Exam
                </Link>
                <Link to="/admin/class-schedule" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Class Schedule
                </Link>
                <Link to="/admin/upload-syllabus" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Syllabus and lesson plans.
                </Link>
                <Link to="/admin/attendance-tracking" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Attendance Tracking
                </Link>
                <Link to="/admin/upload-class-report" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Class reports.
                </Link>
                <Link to="" className="py-2 ml-10 transform cursor-pointer hover:text-gray-700">
                  Online Class
                </Link>
              </ul>
            )}
          </div>
          {role === 'teacher' && (
            <Link
              to="/admin/upload-result"
              className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
            >
              <div className="text-red-500 bg-red-200 p-2 rounded-full">
                <MdUpload className="text-2xl" />
              </div>
              <span>Upload Result</span>
            </Link>
          )}
          {role === 'admin' && (
            <Link
              to="/admin/all-student"
              className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
            >
              <div className="text-green-500 bg-green-200 p-2 rounded-full">
                <PiStudentFill className="text-2xl" />
              </div>
              <span>All Students</span>
            </Link>
          )}
          {role === 'admin'  && (
            <Link
              to={"/admin/all-parent"}
              className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
            >
              <div className="text-red-500 bg-red-200 p-2 rounded-full">
                <RiParentFill className="text-2xl" />
              </div>
              <span>All Parents</span>
            </Link>
          )}
          {role === 'admin'  && (
            <Link
              to="/admin/all-teacher"
              className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
            >
              <div className="text-yellow-500 bg-yellow-200 p-2 rounded-full">
                <FaChalkboardTeacher className="text-2xl" />
              </div>
              <span>All Teachers</span>
            </Link>
          )}
          <Link
            to="/admin/update-headline"
            className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10"
          >
            <div className="text-purple-500 bg-purple-200 p-2 rounded-full">
              <RxUpdate className="text-2xl" />
            </div>
            <span>Update Headline</span>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
