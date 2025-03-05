import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { toast } from 'react-hot-toast';

const UploadResult = () => {
  const [selectClass, setselectClass] = useState("6");
  const [students, setStudents] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const axios = useAxiosPublic();
const [selectedStudent , setSelectedStudent] = useState([]);


  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get(`/api/students/${selectClass}`);
        if (response.status === 200) {
          setStudents(response.data);
          console.log(response.data);
        } else {
          setStudents([]);
        }
      } catch (error) {
        setStudents([]);
        console.error(error);
      }
    };
    fetchStudents();
  }, [axios, selectClass]);

  console.log(students);

  const onSubmit = async (data, student) => {
    console.log(data);
    console.log(student);
    data.studentId = student.firebaseUid;
    data.name = student.name;
    data.className = selectClass;
    data.rollNo = student.rollNo;
    data.marks = [
      { subject: "bangla", mark: data.bangla },
      { subject: "english", mark: data.english },
      { subject: "math", mark: data.math },
      { subject: "science", mark: data.science },
      { subject: "history", mark: data.history },
      { subject: "biology", mark: data.biology },
      { subject: "physics", mark: data.physics },
      { subject: "chemistry", mark: data.chemistry }
    ].filter(mark => mark.mark !== undefined);
    try {
      const response = await axios.post('/api/post-result', data);
      if (response.status === 200) {
        toast.success('Marks uploaded successfully');
        reset();
      } else {
        toast.error('Error uploading marks');
      }
    } catch (error) {
      toast.error('Error uploading marks', error.message);
    }
  };

  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Upload Marks</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 my-3">
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
      <div className="flex flex-col space-y-10 justify-center overflow-x-auto">
        <dialog id="my_modal" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit((data) => onSubmit(data, selectedStudent))}>
              <div className="flex flex-col mt-6 space-y-5">
                <h1 className="text-black text-xl font-bold">
                  Upload Mark for Class {selectClass}
                </h1>
                <div className="w-full flex items-center space-x-8">
                  <label htmlFor="bangla" className="text-black">
                    Bangla
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Subject mark"
                    className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                    {...register("bangla")}
                  />
                </div>
                <div className="w-full flex items-center space-x-8">
                  <label htmlFor="english" className="text-black">
                    English
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Subject mark"
                    className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                    {...register("english")}
                  />
                </div>
                <div className="w-full flex items-center space-x-8">
                  <label htmlFor="math" className="text-black">
                    Math
                  </label>
                  <input
                    type="number"
                    placeholder="Enter Subject mark"
                    className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                    {...register("math")}
                  />
                </div>
                {selectClass >= 7 && (
                  <div className="w-full flex items-center space-x-8">
                    <label htmlFor="science" className="text-black">
                      Science
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Subject mark"
                      className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      {...register("science")}
                    />
                  </div>
                )}
                {selectClass >= 8 && (
                  <div className="w-full flex items-center space-x-8">
                    <label htmlFor="history" className="text-black">
                      History
                    </label>
                    <input
                      type="number"
                      placeholder="Enter Subject mark"
                      className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                      {...register("history")}
                    />
                  </div>
                )}
                {selectClass >= 9 && (
                  <>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="biology" className="text-black">
                        Biology
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        {...register("biology")}
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="physics" className="text-black">
                        Physics
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        {...register("physics")}
                      />
                    </div>
                    <div className="w-full flex items-center space-x-8">
                      <label htmlFor="chemistry" className="text-black">
                        Chemistry
                      </label>
                      <input
                        type="number"
                        placeholder="Enter Subject mark"
                        className="w-full px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
                        {...register("chemistry")}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <button method="dialog" type="submit" className="px-4 my-4 py-2 bg-blue-500 hover:bg-blue-700 duration-200 text-white rounded-full">
                  Upload
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
              <th className="px-16 md:p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.roll} className={`bg-white hover:bg-blue-50`}>
                <td className="p-3 border border-gray-300">{student.rollNo}</td>
                <td className="p-3 border border-gray-300">{student.firebaseUid}</td>
                <td className="p-3 border border-gray-300">{student.name}</td>
                <td className="p-3 border border-gray-300">
                  <div>
                    <button
                      onClick={() => {
                        document.getElementById("my_modal").showModal();
                        setSelectedStudent(student);
                      }}
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
      </div>
    </div>
  );
};

export default UploadResult;