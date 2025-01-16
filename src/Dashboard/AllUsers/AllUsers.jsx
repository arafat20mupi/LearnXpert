import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { GiRunningNinja } from "react-icons/gi";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const AllUsers = () => {
    const axios = useAxiosPublic();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('/api/users');
                setUsers(response.data.dbUsers);
                console.log(response);
            } catch (err) {
                setError('Failed to fetch users');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, [axios]);

    const handleDelete = async (uid) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const token = localStorage.getItem('token');
                    await axios.delete(`/api/users/${uid}`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUsers(prev => prev.filter(user => user.uid !== uid));
                    Swal.fire('Deleted!', 'User has been deleted.', 'success');
                } catch (err) {
                    setError('Failed to delete user');
                    console.error(err);
                }
            }
        });
    };

    const handleUpdate = async (uid) => {
        const userToUpdate = users.find(user => user._id === uid);
        const { value: formValues } = await Swal.fire({
            title: 'Update User',
            html: `
                <input id="name" class="swal2-input" placeholder="Name" value="${userToUpdate?.name || ''}">
                <input id="email" class="swal2-input" placeholder="Email" value="${userToUpdate?.email || ''}">
            `,
            focusConfirm: false,
            preConfirm: () => {
                return {
                    displayName: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                };
            },
        });

        if (formValues) {
            try {
                await axios.put(`/api/users/${uid}`, formValues, );
                setUsers(prev =>
                    prev.map(user => (user.uid === uid ? { ...user, ...formValues } : user))
                );
                Swal.fire('Updated!', 'User has been updated.', 'success');
            } catch (err) {
                setError('Failed to update user');
                console.error(err);
            }
        }
    };
    const handleApprove = async (uid) => {
        const userToUpdate = users.find(user => user._id === uid);
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

    return (
        <div className="flex-1 p-10 h-full bg-gray-100">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <h2 className="text-2xl font-semibold p-6 border-b border-gray-200">Manage Users</h2>
                <table className="min-w-full">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="py-3 px-6 text-left text-gray-600">Username</th>
                            <th className="py-3 px-6 text-left text-gray-600">Email</th>
                            <th className="py-3 px-6 text-left text-gray-600">Role</th>
                            <th className="py-3 px-6 text-left text-gray-600">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.uid} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="py-3 px-6 border-b border-gray-300">{user.name || 'N/A'}</td>
                                <td className="py-3 px-6 border-b border-gray-300">{user.email}</td>
                                <td className="py-3 px-6 border-b border-gray-300">{user.role || 'User'}</td>
                                <td className="py-3 px-6 border-b border-gray-300">
                                    <button
                                        onClick={() => handleUpdate(user._id)}
                                        className="text-blue-500 hover:underline mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(user._id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleApprove(user._id)}
                                        className="text-red-500 hover:underline"
                                    >
                                        Approve
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;
