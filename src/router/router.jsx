import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
