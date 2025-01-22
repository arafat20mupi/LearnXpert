import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { SiTicktick } from "react-icons/si";

export const OnlineClass = () => {
    const [classOne, setClassOne] = useState(false);
    const [classTwo, setClassTwo] = useState(false);

    const toggleClassOne = () => {
        setClassOne(classOne => !classOne)
    }
    const toggleClassTwo = () => {
        setClassTwo(classTwo => !classTwo)
    }

    return (
        <div className="my-12 px-6 md:px-12">
            <h1 className="text-lg md:text-xl font-bold text-center md:text-left">
                <span className="text-orange-500">Class title:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h1>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start my-6 gap-5">
                <div className="w-full md:w-auto flex justify-center">
                    <iframe
                        className="w-full md:w-[560px] h-[250px] md:h-[315px]"
                        src="https://www.youtube.com/embed/nfwZ7derrr4?si=Bg6EJr213PGeKIoE"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="px-5 py-10 space-y-2 shadow-lg rounded-md bg-white ring-1 ring-gray-300 max-h-[400px] overflow-y-auto w-full md:w-[350px]">
                    <div
                        className="p-5 flex items-center gap-2 shadow ring-1 ring-gray-300 rounded-md bg-white cursor-pointer hover:bg-orange-50 duration-150 ease-in-out"
                        onClick={toggleClassOne}
                    >
                        <span>
                            <RiArrowDownSLine className="text-xl" />
                        </span>
                        <h1>Class 1</h1>
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out ${classOne ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                            }`}
                    >
                        <ul className="p-2 my-3 space-y-5">
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-green-600" /> lecture 1
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-gray-500" /> lecture 2
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-gray-500" /> lecture 3
                            </li>
                        </ul>
                    </div>

                    <div
                        className="p-5 flex items-center gap-2 shadow ring-1 ring-gray-300 rounded-md bg-white cursor-pointer hover:bg-orange-50 duration-150 ease-in-out"
                        onClick={toggleClassTwo}
                    >
                        <span>
                            <RiArrowDownSLine className="text-xl" />
                        </span>
                        <h1>Class 2</h1>
                    </div>
                    <div
                        className={`transition-all duration-300 ease-in-out ${classTwo ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                            }`}
                    >
                        <ul className="p-2 my-3 space-y-5">
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-green-600" /> lecture 1
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-gray-500" /> lecture 2
                            </li>
                            <li className="flex items-center gap-2 cursor-pointer hover:text-orange-400 duration-300">
                                <SiTicktick className="text-gray-500" /> lecture 3
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
