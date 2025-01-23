import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { GiRunningNinja } from "react-icons/gi";

const AllTeacher = () => {
  const axios = useAxiosPublic();
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("/api/teachers");
        setTeachers(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, [axios]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/teachers/${id}`);
      setTeachers(teachers.filter((teacher) => teacher.firebaseUid !== id));
      toast.success("Teacher deleted successfully!");
    } catch (err) {
      console.error(err);
    }
  };

  const filteredTeachers = teachers.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchText.toLowerCase())
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
    const userToUpdate = teachers.find(user => user._id === uid);
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
  console.log(teachers)
  return (
    <div className="my-3 pl-2">
      <h1 className="text-black text-xl mb-3">Add Teachers</h1>
      <form className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 my-3">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="text"
          placeholder="Search by name..."
        />
      </form>
      <h1 className="text-black text-xl mb-3">All Teachers</h1>
      <div className="flex justify-center overflow-x-auto ">
        <table className="w-full text-left border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-16 md:p-3 border border-gray-300">Name</th>
              <th className="px-16 md:p-3 border border-gray-300">Email</th>
              <th className="px-16 md:p-3 border border-gray-300">Phone</th>
              <th className="px-16 md:p-3 border border-gray-300">Address</th>
              <th className="px-16 md:p-3 border border-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTeachers.map((teacher) => (
              <tr key={teacher._id} className={`bg-white hover:bg-blue-50`}>
                <td className="p-3 border border-gray-300">{teacher.name}</td>
                <td className="p-3 border border-gray-300">{teacher.email}</td>
                <td className="p-3 border border-gray-300">{teacher.phone}</td>
                <td className="p-3 border border-gray-300">{teacher.address}</td>
                <td className="p-3 border border-gray-300">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleApprove(teacher._id)}
                      className="px-3 py-1 bg-green-400 text-black rounded-full">
                      Approve
                    </button>
                    <button className="px-3 py-1 bg-yellow-400 text-black rounded-full">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(teacher.firebaseUid)}
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

export default AllTeacher;
