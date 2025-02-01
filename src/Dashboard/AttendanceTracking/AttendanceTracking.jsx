import { useState } from "react";

const AttendanceTracking = () => {
  const [selectClass, setselectClass] = useState("6");
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
      <select
        name=""
        id=""
        className="my-5 w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
        value={selectClass}
        onChange={(e) => setselectClass(e.target.value)}
      >
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
      </select>
      <h1 className="text-black text-xl mb-3">Attendance Tracking</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3"></div>
      <div className="flex justify-center overflow-x-auto  md:h-[500px]">
        {selectClass === "6" && (
          <>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">Date</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Attend
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>01/02/2025</div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "7" && (
          <>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">Date</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Attend
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>01/02/2025</div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "8" && (
          <>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">Date</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Attend
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>01/02/2025</div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "9" && (
          <>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">Date</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Attend
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>01/02/2025</div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <input type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
        {selectClass === "10" && (
          <>
            <table className="ml-[610px] md:ml-0 text-left w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-16 md:p-3 border border-gray-300">Roll</th>
                  <th className="px-16 md:p-3 border border-gray-300">Name</th>
                  <th className="px-16 md:p-3 border border-gray-300">Date</th>
                  <th className="px-16 md:p-3 border border-gray-300">
                    Attend
                  </th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.roll}
                    className={`bg-white hover:bg-blue-50`}
                  >
                    <td className="p-3 border border-gray-300">
                      {student.roll}
                    </td>
                    <td className="p-3 border border-gray-300">
                      {student.name}
                    </td>
                    <td className="p-3 border border-gray-300">
                      <div>01/02/2025</div>
                    </td>
                    <td className="p-3 border border-gray-300">
                      <input type="checkbox" name="" id="" />
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

export default AttendanceTracking;
