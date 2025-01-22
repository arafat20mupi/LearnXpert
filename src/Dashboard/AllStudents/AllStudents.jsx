import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { GiRunningNinja } from "react-icons/gi";

const AllStudents = () => {
  const axios = useAxiosPublic();
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [selectedClass, setSelectedClass] = useState({});

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/api/students");
        setStudents(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch students");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [axios]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      setStudents(students.filter((student) => student._id !== id));
      toast.success("Student deleted successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to delete student");
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchText.toLowerCase())
  );

  if (loading) {
    return (
      <div className="flex w-full items-center justify-center pt-20">
        <GiRunningNinja className="text-[2.8rem] animate-bounce h-16 w-16 md:h-36 md:w-36 text-green-500" />
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  const handleApprove = async (uid) => {
    const userToUpdate = students.find(user => user._id === uid);
    if (userToUpdate) {
      try {
        await axios.put(`/api/role`, { email: userToUpdate.email, role: userToUpdate.role });
        Swal.fire('Updated!', 'User has been Approved');
      } catch (err) {
        setError('Failed to update user');
        console.error(err);
      }
    }
  };

  const handleUpdateClass = async (id) => {
    const className = selectedClass[id];
    if (className) {
      const userToUpdate = students.find(user => user._id === id);
      if (userToUpdate) {
        try {
          await axios.put(`/api/students/${id}`, { className });
          Swal.fire('Updated!', 'User has been Updated');
          setStudents(students.map(student => student._id === id ? { ...student, className } : student));
        } catch (err) {
          setError('Failed to update user');
          console.error(err);
        }
      }
    }
  };

  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Add Students</h1>
      <div className="flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3  my-3">
        <select
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0">
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="text"
          placeholder="Search by name..."
        />
      </div>

      <h1 className="text-black text-xl mb-3">All Students</h1>
      <div className="flex justify-center overflow-x-auto ">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-16 md:p-3 border border-gray-300">Name</th>
              <th className="px-16 md:p-3 border border-gray-300">Email</th>
              <th className="px-16 md:p-3 border border-gray-300">Phone</th>
              <th className="px-16 md:p-3 border border-gray-300">Class Name</th>
              <th className="px-16 md:p-3 border border-gray-300">Address</th>
              <th className="px-16 md:p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student._id} className={`bg-white hover:bg-blue-50`}>
                <td className="p-3 border border-gray-300">{student.name}</td>
                <td className="p-3 border border-gray-300">{student.email}</td>
                <td className="p-3 border border-gray-300">{student.phone}</td>
                <td className="p-3 border border-gray-300">
                  <select
                    value={selectedClass[student._id] || student.className}
                    onChange={(e) => setSelectedClass({ ...selectedClass, [student._id]: e.target.value })}
                    className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0">
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </td>
                <td className="p-3 border border-gray-300">{student.address}</td>
                <td className="p-3 border border-gray-300">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleApprove(student._id)}
                      className="px-3 py-1 bg-green-400 text-black rounded-full">
                      Approve
                    </button>
                    <button onClick={() => handleUpdateClass(student._id)} className="px-3 py-1 bg-yellow-400 text-black rounded-full">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(student._id)}
                      className="px-3 py-1 bg-red-600 text-white rounded-full"
                    >
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
