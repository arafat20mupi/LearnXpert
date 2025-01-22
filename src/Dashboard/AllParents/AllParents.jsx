import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import { GiRunningNinja } from "react-icons/gi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllParents = () => {
  const axios = useAxiosPublic();
  const [parents, setParents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState(null);
  const [selectedParent, setSelectedParent] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get("/api/parents");
        setParents(response.data);
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
      await axios.delete(`/api/parents/${id}`);
      setParents(parents.filter((teacher) => teacher.firebaseUid !== id));
      toast.success("Parents deleted successfully!");
    } catch (err) {
      console.error(err);
    }
  };
console.log(selectedParent)
  const handleUpdate = async (updatedParent) => {
    try {
      await axios.put(`/api/parents/${updatedParent._id}`, {
        ...updatedParent,
        childrenName: updatedParent.childrenName,
        childrenRole: updatedParent.childrenRole,
        childrenClass: updatedParent.childrenClass
      });
      setParents(parents.map(parent => parent._id === updatedParent._id ? updatedParent : parent));
      toast.success("Parents updated successfully!");
    } catch (err) {
      console.error(err);
    }
  }

  const handleUpdateClick = (parent) => {
    setSelectedParent(parent);
    Swal.fire({
      title: 'Update Parent Details',
      html: `
        <input id="name" class="swal2-input" placeholder="Name" value="${parent.name}">
        <input id="email" class="swal2-input" placeholder="Email" value="${parent.email}">
        <input id="phone" class="swal2-input" placeholder="Phone" value="${parent.phone}">
        <input id="address" class="swal2-input" placeholder="Address" value="${parent.address}">
        <input id="childrenName" class="swal2-input" placeholder="Children Name" value="${parent.childrenName.join(', ')}">
        <input id="childrenRole" class="swal2-input" placeholder="Children Role" value="${parent.childrenRole}">
        <input id="childrenClass" class="swal2-input" placeholder="Children Class" value="${parent.childrenClass}">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return {
          name: document.getElementById('name').value,
          email: document.getElementById('email').value,
          phone: document.getElementById('phone').value,
          address: document.getElementById('address').value,
          childrenName: document.getElementById('childrenName').value.split(',').map(name => name.trim()),
          childrenRole: document.getElementById('childrenRole').value,
          childrenClass: document.getElementById('childrenClass').value
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleUpdate({ ...parent, ...result.value });
      }
    });
  }

  const filteredParents = parents.filter((teacher) =>
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
    const userToUpdate = parents.find(user => user._id === uid);
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
  console.log(parents)
  return (
    <div className="my-3 pl-2">
      <form className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-3 my-3">
        <input
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full md:w-[unset] px-4 py-2 rounded-md ring-gray-300 ring-1 focus:ring-2 focus:ring-blue-500 duration-300 outline-0"
          type="text"
          placeholder="Search by name..."
        />
      </form>
      <h1 className="text-black text-xl mb-3">All Parents</h1>
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
            {filteredParents.map((parents) => (
              <tr key={parents._id} className={`bg-white hover:bg-blue-50`}>
                <td className="p-3 border border-gray-300">{parents.name}</td>
                <td className="p-3 border border-gray-300">{parents.email}</td>
                <td className="p-3 border border-gray-300">{parents.phone}</td>
                <td className="p-3 border border-gray-300">{parents.address}</td>
                <td className="p-3 border border-gray-300">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleApprove(parents._id)}
                      className="px-3 py-1 bg-green-400 text-black rounded-full">
                      Approve
                    </button>
                    <button 
                      onClick={() => handleUpdateClick(parents)}
                      className="px-3 py-1 bg-yellow-400 text-black rounded-full">
                      Update
                    </button>
                    <button
                      onClick={() => handleDelete(parents.firebaseUid)}
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

export default AllParents;
