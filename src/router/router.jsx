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
import AllParents from "../Dashboard/AllParents/AllParents";
import AllTeacher from "../Dashboard/AllTeacher/AllTeacher";
import UpdateHeadline from "../Dashboard/UpdateHeadline/UpdateHeadline";
import UploadAssignment from "../Dashboard/UploadAssignment/UploadAssignment";
import Syllabus from "../Dashboard/Syllabus/Syllabus";
import UploadClassReport from "../Dashboard/UploadClassReport/UploadClassReport";
import AttendanceTracking from "../Dashboard/AttendanceTracking/AttendanceTracking";
import ClassSchedule from "../Dashboard/ClassSchedule/ClassSchedule";
import ReciveAssignment from "../Dashboard/ReciveAssignmenr/ReciveAssignment";

import AllUsers from "../Dashboard/AllUsers/AllUsers";


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
        path: "allUsers",
        element: <AllUsers />
      },
      {
        path: "/admin/all-student",
        element: <AllStudents />
      },
      {
        path: "/admin/all-parent",
        element: <AllParents />
      },
      {
        path: "/admin/all-teacher",
        element: <AllTeacher />
      },
      ///Teacher access
      {
        path: "/admin/upload-result",
        element: <UploadResult />
      },
      ///Teacher access
      {
        path: "/admin/upload-result",
        element: <UploadResult />
      },
      {
        path: "/admin/upload-assignment",
        element: <UploadAssignment />
      },
      {
        path: "/admin/recive-assignment",
        element: <ReciveAssignment />
      },
      {
        path: "/admin/upload-syllabus",
        element: <Syllabus />
      },
      {
        path: "/admin/upload-class-report",
        element: <UploadClassReport />
      },
      {
        path: "/admin/class-schedule",
        element: <ClassSchedule />
      },
      {
        path: "/admin/attendance-tracking",
        element: <AttendanceTracking />
      },
      {
        path: "/admin/update-headline",
        element: <UpdateHeadline />
      },
    ]
  }
]);

export default router;
