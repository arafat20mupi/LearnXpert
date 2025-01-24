import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const OnlineClass = () => {
  const classes = [
    {
      title: "Class 1",
      lectures: [
        { title: "Lecture 1", link: "nfwZ7derrr4?si=Bg6EJr213PGeKIoE" },
        { title: "Lecture 2", link: "7fqxe09MD_A?si=sTEyTV7gngeZP7ts" },
        { title: "Lecture 3", link: "o2-pEfyQIwg?si=Tmgo4WKXAg5-oh_I" },
      ],
    },
    {
      title: "Class 2",
      lectures: [
        { title: "Lecture 1", link: "IFC9KEYCdbE?si=_BDIJHQKjLUeYlg8" },
        { title: "Lecture 2", link: "o2-pEfyQIwg?si=Tmgo4WKXAg5-oh_I" },
        { title: "Lecture 3", link: "nfwZ7derrr4?si=Bg6EJr213PGeKIoE" },
      ],
    },
  ];
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lecture, setLecture] = useState(classes[0].lectures[0].link);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="my-6 px-4">
      <h1 className="text-xl md:text-2xl font-semibold my-4">
        Class Title: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-5">
        <div className="flex justify-center w-full md:w-[60%]">
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${lecture}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full md:w-[40%] overflow-y-scroll h-[52vh] p-3 ring-2 ring-gray-300 rounded-md bg-white">
          <div className="mb-2">
            <div
              className="flex items-center gap-4 bg-white px-4 py-3 ring-1 ring-gray-300 rounded-md text-xl text-black cursor-pointer hover:bg-orange-50 duration-200"
              onClick={toggleDropdown}
            >
              {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              <span>Class 1</span>
            </div>
            <div
              className={`transition-all bg-white duration-500 ease-in-out overflow-hidden ${
                isDropdownOpen
                  ? "h-auto max-h-[500px] ring-1 rounded ring-gray-300"
                  : "max-h-0 ring-0"
              }`}
            >
              <ul className="space-y-3">
                {classes[0].lectures.map((lecture, index) => {
                  return (
                    <li
                      key={index}
                      className="hover:bg-orange-500 duration-300 px-5 py-2 rounded cursor-pointer"
                      onClick={() => setLecture(lecture.link)}
                    >
                      {lecture.title}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
