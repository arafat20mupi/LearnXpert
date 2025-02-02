import { useState } from "react";

const HandleFees = () => {
  const [selectedClass, setSelectedClass] = useState("6");
  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Add Students</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3">
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
        >
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="text"
          placeholder="Search by name..."
        />
      </div>

      <h1 className="text-black text-xl mb-3">All Students</h1>
      <div className="flex justify-center overflow-x-auto">
        <div className="w-full overflow-y-auto">
          <table className="w-full text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-16 md:p-3 border border-gray-300">Name</th>
                <th className="px-16 md:p-3 border border-gray-300">Email</th>
                <th className="px-16 md:p-3 border border-gray-300">Phone</th>
                <th className="px-16 md:p-3 border border-gray-300">Address</th>
                <th className="px-16 md:p-3 border border-gray-300">
                  Ammount
                </th>
                <th className="px-16 md:p-3 border border-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              <td className="p-3 border border-gray-300">Abdullah</td>
              <td className="p-3 border border-gray-300">abdullah@gmail.com</td>
              <td className="p-3 border border-gray-300">01xxxxxxxx</td>
              <td className="p-3 border border-gray-300">
                Nasaratpur, adamdighi, Bogura
              </td>
              <td className="p-3 border border-gray-300">
                <input
                  type="text"
                  placeholder="Enter ammount"
                  className="w-full md:w-[200px] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                />
              </td>
              <td>
                <button className="px-5 py-2 rounded-full bg-green-500 hover:bg-green-600 duration-200 text-white mx-5">
                    Send
                </button>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HandleFees;
