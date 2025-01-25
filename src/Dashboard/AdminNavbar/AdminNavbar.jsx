import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import { IoMenu } from "react-icons/io5";
const AdminNavbar = ({ toggle, open }) => {
  const { logOut } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logOut()
    toast.success('Logout Successful')
    navigate('/')
  }

  return (
    <div>
      <nav className="bg-white z-40 h-[80px] fixed top-0 left-0 right-0 px-10 shadow-md flex items-center justify-between">
        <div className="flex items-center space-x-5">
          <IoMenu onClick={toggle} className="text-3xl font-bold cursor-pointer" />
          <h1>LearnXpert</h1>
        </div>
        <button onClick={handleLogout} className="px-3 py-1 bg-orange-500 hover:bg-orange-600 duration-300 text-white rounded-md">Log out</button>
      </nav>
    </div>
  );
};

export default AdminNavbar;
