import { FaCloudUploadAlt } from 'react-icons/fa'

const UploadAssignmentForStudent = () => {
  return (
    <div className='my-10'>
      <h1 className='text-xl font-bold'>Upload Assignment for Student</h1>
      <select
        name=""
        id=""
        className="w-full my-3 md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
      >
        <option value="6">Class 6</option>
        <option value="7">Class 7</option>
        <option value="8">Class 8</option>
        <option value="9">Class 9</option>
        <option value="10">Class 10</option>
      </select>
      <form className="bg-white p-6 rounded-lg shadow-lg">
        <label
          htmlFor="fileInput"
          className="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-red-500 rounded-lg cursor-pointer hover:bg-red-50 transition"
        >
          <FaCloudUploadAlt className="w-12 h-12 text-red-500" />
          <h1 className="text-sm text-red-500 mt-2">Click to upload</h1>
          <h1 className="text-xs text-gray-500">PDF only (max. 10MB)</h1>
          <input type="file" id="fileInput" className="hidden" />
        </label>
      </form>
      <h1 className='text-xl my-3 font-bold'>My recent Upload</h1>
      <h2 className="text-2xl text-red-600">Sending Info</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 border border-slate-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                sender Name
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                file name
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                Staus
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 border border-slate-500 font-medium text-gray-900 whitespace-nowrap">
                Nirob
              </th>
              <td className="px-6 py-4 border border-slate-500">
                assignment.pdf
              </td>
              <td className="px-6 py-4 border border-slate-500">
                <span className='text-white bg-green-500 py-2 px-4 rounded-lg'>received</span>

              </td>
              <td className="px-6 py-4 border border-slate-500">
                24 days ago..
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 border border-slate-500 font-medium text-gray-900 whitespace-nowrap">
              Nirob
              </th>
              <td className="px-6 py-4 border border-slate-500">
                file.pdf
              </td>
              <td className="px-6 py-4 border border-slate-500">
              <span className='text-white bg-red-500 py-2 px-4 rounded-lg'>rejected</span>
              </td>
              <td className="px-6 py-4 border border-slate-500">
                2 months ago..
              </td>
            </tr>
            <tr className="bg-white">
              <th scope="row" className="px-6 py-4 border border-slate-500 font-medium text-gray-900 whitespace-nowrap">
              Nirob
              </th>
              <td className="px-6 py-4 border border-slate-500">
                file.pdf
              </td>
              <td className="px-6 py-4 border border-slate-500">
              <span className='text-white bg-green-500 py-2 px-4 rounded-lg'>received</span>
              </td>
              <td className="px-6 py-4 border border-slate-500">
                9 months ago..
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UploadAssignmentForStudent