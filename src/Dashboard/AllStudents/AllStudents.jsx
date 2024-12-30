import React from "react";

const AllStudents = () => {
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
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Add Students</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3">
      <select className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="number"
          placeholder="Search by Roll..."
        />
        <input
          className="w-full md:w-[unset] px-4 py-2 bg-orange-500 hover:bg-orange-600 duration-300 rounded-md text-white cursor-pointer"
          type="button"
          value="Search"
        />
      </div>
      <h1 className="text-black text-xl mb-3">All Students</h1>
      <div className="flex justify-center overflow-x-auto  md:h-[500px]">
        <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-16 md:p-3 border border-gray-300">Roll</th>
              <th className="px-16 md:p-3 border border-gray-300">Name</th>
              <th className="px-16 md:p-3 border border-gray-300">Phone</th>
              <th className="px-16 md:p-3 border border-gray-300">Address</th>
              <th className="px-16 md:p-3 border border-gray-300">Actions</th>
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
                    <button className="px-3 py-1 bg-yellow-400 text-black rounded-full">
                    Update
                    </button>
                    <button className="px-3 py-1 bg-red-600 text-white rounded-full">
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

export default AllStudents;
