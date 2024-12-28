import React from "react";

const UploadResult = () => {
    return (
        <div className="flex h-[80vh] flex-col items-center justify-center">
           msg : (for Teacher)
      <form
        action=""
        className="px-10 max-w-3xl md:px-14 py-3 rounded-md ring-1 ring-gray-300 shadow-md"
      >
        <h1 className="my-5 text-3xl font-bold">Upload Result</h1>
        <div className="flex items-start flex-col my-3">
          <label htmlFor="">Enter Class</label>
          <select
            className="px-3 py-2 w-full ring-1 rounded-md duration-300 ring-gray-800 outline-0 focus:ring-2 focus:ring-blue-500"
          >
           <option value="6">Class 6</option>
           <option value="7">Class 7</option>
           <option value="8">Class 8</option>
           <option value="9">Class 9</option>
           <option value="10">Class 10</option>
          </select>
        </div>
        <div className="flex items-start flex-col my-3">
          <label htmlFor="">Enter Subject</label>
          <input
            className="px-3 py-2 w-full ring-1 rounded-md duration-300 ring-gray-800 outline-0 focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Enter the subject name.."
          />
        </div>
        <div className="flex items-start flex-col my-3">
          <label htmlFor="">Enter Marks</label>
          <input
            className="px-3 py-2 w-full ring-1 rounded-md duration-300 ring-gray-800 outline-0 focus:ring-2 focus:ring-blue-500"
            type="number"
            placeholder="Enter marks.."
          />
        </div>
        <div className="flex items-start flex-col my-3">
          <input
            className="bg-orange-500 hover:bg-orange-600 cursor-pointer duration-300 w-full px-5 py-2 rounded-md text-white"
            type="button"
            value={"Upload"}
            placeholder="Enter the class.."
          />
        </div>
      </form>
    </div>
  );
};

export default UploadResult;
