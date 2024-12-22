import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import aos from "aos";
import "aos/dist/aos.css";
const App = () => {
  aos.init();
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default App;
