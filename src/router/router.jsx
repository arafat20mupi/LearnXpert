import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../components/Home/Home";
import Result from "../Pages/Result/Result";
import Quiz from "../components/Quiz/Quiz";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";

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
      {
        path: "/result",
        element: <Result />
      },
      {
        path: "/quiz",
        element: <Quiz />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
    ],
  },
]);

export default router;
