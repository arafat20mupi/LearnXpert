const Result = () => {
  const information = [
    { subject: "Bangla", marks: 94, grade: "A+" },
    { subject: "English", marks: 92, grade: "A+" },
    { subject: "Math", marks: 80, grade: "A+" },
    { subject: "History", marks: 96, grade: "A+" },
  ];

  return (
    <div className="pb-5 pt-24 w-full min-h-screen bg-white px-2">
      <div className="container mx-auto border border-gray-300 rounded-lg p-4 shadow-lg bg-white py-10">
        <div className="flex flex-col pb-5 border-b">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <select className="w-full md:w-[unset] border border-gray-300 outline-none text-sm p-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 transition">
              <option value="">Class 6</option>
              <option value="">Class 7</option>
              <option value="">Class 8</option>
              <option value="">Class 9</option>
              <option value="">Class 10</option>
            </select>
            <input
              type="text"
              placeholder="Search by roll no..."
              className="border border-gray-300 outline-none text-sm pl-5 pr-32 py-2 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400 transition w-full md:w-auto"
            />
            <button className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-8 py-2 text-sm rounded-md shadow-md hover:opacity-90 transition flex items-center w-full md:w-auto justify-center">
              <span>Search</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-4 h-4 ml-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col md:flex-row justify-around pt-6 text-gray-700">
            <span className="text-lg font-medium text-center md:text-left">
              Roll No : <span className="text-blue-600">199453</span>
            </span>
            <span className="text-lg font-medium text-center md:text-left">
              ST Name : <span className="text-blue-600">Abdullah Al Nirob</span>
            </span>
          </div>
        </div>
        <div className="flex justify-center pt-5 pl-2 overflow-x-auto">
          <table className="table-auto w-full md:w-2/3 text-left border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 border border-gray-300">Subject</th>
                <th className="p-3 border border-gray-300">Marks</th>
                <th className="p-3 border border-gray-300">Grade</th>
              </tr>
            </thead>
            <tbody>
              {
                information.map((item, index) => (

                  <tr key={index} className={`bg-white hover:bg-blue-50`}>
                    <td className="p-3 border border-gray-300">{item.subject}</td>
                    <td className="p-3 border border-gray-300">{item.marks}</td>
                    <td className="p-3 border border-gray-300">

                      <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        {item.grade}

                      </span>
                    </td>
                  </tr>
                ))}
              <tr className="bg-gray-100">
                <td colSpan="2" className="p-3 text-right font-bold">
                  Overall Grade:
                </td>

                <td className="p-3">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm">
                    4.78
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default Result;
