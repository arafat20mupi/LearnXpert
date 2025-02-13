import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import aos from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer/Footer";
import { Bounce, ToastContainer } from "react-toastify";

const App = () => {
  const [minHeight, setMinHeight] = useState("100vh");
  const navbarRef = useRef(null);

  useEffect(() => {
    aos.init();

    const updateMinHeight = () => {
      const navbarHeight = navbarRef.current?.offsetHeight || 0;
      setMinHeight(`calc(100vh - ${navbarHeight}px`);
    };

    updateMinHeight(); // Initial calculation
    window.addEventListener("resize", updateMinHeight); // Adjust on resize

    return () => window.removeEventListener("resize", updateMinHeight);
  }, []);

  return (
    <>
      {/* Pass refs to Navbar and Footer */}
      <div ref={navbarRef}>
        <Navbar />
      </div>

      <div style={{ minHeight }} >
        <Outlet />
      </div>

      <div >
        <Footer />
      </div>

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
