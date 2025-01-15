import React, { useState } from "react";
import { FaPlus, FaX } from "react-icons/fa6";

const UploadResult = () => {
  const [isOthers, setisOthers] = useState(false);
  const [selectClass, setselectClass] = useState("6");
  const class_6 = [
    { roll: 1, name: "Emma", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Liam", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Olivia", phone: "555-555-5555", address: "789 Pine Rd" },
  ];

  const class_7 = [
    { roll: 1, name: "Sophia", phone: "321-654-0987", address: "234 Elm St" },
    { roll: 2, name: "Noah", phone: "876-543-2109", address: "567 Maple Ave" },
    { roll: 3, name: "Ava", phone: "444-444-4444", address: "890 Cedar Rd" },
  ];

  const class_8 = [
    {
      roll: 1,
      name: "Isabella",
      phone: "111-222-3333",
      address: "345 Birch St",
    },
    {
      roll: 2,
      name: "Ethan",
      phone: "999-888-7777",
      address: "678 Spruce Ave",
    },
    { roll: 3, name: "Mia", phone: "333-222-1111", address: "901 Willow Rd" },
  ];

  const class_9 = [
    {
      roll: 1,
      name: "Charlotte",
      phone: "444-555-6666",
      address: "456 Aspen St",
    },
    {
      roll: 2,
      name: "James",
      phone: "888-777-6666",
      address: "789 Redwood Ave",
    },
    {
      roll: 3,
      name: "Amelia",
      phone: "222-333-4444",
      address: "123 Cypress Rd",
    },
  ];

  const class_10 = [
    {
      roll: 1,
      name: "Harper",
      phone: "555-666-7777",
      address: "567 Sequoia St",
    },
    {
      roll: 2,
      name: "Lucas",
      phone: "777-888-9999",
      address: "890 Mahogany Ave",
    },
    { roll: 3, name: "Evelyn", phone: "111-444-3333", address: "234 Palm Rd" },
  ];

  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Upload Marks</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3">
        <select
          name=""
          id=""
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          value={selectClass}
          onChange={(e) => setselectClass(e.target.value)}
        >
          <option value="6">Class 6</option>
          <option value="7">Class 7</option>
          <option value="8">Class 8</option>
          <option value="9">Class 9</option>
          <option value="10">Class 10</option>
        </select>
      </div>
      <div className="flex flex-col space-y-10 justify-center overflow-x-auto  md:h-[500px]">
        {selectClass === "6" && (
          <>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <div className="flex flex-col mt-6 space-y-5">
                    <h1 className="text-black text-xl font-bold">
                      Upload Mark for Class 6
                    </h1>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Bangla
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        English
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Math
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    {isOthers && (
                      <div className="w-full flex items-center space-x-8">
                        <label htmlFor="subject_name" className="text-black">
                          Others
                        </label>
                        <input
                          type="number"
                          placeholder="Enter Subject mark"
                          className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <button className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                      Upload
                    </button>
                    <button
                      onClick={() => setisOthers((prevState) => !prevState)}
                      type="button"
                      className="bg-orange-400 text-white p-2 rounded-full"
                    >
                      {isOthers ? <FaX /> : <FaPlus />}
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">ID</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {class_6.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {"ertggfderty65edf_w"}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_1").showModal()
                          }
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "7" && (
          <>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <div className="flex flex-col mt-6 space-y-5">
                    <h1 className="text-black text-xl font-bold">
                      Upload Mark for Class 7
                    </h1>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Bangla
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        English
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Math
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Science
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    {isOthers && (
                      <div className="w-full flex items-center space-x-8">
                        <label htmlFor="subject_name" className="text-black">
                          Others
                        </label>
                        <input
                          type="number"
                          placeholder="Enter Subject mark"
                          className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <button className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                      Upload
                    </button>
                    <button
                      onClick={() => setisOthers((prevState) => !prevState)}
                      type="button"
                      className="bg-orange-400 text-white p-2 rounded-full"
                    >
                      {isOthers ? <FaX /> : <FaPlus />}
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">ID</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {class_7.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {"ertggfderty65edf_w"}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_2").showModal()
                          }
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "8" && (
          <>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <div className="flex flex-col mt-6 space-y-5">
                    <h1 className="text-black text-xl font-bold">
                      Upload Mark for Class 8
                    </h1>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Bangla
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        English
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Math
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Science
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        History
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    {isOthers && (
                      <div className="w-full flex items-center space-x-8">
                        <label htmlFor="subject_name" className="text-black">
                          Others
                        </label>
                        <input
                          type="number"
                          placeholder="Enter Subject mark"
                          className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <button className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                      Upload
                    </button>
                    <button
                      onClick={() => setisOthers((prevState) => !prevState)}
                      type="button"
                      className="bg-orange-400 text-white p-2 rounded-full"
                    >
                      {isOthers ? <FaX /> : <FaPlus />}
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">ID</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {class_8.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {"ertggfderty65edf_w"}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_3").showModal()
                          }
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "9" && (
          <>
            <dialog id="my_modal_4" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <div className="flex flex-col mt-6 space-y-5">
                    <h1 className="text-black text-xl font-bold">
                      Upload Mark for Class 9
                    </h1>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Bangla
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        English
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Math
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Science
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        History
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Biology
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Physics
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Chemistry
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    {isOthers && (
                      <div className="w-full flex items-center space-x-8">
                        <label htmlFor="subject_name" className="text-black">
                          Others
                        </label>
                        <input
                          type="number"
                          placeholder="Enter Subject mark"
                          className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <button className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                      Upload
                    </button>
                    <button
                      onClick={() => setisOthers((prevState) => !prevState)}
                      type="button"
                      className="bg-orange-400 text-white p-2 rounded-full"
                    >
                      {isOthers ? <FaX /> : <FaPlus />}
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">ID</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {class_9.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {"ertggfderty65edf_w"}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_4").showModal()
                          }
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "10" && (
          <>
            <dialog id="my_modal_5" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <div className="flex flex-col mt-6 space-y-5">
                    <h1 className="text-black text-xl font-bold">
                      Upload Mark for Class 10
                    </h1>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Bangla
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        English
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Math
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Science
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        History
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Biology
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Physics
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="subject_name" className="text-black">
                        Chemistry
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      />
                    </div>
                    {isOthers && (
                      <div className="w-full flex items-center space-x-8">
                        <label htmlFor="subject_name" className="text-black">
                          Others
                        </label>
                        <input
                          type="number"
                          placeholder="Enter Subject mark"
                          className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                    <button className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                      Upload
                    </button>
                    <button
                      onClick={() => setisOthers((prevState) => !prevState)}
                      type="button"
                      className="bg-orange-400 text-white p-2 rounded-full"
                    >
                      {isOthers ? <FaX /> : <FaPlus />}
                    </button>
                  </div>
                </form>
              </div>
            </dialog>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">ID</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {class_10.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {"ertggfderty65edf_w"}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>
                        <button
                          onClick={() =>
                            document.getElementById("my_modal_5").showModal()
                          }
                          className="px-3 py-1 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full"
                        >
                          Upload
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </div>
  );
};

export default UploadResult;