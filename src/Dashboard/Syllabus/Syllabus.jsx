import { FaCloudUploadAlt } from 'react-icons/fa';

const Syllabus = () => {
    return (

        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-center text-3xl font-bold my-5">Upload Syllabus </h1>
            <form className="bg-white p-6 rounded-lg shadow-lg">
                <label
                    htmlFor="fileInput"
                    className="flex flex-col items-center justify-center w-64 h-40 border-2 border-dashed border-orange-500 rounded-lg cursor-pointer hover:bg-orange-50 transition"
                >
                    <FaCloudUploadAlt className="w-12 h-12 text-orange-500" />
                    <h1 className="text-sm text-blue-500 mt-2">Click to upload</h1>
                    <h1 className="text-xs text-gray-500">PDF only (max. 10MB)</h1>
                    <input type="file" id="fileInput" className="hidden" />
                </label>
            </form>
        </div>
    );
}

export default Syllabus