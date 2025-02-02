/* eslint-disable react/prop-types */
import { useState } from "react";
import { SiGotomeeting } from "react-icons/si";
import { ImProfile } from "react-icons/im";

import {
  FaAngleDown,
  FaAngleUp,
  FaChalkboardTeacher,
  FaPlus,
  FaUpload,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import { MdOutlineOnlinePrediction, MdUpload } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { PiStudentFill } from "react-icons/pi";
import { RiParentFill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import useRole from "../../Hooks/useRole";
import { GiRunningNinja } from "react-icons/gi";
import { AiTwotoneSchedule } from "react-icons/ai";

const Sidebar = ({ open }) => {
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
    return (
      <div className="flex w-full items-center justify-center pt-20">
        <GiRunningNinja className="text-[2.8rem] animate-bounce h-16 w-16 md:h-36 md:w-36 text-green-500" />
      </div>
    );
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div
        className={`overflow-y-scroll fixed top-20 left-0  h-screen pb-20 w-[200px] md:w-[270px] bg-white shadow-lg shadow-gray-200  transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col space-y-2">
          <li className="flex items-center space-x-2 py-2 px-10 ml-auto"></li>
          <li className="text-center">
            {role === "admin" && "Admin Pannel"}
            {role === "student" && "Student Pannel"}
            {role === "parent" && "Parent Pannel"}
            {role === "teacher" && "Teacher Pannel"}
          </li>

          {/* for admin */}

          <div className="flex flex-col">
            {role === "admin" && (
              <div>
                <Link
                  to="/"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-blue-500 bg-blue-200 p-2 rounded-full">
                    <IoMdHome className="text-2xl" />
                  </div>
                  <span>Home</span>
                </Link>
                <Link
                  to="/deshboard/admission"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-slate-500 bg-slate-200 p-2 rounded-full">
                    <HiAcademicCap className="text-2xl" />
                  </div>
                  <span>Admission</span>
                </Link>
                <div
                  onClick={handleAdmin}
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300 cursor-pointer"
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
                {adminToggle && (
                  <ul className="select-none text-sm flex flex-col">
                    <Link
                      to="/deshboard/handle-fees"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Handle Fee&apos;s
                    </Link>
                    <Link
                      to=""
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Event Management
                    </Link>
                    <Link
                      to="/deshboard/online-meeting"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Online Meeting
                    </Link>
                  </ul>
                )}
                <Link
                  to="/deshboard/allUsers"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-red-500 bg-red-200 p-2 rounded-full">
                    <RiParentFill className="text-2xl" />
                  </div>
                  <span>All Users</span>
                </Link>
                <Link
                  to={"/deshboard/all-parent"}
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-red-500 bg-red-200 p-2 rounded-full">
                    <RiParentFill className="text-2xl" />
                  </div>
                  <span>All Parents</span>
                </Link>
                <Link
                  to="/deshboard/all-teacher"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-yellow-500 bg-yellow-200 p-2 rounded-full">
                    <FaChalkboardTeacher className="text-2xl" />
                  </div>
                  <span>All Teachers</span>
                </Link>
                <Link
                  to="/deshboard/all-student"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-green-500 bg-green-200 p-2 rounded-full">
                    <PiStudentFill className="text-2xl" />
                  </div>
                  <span>All Students</span>
                </Link>
                <Link
                  to="/deshboard/update-headline"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-purple-500 bg-purple-200 p-2 rounded-full">
                    <RxUpdate className="text-2xl" />
                  </div>
                  <span>Update Headline</span>
                </Link>
              </div>
            )}
          </div>

          {/* for Teacher */}
          <div className="flex flex-col">
            {role === "teacher" && (
              <div>
                <div
                  onClick={handleTeacher}
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300 cursor-pointer"
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

                {TeacherToggle && (
                  <ul className="select-none text-sm flex flex-col">
                    <Link
                      to="/deshboard/upload-assignment"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Upload Assignment
                    </Link>
                    <Link
                      to="/deshboard/recive-assignment"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Recive assignment
                    </Link>
                    <Link
                      to=""
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Online Exam
                    </Link>
                    <Link
                      to="/deshboard/upload-syllabus"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Syllabus and lesson plans.
                    </Link>
                    <Link
                      to="/deshboard/attendance-tracking"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Attendance Tracking
                    </Link>
                    <Link
                      to="/deshboard/upload-class-report"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700 "
                    >
                      Class reports.
                    </Link>
                    <Link
                      to="/deshboard/live-class"
                      className="py-2 ml-10 transform cursor-pointer hover:text-gray-700"
                    >
                      Live Class
                    </Link>
                  </ul>
                )}
                <Link
                  to="/deshboard/upload-recorded-class"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-red-500 bg-red-200 p-2 rounded-full">
                    <MdUpload className="text-2xl" />
                  </div>
                  <span>Upload reorded class</span>
                </Link>
                <Link
                  to="/deshboard/upload-result"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-blue-500 bg-blue-200 p-2 rounded-full">
                    <MdUpload className="text-2xl" />
                  </div>
                  <span>Upload Result</span>
                </Link>
              </div>
            )}
          </div>

          {/* for Student */}
          <div className="flex flex-col">
            {role === "student" && (
              <div>
                <Link
                  to="/"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-blue-500 bg-blue-200 p-2 rounded-full">
                    <IoMdHome className="text-2xl" />
                  </div>
                  <span>Home</span>
                </Link>
                <Link
                  to="/deshboard/profile"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-green-500 bg-green-200 p-2 rounded-full">
                    <ImProfile className="text-2xl" />
                  </div>
                  <span>Profile</span>
                </Link>
                <Link
                  to="/deshboard/class-routine"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-green-500 bg-green-200 p-2 rounded-full">
                    <PiStudentFill className="text-2xl" />
                  </div>
                  <span>Class Routine</span>
                </Link>
                <Link
                  to="/deshboard/upload-assignment-for-student"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-red-500 bg-red-200 p-2 rounded-full">
                    <FaUpload className="text-xl" />
                  </div>
                  <span>Upload Assignment</span>
                </Link>
                <Link
                  to="/deshboard/class-schedule"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-red-500 bg-red-200 p-2 rounded-full">
                    <AiTwotoneSchedule className="text-xl" />
                  </div>
                  <span>Class Schedule</span>
                </Link>
                <Link
                  to="/deshboard/online-class"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-purple-500 bg-purple-200 p-2 rounded-full">
                    <MdOutlineOnlinePrediction className="text-xl" />
                  </div>
                  <span>Online class</span>
                </Link>
                <Link
                  to="/deshboard/live-class"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-pink-500 bg-pink-200 p-2 rounded-full">
                    <MdOutlineOnlinePrediction className="text-xl" />
                  </div>
                  <span>Live class</span>
                </Link>
              </div>
            )}
          </div>

          {/* for pre */}
          <div className="flex flex-col">
            {role === "parent" && (
              <div>
                <Link
                  to="/deshboard/online-meeting"
                  className="flex items-center space-x-2 hover:bg-orange-300 py-2 px-10 duration-300"
                >
                  <div className="text-green-500 bg-green-200 p-2 rounded-full">
                    <SiGotomeeting className="text-2xl" />
                  </div>
                  <span>Online meeting</span>
                </Link>
              </div>
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
