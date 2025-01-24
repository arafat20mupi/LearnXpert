import React, { useState } from "react";

const UploadReacordedClass = () => {
  const [className, setClassName] = useState("");
  const [lectureName, setLecturename] = useState("");
  const submit = () => {
    console.log({ className, lectureName });
  };
  return (
    <div>
      <h1 className="my-5 text-xl font-bold">Upload Reacorded Class</h1>
      <div>
        <form
          action=""
          className="px-5 space-y-2 rounded-md py-3 max-w-[500px] ring-1 ring-gray-500 bg-white shadow-md"
        >
          <h1 className="my-3 text-black text-xl text-center">Upload</h1>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Enter Class title</label>
            <input
              value={className}
              onChange={(e)=>setClassName(e.target.value)}
              type="text"
              className="px-4 py-2 focus:ring-2 focus:ring-orange-500 duration-300 ring-1 outline-0 ring-gray-500 rounded-md "
              placeholder="Enter Class title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Enter Lecture title</label>
            <input
              value={lectureName}
              onChange={(e)=>setLecturename(e.target.value)}
              type="text"
              className="px-4 py-2 focus:ring-2 focus:ring-orange-500 duration-300 ring-1 outline-0 ring-gray-500 rounded-md "
              placeholder="Enter Lecture title"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Select video</label>
            <input type="file" />
            <input
              onClick={submit}
              type="button"
              value="Upload"
              className="px-3 py-2 rounded-md bg-orange-500 text-[#fff] mt-4 cursor-pointer hover:bg-orange-600 duration-200"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadReacordedClass;
