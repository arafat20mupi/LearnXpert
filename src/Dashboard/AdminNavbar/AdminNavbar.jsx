import { useContext, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const AdminNavbar = ({}) => {
  const [isOpen, setisOpen] = useState(false);
  const [isDropDown, setisDropDown] = useState(false);
  const {logOut} = useContext(AuthContext)
  const navigate = useNavigate()

  const handleDropDownone = () => {
    setisDropDown(!isDropDown);
  };
  const handleMenu = () => {
    setisDropDown(false);
    setisOpen(!isOpen);
  };
  const handledropdownHidden = () => {
    setisOpen(!isOpen);
    setisDropDown(false);
  };
  const handleLogout = () => {
    logOut()
    toast.success('Logout Successful')
    navigate('/')
  }

  return (
    <div>
      <nav className="bg-white z-40 h-[80px] fixed top-0 left-0 right-0 px-10 shadow-md flex items-center justify-between">
        <div>
          <h1>LearnXpert</h1>
        </div>
        <button onClick={handleLogout} className="px-3 py-1 bg-orange-500 hover:bg-orange-600 duration-300 text-white rounded-md">Log out</button>
      </nav>
    </div>
  );
};

export default AdminNavbar;
