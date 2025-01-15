import  { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import AdminNavbar from './AdminNavbar/AdminNavbar';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      <AdminNavbar />
      <Sidebar open={sidebarOpen} toggle={handleToggle} />
      <div className={sidebarOpen ? "ml-14 md:ml-72 pt-20 pr-3 md:pr-10 duration-500" : "ml-14 md:ml-24 pt-20 pr-3 md:pr-10 duration-500"}>
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard