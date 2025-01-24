import React from "react";

const LiveClass = () => {
  const classLink = "https://meet.google.com/cwf-vzhg-xnh";
  return (
    <div>
      <p className="my-5 text-xl font-bold">Live Class</p>
      <p className="my-4 text-green-600">Live class currently available!</p>
      <div className="bg-white ring-1 rounded-md ring-gray-400 px-3 py-4">
        <div className="flex items-center space-x-3">
          <div>
            <a href={classLink} target="_blank">
              <p className="cursor-pointer px-3 py-2">{classLink}</p>{" "}
            </a>
          </div>
          <div>
            <a href={classLink} target="_blank">
              <button className="px-7 py-2 rounded-md bg-orange-500 text-[#fff] cursor-pointer hover:bg-orange-600 duration-200">
                Join
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveClass;
