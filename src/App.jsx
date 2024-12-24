import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
const App = () => {
  aos.init();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default App;
