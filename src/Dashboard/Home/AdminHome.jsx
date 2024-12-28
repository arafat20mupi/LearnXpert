import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

const AdminHome = () => {
  const students = [
    { roll: 1, name: "Alice", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Bob", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Charlie", phone: "555-555-5555", address: "789 Pine Rd" },
    { roll: 4, name: "Diana", phone: "111-222-3333", address: "101 Maple Ln" },
    { roll: 1, name: "Alice", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Bob", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Charlie", phone: "555-555-5555", address: "789 Pine Rd" },
    { roll: 4, name: "Diana", phone: "111-222-3333", address: "101 Maple Ln" },
    { roll: 1, name: "Alice", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Bob", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Charlie", phone: "555-555-5555", address: "789 Pine Rd" },
    { roll: 4, name: "Diana", phone: "111-222-3333", address: "101 Maple Ln" },
    { roll: 1, name: "Alice", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Bob", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Charlie", phone: "555-555-5555", address: "789 Pine Rd" },
    { roll: 4, name: "Diana", phone: "111-222-3333", address: "101 Maple Ln" },
    { roll: 1, name: "Alice", phone: "123-456-7890", address: "123 Main St" },
    { roll: 2, name: "Bob", phone: "987-654-3210", address: "456 Oak Ave" },
    { roll: 3, name: "Charlie", phone: "555-555-5555", address: "789 Pine Rd" },
    { roll: 4, name: "Diana", phone: "111-222-3333", address: "101 Maple Ln" },
  ];

  return (
    <div className="my-3">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-5">
        <div className="px-5 py-2 md:py-4 rounded-md ring-1 ring-gray-300">
          <div className="my-2 flex flex-col md:flex-row md:justify-between space-y-1 md:space-y-0 md:items-center">
            <PiStudentFill className="text-4xl md:text-5xl text-green-500 bg-green-200 p-2 rounded-full" />
            <span className="text-xl md:text-3xl">742</span>
          </div>
          <span>Total Students</span>
        </div>
        <div className="px-5 py-2 md:py-4 rounded-md ring-1 ring-gray-300">
          <div className="my-2 flex flex-col md:flex-row md:justify-between space-y-1 md:space-y-0 md:items-center">
            <PiStudentFill className="text-4xl md:text-5xl text-red-500 bg-red-200 p-2 rounded-full" />
            <span className="text-xl md:text-3xl">598</span>
          </div>
          <span>Total Parent</span>
        </div>
        <div className="px-5 py-2 md:py-4 rounded-md ring-1 ring-gray-300">
          <div className="my-2 flex flex-col md:flex-row md:justify-between space-y-1 md:space-y-0 md:items-center">
            <FaChalkboardTeacher className="text-4xl md:text-5xl text-green-500 bg-green-200 p-2 rounded-full" />
            <span className="text-xl md:text-3xl">16</span>
          </div>
          <span>Total Teachers</span>
        </div>
        <div className="px-5 py-2 md:py-4 rounded-md ring-1 ring-gray-300">
          <div className="my-2 flex flex-col md:flex-row md:justify-between space-y-1 md:space-y-0 md:items-center">
            <RiMoneyDollarCircleFill className="text-4xl md:text-5xl text-pink-500 bg-pink-200 p-2 rounded-full" />
            <span className="text-xl md:text-3xl">43.2K</span>
          </div>
          <span>Earning</span>
        </div>
      </div>
      <div className="flex justify-center pt-5 pl-2 overflow-x-auto md:h-[500px] mt-5">
        <table className="ml-[400px] md:ml-0 text-left w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-10 md:p-3 border border-gray-300">Roll</th>
              <th className="px-10 md:p-3 border border-gray-300">Name</th>
              <th className="px-10 md:p-3 border border-gray-300">Phone</th>
              <th className="px-10 md:p-3 border border-gray-300">Address</th>
              <th className="px-10 md:p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.roll} className={`bg-white hover:bg-blue-50`}>
                <td className="p-3 border border-gray-300">{student.roll}</td>
                <td className="p-3 border border-gray-300">{student.name}</td>
                <td className="p-3 border border-gray-300">{student.phone}</td>
                <td className="p-3 border border-gray-300">
                  {student.address}
                </td>
                <td className="p-3 border border-gray-300">
                  <div className="flex items-center space-x-2">
                    <button className="px-3 py-1 bg-red-600 text-white rounded-full">
                      Delete
                    </button>
                    <button className="px-3 py-1 bg-yellow-400 text-black rounded-full">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminHome;
