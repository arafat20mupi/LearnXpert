import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Gallery from "../Pages/Gallery/Gallery";
import Home from "../components/Home/Home";
import Result from "../Pages/Result/Result";
import Quiz from "../components/Quiz/Quiz";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import QuizClasses from "../components/Quiz-Classes/QuizClasses";
import AdmissionForm from "../components/AdmissionForm/AdmissionForm";
import AdmissionInfo from "../components/AdmissionInfo/AdmissionInfo";
import AdminHome from "../Dashboard/Home/AdminHome";
import AllStudents from "../Dashboard/AllStudents/AllStudents";
import Dashboard from "../Dashboard/Dashboard";
import UploadResult from "../Dashboard/UploadResult/UploadResult";

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
        element: <Result />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/quiz-classes",
        element: <QuizClasses />,
      },
      {
        path: "/admission",
        element: <AdmissionForm />,
      },
      {
        path: "/admissionInfo",
        element: <AdmissionInfo />,
      },

    ],

  },
  {
    path: "/admin",
    element: <Dashboard />,
    children: [
      {
        path: "/admin",
        element: <AdminHome />
      },
      {
        path: "/admin/all-student",
        element: <AllStudents />
      },
      {
        path: "/admin/upload-result",
        element: <UploadResult />
      },
    ]
  }
]);

export default router;
