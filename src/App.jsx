import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";
const App = () => {
  aos.init();
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
};

export default App;
